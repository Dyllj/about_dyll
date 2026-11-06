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
            className="checkbox"
            checked={isDark}
            onChange={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          />
          <span className="slider" />
          <span className="theme-icon" aria-hidden="true">
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            )}
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 64px;
    height: 32px;
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 32px;
    background-color: var(--foreground);
    border-radius: 16px;
    cursor: pointer;
    border: none;
  }

  .checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: var(--foreground);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--color-brand);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--background);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .theme-icon {
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 1;
    display: grid;
    width: 18px;
    height: 18px;
    place-items: center;
    color: var(--foreground);
    pointer-events: none;
    transition: transform 0.3s ease, rotate 0.3s ease;
  }

  .theme-icon svg {
    width: 16px;
    height: 16px;
  }

  .checkbox:checked ~ .theme-icon {
    transform: translateX(32px);
  }

  .checkbox:checked ~ .theme-icon svg {
    animation: icon-appear 0.3s ease both;
  }

  .checkbox:not(:checked) ~ .theme-icon svg {
    animation: icon-appear 0.3s ease both;
  }

  @keyframes icon-appear {
    from {
      opacity: 0;
      rotate: -35deg;
      scale: 0.7;
    }
    to {
      opacity: 1;
      rotate: 0deg;
      scale: 1;
    }
  }

  .switch-label:has(.checkbox:focus-visible) {
    outline: 2px solid var(--color-brand);
    outline-offset: 3px;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
    background-color: var(--background);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export default Switch;
