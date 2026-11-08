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

const INITIAL_VALUES: Values = { name: "", email: "", message: "", topic: TOPICS[0], company: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please tell me your name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Enter a valid email so I can reply.";
  if (values.message.trim().length < 10) errors.message = "A few more words, please (at least 10 characters).";
  return errors;
}

/** Sends the message through EmailJS. Throws if the service is not configured or rejects it. */
async function sendMessage(values: Values) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS isn't configured. Add the service ID, template ID, and public key to the environment.",
    );
  }

  const name = values.name.trim();
  const response = await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: name,
      from_email: values.email.trim(),
      reply_to: values.email.trim(),
      topic: values.topic,
      message: values.message.trim(),
      subject: `${values.topic} — new message from ${name}`,
    },
    { publicKey },
  );

  if (response.status !== 200) {
    throw new Error(`EmailJS rejected the message (${response.status}).`);
  }
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
      setErrorMessage(
        error instanceof Error && error.message.startsWith("EmailJS isn't configured")
          ? error.message
          : "Sorry, your message could not be sent. Please try again or use the email link below.",
      );
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