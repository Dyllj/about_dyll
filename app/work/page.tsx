import Logo from "../components/logo/logo";
import PageNav from "../components/page_nav/page_nav";
import TogglButton from "../components/toggle_button/toggl_button";

const projects = [
  {
    title: "Commerce Experience",
    description:
      "Designed and built a polished online storefront experience focused on conversion, usability, and product storytelling.",
    stack: ["Next.js", "TypeScript", "Stripe"],
    accent: "bg-blue-50 text-blue-700",
  },
  {
    title: "Operations Dashboard",
    description:
      "Created a data-rich dashboard to monitor performance, uncover bottlenecks, and turn operational insights into faster decisions.",
    stack: ["React", "Node.js", "PostgreSQL"],
    accent: "bg-slate-100 text-slate-700",
  },
  {
    title: "Workflow Automation",
    description:
      "Built internal tools that streamlined repetitive tasks, reduced manual work, and improved consistency across the team.",
    stack: ["Python", "APIs", "Automation"],
    accent: "bg-indigo-50 text-indigo-700",
  },
];

export default function WorkPage() {
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
            Selected Work
          </p>
          <h1
            className="mt-4 text-4xl font-bold text-zinc-900 md:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Building thoughtful digital experiences.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            I work across product, design, and engineering to turn ideas into reliable software that feels intuitive for real people.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`mb-6 inline-flex rounded-full px-3 py-1 text-xs font-medium ${project.accent}`}>
                {project.title}
              </div>
              <p className="text-base leading-7 text-zinc-700">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
