import Image from "next/image";
import type { ImageFrame, ProjectImage } from "./content";

type ScreenshotFrameProps = {
  image: ProjectImage;
  /** Tells the browser how wide the picture will be, so it downloads the right size. */
  sizes: string;
  /** Preload the picture. Use it only for the one visible when the page opens. */
  priority?: boolean;
  /** "wide" for the big covers, "thumb" for small thumbnails (smaller frame, no floating). */
  size: "wide" | "thumb";
};

const BROWSER_DOTS = ["#ff5f57", "#febc2e", "#28c840"];

/** Picks a frame from the shape of the picture unless the project says which one to use. */
function frameFor({ src, frame }: ProjectImage): ImageFrame {
  if (frame) return frame;
  const ratio = src.width / src.height;
  if (ratio >= 1) return "browser";
  return ratio < 0.6 ? "phone" : "photo";
}

/**
 * A screenshot inside a browser window, a phone or a photo print. It floats gently on
 * the big covers. Place it inside a positioned parent that has a definite height.
 */
export default function ScreenshotFrame({ image, sizes, priority = false, size }: ScreenshotFrameProps) {
  const { src, alt, position = "center top" } = image;
  const frame = frameFor(image);
  const wide = size === "wide";
  const float = wide ? "animate-float motion-reduce:animate-none" : "";
  const shadow = "bg-white shadow-2xl shadow-black/30";

  if (frame === "browser") {
    return (
      <div
        className={`${wide ? "w-[62%] rounded-xl" : "w-[74%] rounded-md"} overflow-hidden ring-1 ring-white/70 ${shadow} ${float}`}
      >
        <div
          aria-hidden="true"
          className={`flex items-center bg-[#eef0f3] ${wide ? "gap-1.5 px-3 py-2" : "gap-0.5 px-1.5 py-1"}`}
        >
          {BROWSER_DOTS.map((color) => (
            <span
              key={color}
              style={{ backgroundColor: color }}
              className={`rounded-full ${wide ? "size-2" : "size-1"}`}
            />
          ))}
        </div>
        <Image
          src={src}
          alt={alt}
          priority={priority}
          placeholder="blur"
          sizes={sizes}
          className="block h-auto w-full"
        />
      </div>
    );
  }

  const shape =
    frame === "phone"
      ? wide
        ? "rounded-[1.75rem] border-[5px]"
        : "rounded-lg border-2"
      : wide
        ? "-rotate-2 rounded-2xl border-[6px]"
        : "-rotate-2 rounded-md border-2";

  return (
    <div
      style={{ aspectRatio: `${src.width} / ${src.height}` }}
      className={`relative ${wide ? "h-[86%]" : "h-[82%]"} shrink-0 overflow-hidden border-white ${shape} ${shadow} ${float}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}