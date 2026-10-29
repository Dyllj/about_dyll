"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds to wait before animating, for staggering siblings. */
  delay?: number;
};

const styles =
  "translate-y-6 opacity-0 transition-[opacity,translate] duration-700 ease-out " +
  "data-[shown=true]:translate-y-0 data-[shown=true]:opacity-100 " +
  "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

/** Fades and slides its children in once, the first time they scroll into view. */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${styles} ${className}`}
    >
      {children}
    </div>
  );
}