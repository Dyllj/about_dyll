"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { CONTACT, TOPICS, type Topic } from "./content";

export type FieldName = "name" | "email" | "message";
export type Status = "idle" | "sending" | "sent" | "error";

type Values = {
  name: string;
  email: string;
  message: string;
  topic: Topic;
  /** Honeypot: hidden from people, so only bots fill it in. */
  company: string;
};

type Errors = Partial<Record<FieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_ORDER: FieldName[] = ["name", "email", "message"];
const EMAIL_SEND_COOLDOWN_MS = 10_000;

const INITIAL_VALUES: Values = { name: "", email: "", message: "", topic: TOPICS[0], company: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please tell me your name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Enter a valid email so I can reply.";
  if (values.message.trim().length < 10) errors.message = "A few more words, please (at least 10 characters).";
  return errors;
}

/** Thrown when the EmailJS environment variables are missing or empty. */
class EmailConfigError extends Error {
  constructor() {
    super("EmailJS isn't configured. Add the service ID, template ID, and public key to the environment.");
    this.name = "EmailConfigError";
  }
}

/** Reads the EmailJS credentials. Each variable is referenced literally so Next.js can inline it at build time. */
function getEmailConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) throw new EmailConfigError();
  return { serviceId, templateId, publicKey };
}

/** Turns an EmailJS failure into a message a visitor can act on. */
function describeSendError(error: unknown): string {
  if (error instanceof EmailConfigError) return error.message;

  // EmailJS rejects with { status, text }; limitRate rejects with { status: 429 }
  const status = typeof error === "object" && error !== null && "status" in error ? Number(error.status) : 0;
  if (status === 429) return "You're sending messages too quickly. Please wait 10 seconds before trying again.";
  if (status === 403) return "The email service refused this request. Please use the email link below.";
  return "Sorry, your message could not be sent. Please try again or use the email link below.";
}

/** Sends the message through EmailJS. Rejects if the service is not configured or EmailJS refuses it. */
async function sendMessage(values: Values) {
  const { serviceId, templateId, publicKey } = getEmailConfig();

  const name = values.name.trim();
  const email = values.email.trim();
  const [firstName = "", ...lastNameParts] = name.split(/\s+/);

  await emailjs.send(
    serviceId,
    templateId,
    {
      firstName,
      lastName: lastNameParts.join(" "),
      name,
      email,
      from_name: name,
      from_email: email,
      reply_to: email,
      topic: values.topic,
      message: values.message.trim(),
      subject: `${values.topic} — new message from ${name}`,
      time: new Date().toLocaleString("en-PH", {
        timeZone: CONTACT.timeZone,
        dateStyle: "medium",
        timeStyle: "short",
      }),
    },
    {
      publicKey,
      // EmailJS persists this per-browser cooldown and rejects rapid repeats with status 429.
      blockHeadless: true,
      limitRate: { id: "contact-form", throttle: EMAIL_SEND_COOLDOWN_MS },
    },
  );
}

/** A ready-to-send email with the visitor's message, used as a fallback if sending fails. */
export function buildMailto(values: Pick<Values, "name" | "email" | "message" | "topic">) {
  const name = values.name.trim();
  const subject = `${values.topic} — message from ${name}`;
  const body = `${values.message.trim()}\n\n— ${name} (${values.email.trim()})`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Values, validation and submit logic for the contact form. */
export function useContactForm() {
  const [values, setValues] = useState<Values>(INITIAL_VALUES);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // An error is shown once the field was left, or after the first send attempt
  const allErrors = validate(values);
  const errors: Errors = {};
  for (const field of FIELD_ORDER) {
    if (submitted || touched[field]) errors[field] = allErrors[field];
  }

  const setField = <K extends keyof Values>(key: K, value: Values[K]) =>
    setValues((current) => ({ ...current, [key]: value }));

  const blur = (field: FieldName) => setTouched((current) => ({ ...current, [field]: true }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const firstInvalid = FIELD_ORDER.find((field) => allErrors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // Bots fill the hidden field. Pretend it worked and send nothing.
    if (values.company) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await sendMessage(values);
      setStatus("sent");
    } catch (error) {
      console.error("Unable to send the contact message.", error);
      setErrorMessage(describeSendError(error));
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setTouched({});
    setSubmitted(false);
    setErrorMessage("");
    setStatus("idle");
  };

  return { values, errors, status, errorMessage, setField, blur, submit, reset };
}