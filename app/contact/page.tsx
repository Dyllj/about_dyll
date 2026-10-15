"use client";

import { useRouter } from "next/navigation";

export default function ContactRedirect() {
  const router = useRouter();
  router.replace("/#contact");
  return null;
}