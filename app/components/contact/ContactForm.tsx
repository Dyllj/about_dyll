import Field from "./Field";
import FormSuccess from "./FormSuccess";
import { SendIcon } from "./Icons";
import TopicPicker from "./TopicPicker";
import { CONTACT, MESSAGE_MAX } from "./content";
import { buildMailto, useContactForm } from "./UseContactForm";

const styles = {
  card: "relative overflow-hidden rounded-4xl border border-[#e1e4ea] bg-white p-6 shadow-2xl shadow-brand/10 sm:p-9",
  glow: "pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/10 blur-3xl",
  plane: "pointer-events-none absolute -bottom-6 -right-6 size-44 -rotate-12 text-brand/[0.06]",
  submit:
    "group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-8 text-base font-semibold text-white shadow-lg shadow-brand/30 transition duration-300 before:absolute before:inset-y-0 before:-left-full before:w-1/2 before:-skew-x-20 before:bg-white/25 before:transition-all before:duration-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 hover:before:left-[130%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-70 sm:w-auto sm:min-w-52",
};

/** The message form: topic chips, floating-label fields, validation and a send button. */
export default function ContactForm() {
  const form = useContactForm();
  const { values, errors, status } = form;

  if (status === "sent") return <FormSuccess onReset={form.reset} />;

  const sending = status === "sending";

  return (
    <form
      noValidate
      onSubmit={form.submit}
      aria-labelledby="contact-form-title"
      aria-busy={sending}
      className={styles.card}
    >
      <span aria-hidden="true" className={styles.glow} />
      <SendIcon aria-hidden="true" strokeWidth={1.5} className={styles.plane} />

      <div className="relative space-y-6">
        <header>
          <h2 id="contact-form-title" className="text-2xl font-bold tracking-tight text-zinc-900">
            Send me a message
          </h2>
          <p className="mt-1.5 text-[15px] text-zinc-600">Tell me a little about what you have in mind.</p>
        </header>

        <TopicPicker value={values.topic} onChange={(topic) => form.setField("topic", topic)} />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            name="name"
            label="Your name"
            value={values.name}
            error={errors.name}
            autoComplete="name"
            onChange={(value) => form.setField("name", value)}
            onBlur={() => form.blur("name")}
          />
          <Field
            name="email"
            type="email"
            label="Your email"
            value={values.email}
            error={errors.email}
            autoComplete="email"
            onChange={(value) => form.setField("email", value)}
            onBlur={() => form.blur("email")}
          />
        </div>

        <Field
          name="message"
          multiline
          label="Your message"
          maxLength={MESSAGE_MAX}
          value={values.message}
          error={errors.message}
          onChange={(value) => form.setField("message", value)}
          onBlur={() => form.blur("message")}
        />

        {/* Honeypot: invisible to people, tempting to bots */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto size-px overflow-hidden">
          <label>
            Company
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={values.company}
              onChange={(event) => form.setField("company", event.target.value)}
            />
          </label>
        </div>

        {status === "error" && (
          <p role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Sorry, your message could not be sent.{" "}
            <a href={buildMailto(values)} className="font-semibold underline">
              Send it from your email app instead
            </a>{" "}
            or write to{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">
              {CONTACT.email}
            </a>
            .
          </p>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" disabled={sending} className={styles.submit}>
            {sending ? (
              <>
                <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Sending…
              </>
            ) : (
              <>
                Send message
                <SendIcon
                  width={18}
                  height={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          <p className="text-sm text-zinc-500">I&apos;ll reply to the email you enter.</p>
        </div>
      </div>
    </form>
  );
}