"use client";

import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Switch = () => {
  const [isDark, setIsDark] = useState(false);
  const [pixels, setPixels] = useState<{
    color: string;
    count: number;
    columns: number;
  } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    const outgoingColor = isDark ? "#0a0a0a" : "#ffffff";
    const columns = Math.ceil(window.innerWidth / 64);
    const rows = Math.ceil(window.innerHeight / 64);

    if (timer.current) clearTimeout(timer.current);
    setPixels({ color: outgoingColor, count: columns * rows, columns });
    setIsDark(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";

    timer.current = setTimeout(() => setPixels(null), 1400);
  };

  const pixelOrder = pixels
    ? Array.from({ length: pixels.count }, (_, index) => index).sort(
        (first, second) =>
          ((first * 2654435761) >>> 0) - ((second * 2654435761) >>> 0),
      )
    : [];

  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label" aria-label="Toggle dark mode">
          <input
            type="checkbox"
            className="checkbox"
            checked={isDark}
            onChange={toggleTheme}
          />
          <span className="slider" />
        </label>
      </div>
      {pixels && (
        <div
          aria-hidden="true"
          className="pixel-transition"
          style={{
            backgroundColor: pixels.color,
            gridTemplateColumns: `repeat(${pixels.columns}, 64px)`,
          }}
        >
          {pixelOrder.map((index, order) => (
            <span
              className="pixel-transition__cell"
              key={index}
              style={{
                animationDelay: `${(order / Math.max(pixelOrder.length - 1, 1)) * 950}ms`,
                backgroundColor: pixels.color,
              }}
            />
          ))}
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 64px;
    height: 32px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 32px;
    background-color: var(--dark);
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
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    -webkit-box-shadow: inset 8px -3px 0px 0px var(--light);
    box-shadow: inset 8px -3px 0px 0px var(--light);
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .switch-label:has(.checkbox:focus-visible) {
    outline: 2px solid #2563eb;
    outline-offset: 3px;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export default Switch;
