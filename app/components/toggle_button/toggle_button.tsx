"use client";

import styled from "styled-components";
import { flushSync } from "react-dom";
import { useEffect, useState, type ChangeEvent } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;

  try {
    const savedTheme = window.localStorage.getItem("color-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme === "dark";
    }
  } catch (error) {
    console.error("Unable to load the saved color theme.", error);
  }

  return document.documentElement.dataset.theme === "dark";
};

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2m0 15v2M4.6 4.6l1.4 1.4m12 12 1.4 1.4M2.5 12h2m15 0h2M4.6 19.4 6 18m12-12 1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
  </svg>
);

const Switch = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const nextIsDark = event.currentTarget.checked;
    const nextTheme = nextIsDark ? "dark" : "light";

    try {
      window.localStorage.setItem("color-theme", nextTheme);
    } catch (error) {
      console.error("Unable to save the selected color theme.", error);
    }

    const updateTheme = () => {
      setIsDark(nextIsDark);
      document.documentElement.dataset.theme = nextTheme;
    };

    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      typeof document.startViewTransition === "function"
    ) {
      document.startViewTransition(() => flushSync(updateTheme));
    } else {
      flushSync(updateTheme);
    }
  };

  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input
            type="checkbox"
            role="switch"
            className="checkbox"
            checked={isDark}
            onChange={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          />

          {/* Faint hints on the track showing what the switch will turn on */}
          <span className="hint hint-sun" aria-hidden="true">
            <SunIcon />
          </span>
          <span className="hint hint-moon" aria-hidden="true">
            <MoonIcon />
          </span>

          {/* The knob carries both icons and cross-fades between them */}
          <span className="knob" aria-hidden="true">
            <span className="knob-icon knob-sun">
              <SunIcon />
            </span>
            <span className="knob-icon knob-moon">
              <MoonIcon />
            </span>
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Colours come from the theme: --color-brand is blue in light mode and yellow in dark
     mode, so the switch always matches the rest of the page. */
  .toggle-switch {
    position: relative;
    width: 64px;
    height: 32px;
  }

  .switch-label {
    position: absolute;
    inset: 0;
    display: block;
    cursor: pointer;
    border-radius: 9999px;
    border: 1px solid color-mix(in srgb, var(--color-brand) 35%, transparent);
    background: color-mix(in srgb, var(--color-brand) 12%, var(--surface));
    box-shadow: inset 0 1px 3px color-mix(in srgb, var(--color-brand) 20%, transparent);
    transition:
      background-color 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  .switch-label:hover {
    border-color: color-mix(in srgb, var(--color-brand) 70%, transparent);
  }

  :root[data-theme="dark"] & .switch-label {
    box-shadow:
      inset 0 1px 3px rgb(0 0 0 / 0.5),
      0 0 14px color-mix(in srgb, var(--color-brand) 22%, transparent);
  }

  .checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .switch-label:has(.checkbox:focus-visible) {
    outline: 2px solid var(--color-brand);
    outline-offset: 3px;
  }

  /* Faint hint icons on the track */
  .hint {
    position: absolute;
    top: 50%;
    display: grid;
    width: 13px;
    height: 13px;
    place-items: center;
    color: color-mix(in srgb, var(--color-brand) 60%, transparent);
    pointer-events: none;
    transform: translateY(-50%);
    transition: opacity 0.3s ease;
  }

  .hint svg {
    width: 100%;
    height: 100%;
  }

  .hint-sun {
    left: 9px;
    opacity: 0;
  }

  .hint-moon {
    right: 9px;
    opacity: 1;
  }

  .checkbox:checked ~ .hint-sun {
    opacity: 1;
  }

  .checkbox:checked ~ .hint-moon {
    opacity: 0;
  }

  /* The knob: brand colour, with the page background as the icon colour for contrast */
  .knob {
    position: absolute;
    top: 3px;
    left: 3px;
    display: grid;
    width: 24px;
    height: 24px;
    place-items: center;
    border-radius: 9999px;
    background: var(--color-brand);
    color: var(--background);
    box-shadow: 0 2px 8px color-mix(in srgb, var(--color-brand) 50%, transparent);
    pointer-events: none;
    transition:
      transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
      width 0.2s ease,
      background-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  .checkbox:checked ~ .knob {
    transform: translateX(32px);
  }

  /* A little squish while pressed */
  .switch-label:active .knob {
    width: 30px;
  }

  .switch-label:active .checkbox:checked ~ .knob {
    transform: translateX(26px);
  }

  .knob-icon {
    position: absolute;
    display: grid;
    width: 14px;
    height: 14px;
    place-items: center;
    transition:
      opacity 0.3s ease,
      rotate 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
      scale 0.3s ease;
  }

  .knob-icon svg {
    width: 100%;
    height: 100%;
  }

  .knob-sun {
    opacity: 1;
    rotate: 0deg;
    scale: 1;
  }

  .knob-moon {
    opacity: 0;
    rotate: -90deg;
    scale: 0.5;
  }

  .checkbox:checked ~ .knob .knob-sun {
    opacity: 0;
    rotate: 90deg;
    scale: 0.5;
  }

  .checkbox:checked ~ .knob .knob-moon {
    opacity: 1;
    rotate: 0deg;
    scale: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .switch-label,
    .hint,
    .knob,
    .knob-icon {
      transition: none;
    }
  }
`;

export default Switch;