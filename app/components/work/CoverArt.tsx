import type { Category } from "./content";

const BRAND = "#0047ff";

const palettes: Record<Category, string> = {
  IoT: "from-brand via-blue-500 to-cyan-400",
  Web: "from-indigo-600 via-brand to-sky-400",
  Mobile: "from-violet-600 via-brand to-sky-400",
};

// Waves are drawn twice as wide as the picture and slide by exactly one wavelength
// (-50% of the 640 wide viewBox = 320 = one period), so the loop never jumps.
const WAVE = (y: number) =>
  `M0 ${y} Q80 ${y - 24} 160 ${y} T320 ${y} T480 ${y} T640 ${y} T800 ${y} T960 ${y} T1120 ${y} T1280 ${y} V360 H0 Z`;

const still = "motion-reduce:animate-none";

// When a screenshot is shown on top, the artwork's main objects move to the left and
// shrink a little, so they stay visible next to (and partly behind) the screenshot.
const SHIFT = "translate(-92 22) scale(0.88)";

function IoTArt({ transform }: { transform?: string }) {
  const nodes = [
    [150, 100],
    [500, 95],
    [470, 215],
    [170, 205],
  ];

  return (
    <>
      <g transform={transform}>
        <g stroke="white" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 8" fill="none">
          {nodes.map(([x, y]) => (
            <path key={`${x}-${y}`} d={`M320 150 L${x} ${y}`} />
          ))}
        </g>
        <g fill="white" fillOpacity="0.9">
          {nodes.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="8" />
          ))}
        </g>

        {[0, 0.9, 1.8].map((delay) => (
          <circle
            key={delay}
            cx="320"
            cy="150"
            r="44"
            fill="none"
            stroke="white"
            strokeWidth="2"
            style={{ animationDelay: `${delay}s` }}
            className={`animate-pulse-ring origin-center transform-fill ${still}`}
          />
        ))}
        <rect x="288" y="118" width="64" height="64" rx="18" fill="white" />
        <circle cx="320" cy="150" r="15" fill={BRAND} />
        <circle cx="320" cy="150" r="5" fill="white" />
      </g>

      <g className={`animate-wave-slow ${still}`}>
        <path d={WAVE(262)} fill="white" fillOpacity="0.18" />
      </g>
      <g className={`animate-wave ${still}`}>
        <path d={WAVE(292)} fill="white" fillOpacity="0.28" />
      </g>
    </>
  );
}

function WebArt({ transform }: { transform?: string }) {
  return (
    <g transform={transform}>
      <g className={`animate-float ${still}`}>
        <rect x="150" y="56" width="340" height="226" rx="20" fill="white" fillOpacity="0.96" />
        <rect x="150" y="56" width="340" height="38" rx="20" fill="#eef0f3" />
        <rect x="150" y="76" width="340" height="18" fill="#eef0f3" />
        <circle cx="174" cy="75" r="5" fill="#ff5f57" />
        <circle cx="192" cy="75" r="5" fill="#febc2e" />
        <circle cx="210" cy="75" r="5" fill="#28c840" />
        <rect x="236" y="66" width="190" height="18" rx="9" fill="white" />

        <rect x="174" y="112" width="180" height="100" rx="14" fill={BRAND} fillOpacity="0.12" />
        <rect x="192" y="130" width="112" height="12" rx="6" fill={BRAND} />
        <rect x="192" y="154" width="140" height="8" rx="4" fill={BRAND} fillOpacity="0.35" />
        <rect x="192" y="170" width="96" height="8" rx="4" fill={BRAND} fillOpacity="0.35" />
        <rect x="192" y="188" width="64" height="16" rx="8" fill={BRAND} />

        <rect x="368" y="112" width="98" height="100" rx="14" fill="#eef0f3" />
        <rect x="384" y="168" width="14" height="30" rx="4" fill={BRAND} fillOpacity="0.45" />
        <rect x="406" y="146" width="14" height="52" rx="4" fill={BRAND} fillOpacity="0.7" />
        <rect x="428" y="126" width="14" height="72" rx="4" fill={BRAND} />

        <rect x="174" y="232" width="292" height="10" rx="5" fill="#e1e4ea" />
        <rect x="174" y="252" width="210" height="10" rx="5" fill="#e1e4ea" />
      </g>

      <g className={`animate-float [animation-delay:-3s] ${still}`}>
        <rect x="428" y="238" width="118" height="46" rx="14" fill="white" />
        <circle cx="452" cy="261" r="9" fill="#28c840" />
        <rect x="470" y="252" width="56" height="8" rx="4" fill={BRAND} />
        <rect x="470" y="266" width="38" height="6" rx="3" fill="#cbd2dc" />
      </g>
    </g>
  );
}

function MobileArt({ transform }: { transform?: string }) {
  return (
    <g transform={transform}>
      <g className={`animate-float ${still}`}>
        <rect x="250" y="34" width="140" height="292" rx="30" fill="white" />
        <rect x="258" y="42" width="124" height="276" rx="24" fill="#eef0f3" />

        {/* The nested <svg> clips the scrolling list to the phone screen */}
        <svg x="258" y="42" width="124" height="276" overflow="hidden">
          <g className={`animate-scroll-up ${still}`}>
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i} transform={`translate(10 ${52 + i * 62})`}>
                <rect width="104" height="52" rx="12" fill="white" />
                <rect x="10" y="12" width="28" height="28" rx="8" fill={BRAND} fillOpacity="0.85" />
                <rect x="46" y="14" width="48" height="8" rx="4" fill={BRAND} />
                <rect x="46" y="30" width="34" height="6" rx="3" fill="#cbd2dc" />
              </g>
            ))}
          </g>
          <rect width="124" height="40" fill={BRAND} />
          <rect x="12" y="20" width="52" height="8" rx="4" fill="white" />
        </svg>

        <rect x="292" y="46" width="56" height="14" rx="7" fill="#0b1b3a" />
      </g>

      <g className={`animate-float [animation-delay:-2s] ${still}`}>
        <rect x="376" y="96" width="124" height="46" rx="14" fill="white" />
        <circle cx="400" cy="119" r="9" fill="#28c840" />
        <rect x="418" y="110" width="62" height="8" rx="4" fill={BRAND} />
        <rect x="418" y="124" width="42" height="6" rx="3" fill="#cbd2dc" />
      </g>
    </g>
  );
}

/**
 * The animated cover artwork. It fills its (relatively positioned) parent.
 * `shifted` slides the main objects aside to make room for a screenshot.
 */
export default function CoverArt({
  category,
  shifted = false,
}: {
  category: Category;
  shifted?: boolean;
}) {
  const transform = shifted ? SHIFT : undefined;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden bg-linear-to-br ${palettes[category]}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(255_255_255/0.35),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.18)_1px,transparent_1px)] bg-size-[22px_22px] mask-[linear-gradient(to_bottom,black,transparent)]" />

      <svg
        viewBox="0 0 640 360"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        {category === "IoT" && <IoTArt transform={transform} />}
        {category === "Web" && <WebArt transform={transform} />}
        {category === "Mobile" && <MobileArt transform={transform} />}
      </svg>
    </div>
  );
}