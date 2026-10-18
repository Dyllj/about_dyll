"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo({ className = "" }: { className?: string }) {
  const router = useRouter();
  
  const navigateToLanding = () => {
    router.push("/");
  };

  return (
    <button
      onClick={navigateToLanding}
      className={`inline-flex items-center cursor-pointer ${className}`}
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