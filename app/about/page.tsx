"use client";

import { useRouter } from "next/navigation";

export default function AboutRedirect() {
  const router = useRouter();
  router.replace("/#about");
  return null;
}