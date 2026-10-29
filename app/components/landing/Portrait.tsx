import Image from "next/image";
import OrbitNav from "./OrbitNav";

const styles = {
  wrapper:
    "animate-rise relative order-first mx-auto size-72 [animation-delay:200ms] motion-reduce:animate-none sm:size-80 lg:order-last xl:size-96",
  glow: "absolute inset-6 rounded-full bg-brand/25 blur-3xl",
  slowRing:
    "absolute inset-0 animate-spin rounded-full border-2 border-dashed border-brand/25 [animation-duration:40s] motion-reduce:animate-none",
  fastArc:
    "absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand [animation-duration:8s] motion-reduce:animate-none",
  orbitDot:
    "absolute -top-1.75 left-1/2 size-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_20px_4px_rgb(0_71_255/0.55)]",
  photoFrame:
    "absolute inset-4 overflow-hidden rounded-full border-4 border-white bg-zinc-900 shadow-2xl shadow-brand/20",
  photo: "object-cover object-[50%_12%]",
};

/** Circular portrait with animated rings; the nav icons orbit it. */
export default function Portrait() {
  return (
    <div className={styles.wrapper}>
      <span aria-hidden="true" className={styles.glow} />
      <span aria-hidden="true" className={styles.slowRing} />

      {/* Fast blue arc with an orbiting dot (echoes the ring in the header logo) */}
      <span aria-hidden="true" className={styles.fastArc}>
        <span className={styles.orbitDot} />
      </span>

      <div className={styles.photoFrame}>
        <Image
          src="/about_dyll_assets/e.jpg"
          alt="Portrait of Dyll"
          fill
          priority
          sizes="(min-width: 1280px) 384px, (min-width: 640px) 320px, 288px"
          className={styles.photo}
        />
      </div>

      <OrbitNav />
    </div>
  );
}