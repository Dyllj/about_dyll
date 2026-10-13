import Logo from "../components/logo/logo";
import PageNav from "../components/page_nav/page_nav";
import TogglButton from "../components/toggle_button/toggl_button";

const contactMethods = [
  {
    title: "Email",
    value: "hello@aboutdyll.com",
    href: "mailto:hello@aboutdyll.com",
  },
  {
    title: "LinkedIn",
    value: "/in/aboutdyll",
    href: "https://www.linkedin.com",
  },
  {
    title: "GitHub",
    value: "github.com/aboutdyll",
    href: "https://github.com",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto flex w-full flex-col gap-5 px-5 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pt-6 lg:px-10">
        <Logo className="sm:ml-40" />
        <div className="ml-auto flex flex-wrap items-center justify-end gap-10">
          <PageNav />
          <TogglButton />
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
        <section aria-labelledby="contact-heading">
          <header className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700"
            style={{ fontFamily: "var(--font-noto-sans-hebrew), sans-serif" }}
          >
            Contact
          </p>
          <h1
            id="contact-heading"
            className="mt-4 text-4xl font-bold text-zinc-900 md:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Let&apos;s build something meaningful.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Whether you&apos;re looking for a product partner, a new teammate, or a developer to turn an idea into a working experience, I&apos;d love to hear from you.
          </p>
          </header>

        <ul className="mt-12 grid list-none gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => (
            <li key={method.title}>
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                className="block h-full wrap-break-word rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition-colors duration-300 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
                  {method.title}
                </h2>
                <p className="mt-4 text-lg font-semibold text-zinc-900 sm:text-xl">{method.value}</p>
              </a>
            </li>
          ))}
        </ul>
        </section>
      </main>
    </div>
  );
}
