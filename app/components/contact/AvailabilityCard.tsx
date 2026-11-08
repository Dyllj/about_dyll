import { useEffect, useState } from "react";
import { MapPinIcon, MoonIcon, SunIcon } from "./Icons";
import { CONTACT } from "./content";

const styles = {
  card: "relative overflow-hidden rounded-3xl bg-brand p-6 text-white shadow-2xl shadow-brand/25 sm:p-7",
  dots: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.18)_1px,transparent_1px)] bg-size-[22px_22px] mask-[linear-gradient(to_bottom_right,black,transparent_70%)]",
  glow: "pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-white/15 blur-3xl",
};

/** Hour (0-23) and a readable time for the configured time zone. */
function timeIn(zone: string, date: Date) {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", { hour: "numeric", hourCycle: "h23", timeZone: zone }).format(date),
  );
  const label = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: zone,
  }).format(date);
  return { hour, label };
}

/** Blue card with my location, a live local-time clock and my availability. */
export default function AvailabilityCard() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const { hour, label } = timeIn(CONTACT.timeZone, now);
  const daytime = hour >= 6 && hour < 18;

  return (
    <section aria-label="Location and availability" className={styles.card}>
      <span aria-hidden="true" className={styles.dots} />
      <span aria-hidden="true" className={styles.glow} />

      <div className="relative flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <MapPinIcon width={16} height={16} />
            {CONTACT.location}
          </p>

          <p className="mt-3 flex items-center gap-3 text-4xl font-bold leading-none tracking-tight tabular-nums sm:text-5xl">
            {daytime ? <SunIcon width={32} height={32} /> : <MoonIcon width={32} height={32} />}
            <time>{label}</time>
          </p>
          <p className="mt-2 text-sm text-white/80">My local time right now</p>
        </div>

        <p className="inline-flex items-center gap-2.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-300/80 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2.5 rounded-full bg-green-300" />
          </span>
          {CONTACT.status}
        </p>
      </div>
    </section>
  );
}