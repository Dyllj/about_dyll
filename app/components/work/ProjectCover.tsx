import CoverArt from "./CoverArt";
import ScreenshotFrame from "./ScreenshotFrame";
import type { Project } from "./content";

type ProjectCoverProps = {
  project: Project;
  /** Tells the browser how wide the screenshot will be, so it downloads the right size. */
  sizes: string;
  /** Which of the project's images to show. The first one by default. */
  imageIndex?: number;
  /** Preload the screenshot. Use it only for the picture visible when the page opens. */
  priority?: boolean;
  /** "thumb" for small thumbnails. */
  size?: "wide" | "thumb";
};

/**
 * The animated cover artwork, with the project's screenshot in a device frame on top
 * (when it has one). Fills its (relatively positioned) parent.
 */
export default function ProjectCover({
  project,
  sizes,
  imageIndex = 0,
  priority = false,
  size = "wide",
}: ProjectCoverProps) {
  const image = project.images?.[imageIndex];
  const category = project.categories[0];

  if (!image) return <CoverArt category={category} />;

  return (
    <>
      <CoverArt category={category} shifted />
      <div
        className={`absolute inset-0 flex items-center justify-end ${size === "wide" ? "pr-[5%]" : "pr-[8%]"}`}
      >
        <ScreenshotFrame image={image} sizes={sizes} priority={priority} size={size} />
      </div>
    </>
  );
}