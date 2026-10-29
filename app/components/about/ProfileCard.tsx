import Image from "next/image";
import { PROFILE } from "./content";

const styles = {
  wrapper: "relative isolate mx-auto w-full max-w-sm lg:max-w-md",
  // Two tilted layers behind the photo give it depth
  tiltedFill: "absolute -inset-3 -z-10 rotate-3 rounded-4xl bg-brand/10",
  tiltedOutline: "absolute -inset-3 -z-10 -rotate-2 rounded-4xl border-2 border-dashed border-brand/25",
  frame:
    "group relative aspect-4/5 overflow-hidden rounded-4xl border-4 border-white bg-zinc-900 shadow-2xl shadow-brand/20",
  photo: "object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105",
  fade: "absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent",
  nameplate:
    "absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-white/15 p-4 text-white backdrop-blur-md",
  status:
    "absolute -right-3 top-8 flex animate-float items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-xl shadow-brand/10 backdrop-blur motion-reduce:animate-none",
};

/** Portrait with a name plate and a floating availability badge. */
export default function ProfileCard() {
  return (
    <div className={styles.wrapper}>
      <span aria-hidden="true" className={styles.tiltedFill} />
      <span aria-hidden="true" className={styles.tiltedOutline} />

      <div className={styles.frame}>
        <Image
          src={PROFILE.photo}
          alt={PROFILE.photoAlt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 90vw"
          className={styles.photo}
        />
        <div aria-hidden="true" className={styles.fade} />

        <div className={styles.nameplate}>
          <p className="text-xl font-bold leading-tight">{PROFILE.name}</p>
          <p className="mt-1 text-sm text-white/80">
            {PROFILE.role} · {PROFILE.location}
          </p>
        </div>
      </div>

      <div className={styles.status}>
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500/70 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2.5 rounded-full bg-green-600" />
        </span>
        {PROFILE.status}
      </div>
    </div>
  );
}