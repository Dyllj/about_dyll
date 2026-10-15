"use client";

import Logo from "../logo/logo";
import PageNav from "../page_nav/page_nav";
import TogglButton from "../toggle_button/toggl_button";

export default function Header() {
  return (
    <header
      className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 xl:px-0 grid grid-cols-[1fr_auto_1fr] items-center py-6"
    >
      <Logo />
      <PageNav />
      <div className="justify-self-end">
        <TogglButton />
      </div>
    </header>
  );
}