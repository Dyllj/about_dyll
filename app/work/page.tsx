"use client";

import { useRouter } from "next/navigation";

export default function WorkRedirect() {
  const router = useRouter();
  router.replace("/#work");
  return null;
}