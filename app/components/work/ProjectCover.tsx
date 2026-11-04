import Image from "next/image";
import CoverArt from "./CoverArt";
import type { Project } from "./content";

type ProjectCoverProps = {
  project: Project;
  /** Tells the browser how wide the image will be, so it downloads the right size. */
  sizes: string;
};

/** Real screenshot when the project has one, animated artwork otherwise. Fills its parent. */
export default function ProjectCover({ project, sizes }: ProjectCoverProps) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        placeholder="blur"
        sizes={sizes}
        className="object-cover"
      />
    );
  }

  return <CoverArt category={project.categories[0]} />;
}