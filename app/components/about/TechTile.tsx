"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import { FALLBACK_META, TECH_META } from "./TechMeta";

type TechTileProps = {
  name: string;
  /** Fallback glyph shown only if there is no icon for this technology. */
  short: string;
  index: number;
};

const MAX_TILT = 12; // degrees

/** One technology: ambient animation at rest, cursor-aware tilt + spotlight on hover. */
export default function TechTile({ name, short, index }: TechTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const meta = TECH_META[name];
  const color = meta?.color ?? FALLBACK_META.color;
  const category = meta?.category ?? FALLBACK_META.category;
  const Icon = meta?.Icon;

  // Writes CSS variables straight to the element so moving the mouse never re-renders React.
  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.setProperty("--ry", `${(x - 0.5) * 2 * MAX_TILT}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 2 * MAX_TILT}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.removeProperty("--rx");
    el.style.removeProperty("--ry");
  };

  const style = {
    "--tech": color,
    // Each tile floats out of phase with its neighbours
    "--float-delay": `${index * -0.9}s`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className="tech-tile"
      style={style}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div className="tech-orb" aria-hidden="true">
        <span className="tech-glow" />
        <span className="tech-ring" />
        <span className="tech-float">
          <span className="tech-icon">
            {Icon ? <Icon className="size-8" /> : <span className="text-xl font-bold">{short}</span>}
          </span>
        </span>
      </div>

      <p className="tech-name">{name}</p>
      <p className="tech-category">{category}</p>
    </div>
  );
}