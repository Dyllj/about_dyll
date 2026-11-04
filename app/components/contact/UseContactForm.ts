"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, TOPICS, type Topic } from "./content";

export type FieldName = "name" | "email" | "message";
export type Status = "idle" | "sending" | "sent" | "error";
/** "service" = sent through a form service, "email-app" = opens the visitor's mail app. */
export type DeliveryMode = "service" | "email-app";

type Values = {
  name: string;
  email: string;
  message: string;
  topic: Topic;
  /** Honeypot: hidden from people, so only bots fill it in. */
  company: string;
};

type Errors = Partial<Record<FieldName, string>>;

// Optional. Set NEXT_PUBLIC_CONTACT_ENDPOINT (e.g. a Formspree URL) in .env.local and
// in Vercel to receive messages straight in your inbox. Without it, the form opens
// the visitor's email app with the message already written.
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

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

async function postToService(url: string, values: Values) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      topic: values.topic,
      message: values.message.trim(),
    }),
  });
  if (!response.ok) throw new Error(`Form service answered ${response.status}`);
}

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

  const mode: DeliveryMode = ENDPOINT ? "service" : "email-app";

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
      if (ENDPOINT) await postToService(ENDPOINT, values);
      else window.location.href = buildMailto(values);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setTouched({});
    setSubmitted(false);
    setStatus("idle");
  };

  return { values, errors, status, mode, setField, blur, submit, reset };
}