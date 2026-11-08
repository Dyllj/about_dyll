"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex cursor-pointer items-center rounded-full border-2 border-brand/25 p-0.5 transition-colors duration-300 hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
      aria-label="Wendyll Jay Tautoan home"
    >
      <Image
        src="/about_dyll_assets/LOGO.svg"
        alt=""
        width={50}
        height={50}
        className="h-20 w-20 rounded-full"
      />
    </Link>
  );
}