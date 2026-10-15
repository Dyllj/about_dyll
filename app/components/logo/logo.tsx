"use client";

import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  const navigateToLanding = () => {
    window.location.hash = "";
  };

  return (
    <button
      onClick={navigateToLanding}
      className={`inline-flex items-center ${className}`}
      aria-label="About Dyll home"
    >
      <Image
        src="/about_dyll_assets/LOGO.svg"
        alt="About Dyll logo"
        width={50}
        height={50}
        className="h-20 w-20 rounded-full"
      />
    </button>
  );
}