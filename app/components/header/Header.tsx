"use client";

import Logo from "../logo/logo";
import PageNav from "../page_nav/page_nav";
import TogglButton from "../toggle_button/toggl_button";

export default function Header() {
  return (
    <header
      className="mx-auto w-full max-w-290 px-5 sm:px-8 xl:px-0 flex items-center justify-between gap-4 py-6"
    >
      <Logo />
      <PageNav />
      <TogglButton />
    </header>
  );
}