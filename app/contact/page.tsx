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
    <main className="min-h-screen bg-white">
      <header className="absolute left-80 top-3 z-40">
        <Logo />
      </header>
      <div className="absolute right-20 top-6 z-40 flex items-center gap-15">
        <PageNav />
        <TogglButton />
      </div>
      <section className="mt-15 mx-auto max-w-5xl px-6 pb-16 pt-20 md:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700"
            style={{ fontFamily: "var(--font-noto-sans-hebrew), sans-serif" }}
          >
            Contact
          </p>
          <h1
            className="mt-4 text-4xl font-bold text-zinc-900 md:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Let&apos;s build something meaningful.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Whether you&apos;re looking for a product partner, a new teammate, or a developer to turn an idea into a working experience, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition-colors duration-300 hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
                {method.title}
              </p>
              <p className="mt-4 text-xl font-semibold text-zinc-900">{method.value}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
