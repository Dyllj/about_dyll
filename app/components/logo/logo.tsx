"use client";

import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  // page.tsx shows LandingView whenever the URL has no #about / #work / #contact
  // hash, and it reacts to the `hashchange` event. router.push("/") and
  // history.pushState() change the URL without firing that event, so the view
  // never switched. Clear the hash ourselves and fire the event manually.
  const goToLanding = () => {
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      type="button"
      onClick={goToLanding}
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