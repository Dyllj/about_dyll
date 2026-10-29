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
      className={`inline-flex cursor-pointer items-center rounded-full border-2 border-brand/25 p-0.5 transition-colors duration-300 hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
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