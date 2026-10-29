import { NAV_ITEMS } from "../nav/nav-items";

/**
 * Where each item starts on the portrait ring, in degrees clockwise from the top.
 * Keep the gaps equal (360 / number of items = 120) so the spacing stays symmetrical
 * while the ring turns.
 */
const RING_ANGLES: Record<string, number> = {
  About: 300,
  Work: 60,
  Contact: 180,
};

const styles = {
  // The turning ring. It ignores the pointer itself so only the icons catch hovers,
  // and it pauses while an icon is hovered or focused so it is easy to click.
  ring: "group/orbit pointer-events-none absolute inset-0 list-none animate-orbit hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none",
  item: "absolute -translate-x-1/2 -translate-y-1/2",
  link: "pointer-events-auto group relative block rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
  // Turns the opposite way at the same speed so the icon and label stay upright
  upright:
    "animate-orbit-counter block group-hover/orbit:[animation-play-state:paused] group-focus-within/orbit:[animation-play-state:paused] motion-reduce:animate-none",
  circle:
    "flex size-12 items-center justify-center rounded-full border-2 border-brand/20 bg-white/90 text-zinc-700 shadow-lg shadow-brand/10 backdrop-blur-md transition-[transform,color,background-color,border-color] duration-300 ease-in-out sm:size-14 " +
    "group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-white " +
    "group-focus-visible:scale-110 group-focus-visible:border-brand group-focus-visible:bg-brand group-focus-visible:text-white " +
    "motion-reduce:transition-none",
  icon: "size-5 sm:size-6",
  // Tooltip that slides up from under the circle on hover / keyboard focus
  label:
    "pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 -translate-y-2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-sm font-medium text-zinc-800 opacity-0 shadow-md " +
    "group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-[opacity,translate] group-hover:duration-300 " +
    "group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:transition-[opacity,translate] group-focus-visible:duration-300 " +
    "motion-reduce:transition-none",
};

/** Converts a ring angle into CSS left/top percentages inside the portrait box. */
function pointOnRing(angle: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    left: `${50 + 50 * Math.sin(radians)}%`,
    top: `${50 - 50 * Math.cos(radians)}%`,
  };
}

/** The site navigation: icon buttons that revolve around the portrait. */
export default function OrbitNav() {
  return (
    <nav aria-label="Main navigation">
      <ol className={styles.ring}>
        {NAV_ITEMS.map(({ label, href, icon }) => (
          <li key={label} style={pointOnRing(RING_ANGLES[label] ?? 0)} className={styles.item}>
            <a href={href} className={styles.link}>
              <span className={styles.upright}>
                <span className={styles.circle}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.icon}
                  >
                    {icon}
                  </svg>
                </span>
                <span className={styles.label}>{label}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}