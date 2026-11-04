import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

const RESET_AFTER_MS = 2000;

/** Copies `value` to the clipboard and shows a check mark for two seconds. */
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return; // Clipboard needs a secure page; stay quiet if it is not available
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), RESET_AFTER_MS);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className={`relative grid size-11 shrink-0 place-items-center rounded-full border transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        copied
          ? "border-green-300 bg-green-100 text-green-700"
          : "border-zinc-200 bg-white text-zinc-600 hover:border-brand hover:text-brand"
      }`}
    >
      {copied ? <CheckIcon className="animate-pop motion-reduce:animate-none" /> : <CopyIcon />}
      <span role="status" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}