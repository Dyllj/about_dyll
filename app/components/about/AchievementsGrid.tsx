import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ACHIEVEMENT_CARDS } from "./content";

const styles = {
  grid: "mt-10 grid list-none gap-6 p-0 md:grid-cols-2",
  card: "group flex h-full flex-col overflow-hidden rounded-4xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/10",
  media: "relative aspect-3/2 overflow-hidden bg-zinc-100",
  photo: "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
  shade: "absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/35 to-transparent",
  category:
    "absolute left-4 top-4 rounded-full bg-brand px-3.5 py-1.5 text-[13px] font-medium text-white shadow-lg shadow-black/20",
  index:
    "absolute right-4 top-4 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wider text-zinc-800 backdrop-blur",
  body: "flex flex-1 flex-col p-7",
  title: "text-2xl font-bold leading-tight tracking-tight text-zinc-900",
  description: "mt-3 text-[15px] leading-relaxed text-zinc-600",
};

/** Achievement cards: large photo on top, details underneath. */
export default function AchievementsGrid({ className = "" }: { className?: string }) {
  const count = String(ACHIEVEMENT_CARDS.length).padStart(2, "0");

  return (
    <section aria-labelledby="achievements-heading" className={className}>
      <Reveal>
        <SectionHeading
          id="achievements-heading"
          eyebrow="Recognition"
          title="My"
          accent="achievements"
          aside={
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-semibold text-zinc-600">
              {count} total
            </span>
          }
        />
      </Reveal>

      <ul className={styles.grid}>
        {ACHIEVEMENT_CARDS.map(({ category, title, description, image }, index) => (
          <li key={title}>
            <Reveal delay={(index % 2) * 120} className="h-full">
              <article className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1160px) 568px, (min-width: 768px) 45vw, 100vw"
                    className={styles.photo}
                    style={{ objectPosition: image.position }}
                  />
                  <div aria-hidden="true" className={styles.shade} />
                  <span className={styles.category}>{category}</span>
                  <span aria-hidden="true" className={styles.index}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.body}>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.description}>{description}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}