"use client";

import Image from "next/image";

const container = "mx-auto w-full max-w-[1160px] px-5 sm:px-8 xl:px-0";
const surface = "rounded-[28px] border border-[#e1e4ea] bg-[#eef0f3]";
const chip =
  "inline-flex items-center rounded-full border border-[#e1e4ea] bg-white px-3.5 py-1.5 text-[13px] font-medium";
const muted = "text-[#5b6270]";

const techStack = [
  { short: "R", name: "React" },
  { short: "JS", name: "JavaScript" },
  { short: "TS", name: "TypeScript" },
  { short: "php", name: "PHP" },
  { short: "Py", name: "Python" },
  { short: "SQL", name: "MySQL" },
  { short: "Sb", name: "Supabase" },
];

type Achievement = {
  category: string;
  title: string;
  description?: string;
  image?: string;
};

const achievements: Achievement[] = [
  {
    category: "Education",
    title: "Cum Laude Graduate (2025–2026)",
    description:
      "Graduated with Latin honors, recognized for consistent academic excellence throughout the 2025–2026 academic year.",
  },
  {
    category: "Research",
    title: "Best Paper Award",
    description:
      "Won Best Paper at the 6th International Research Congress, hosted by St. Michael's College, Inc. in Iligan City, for AlerTech, a mobile incident reporting app built as a capstone project. I served as Project Coordinator.",
  },
  {
    category: "Competition",
    title: "Seminar R.A.I.S.E. — 1st Place",
    description: "Took first place in the Seminar R.A.I.S.E. competition.",
  },
  {
    category: "Research",
    title: "Researcher of the Year",
    description:
      "Named Researcher of the Year in recognition of outstanding research work.",
  },
];

// Derived from the list above so the number never goes out of date
const stats = [
  { value: "00", label: "Projects" },
  { value: "00", label: "Years of experience" },
  { value: String(achievements.length).padStart(2, "0"), label: "Achievements" },
];

export default function AboutView() {
  return (
    <main className={container} id="about-view">
      <section className="grid gap-6 lg:grid-cols-[340px_1fr] mt-15">
        <div className={`${surface} p-5 lg:row-span-3 h-150`}>
          <div className="relative h-95 overflow-hidden rounded-[20px] border border-[#e1e4ea] bg-white">
            <Image
              src="/about_dyll_assets/e.jpg"
              alt="Wendyll Jay Tautoan"
              fill
              sizes="340px"
              className="object-cover object-top"
            />
          </div>
          <div className="px-1.5 pb-1.5 pt-5">
            <h2 className="text-[22px] font-bold">Wendyll Jay Tautoan</h2>
            <p className={`mt-0.5 ${muted}`}>Full Stack Developer</p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              <span className={chip}>Cebu City</span>
              <span className={`${chip} gap-2`}>
                <span className="size-2 rounded-full bg-green-600" />
                Available
              </span>
            </div>
          </div>
        </div>

        <div className={` px-10 py-9`}>
          <h1 className="text-4xl font-bold tracking-tight">
            About <span className="text-brand">me</span>
          </h1>
          <p className="mt-4 max-w-180 text-[17px] leading-[1.7]">
            I&apos;m a software developer focused on building intuitive,
            practical, and engaging digital experiences. My work spans web
            development, IoT, and real-world applications, using{" "}
            <span className="font-medium text-brand">
              AI-assisted development
            </span>{" "}
            to turn ideas into working solutions.
          </p>
          <p>
            I enjoy collaborating,
            solving problems creatively, and continuously learning in ways
            that are useful, maintainable, and meaningful.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label} className={`${surface} px-7.5 py-6.5`}>
              <div className="text-5xl font-bold leading-none tracking-tight">
                {value}
              </div>
              <div className={`mt-2 text-[15px] ${muted}`}>{label}</div>
            </div>
          ))}
        </div>

        <div className={`${surface} px-10 py-7.5`}>
          <h2 className="text-[26px] font-bold tracking-tight">
            Technologies
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {techStack.map(({ short, name }) => (
              <li key={name} className="w-22 text-center">
                <div className="flex h-17 items-center justify-center rounded-[20px] border border-[#e1e4ea] bg-white text-xl font-bold">
                  {short}
                </div>
                <div className={`mt-2 text-[13px] ${muted}`}>{name}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-22" aria-labelledby="achievements-heading">
        <div className="flex items-baseline gap-3.5">
          <h2
            id="achievements-heading"
            className="text-4xl font-bold tracking-tight"
          >
            My <span className="text-brand">achievements</span>
          </h2>
          <span className={muted}>{achievements.length}</span>
        </div>

        <ul className="mt-7 grid gap-6 md:grid-cols-2">
          {achievements.map(({ category, title, description, image }) => (
            <li key={title} className={`${surface} flex gap-6 p-6.5`}>
              <div className="relative size-37.5 shrink-0 overflow-hidden rounded-[20px] border border-[#e1e4ea] bg-white">
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block rounded-full bg-brand px-3.5 py-1.5 text-[13px] font-medium text-white">
                  {category}
                </span>
                <h3 className="mb-3.5 mt-2 text-[21px] font-bold leading-tight">
                  {title}
                </h3>
                {description ? (
                  <p className={`text-[15px] leading-relaxed ${muted}`}>
                    {description}
                  </p>
                ) : (
                  <div aria-hidden="true" className="space-y-3">
                    <div className="h-2 w-full rounded bg-[#d9dde4]" />
                    <div className="h-2 w-[92%] rounded bg-[#d9dde4]" />
                    <div className="h-2 w-[60%] rounded bg-[#d9dde4]" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}