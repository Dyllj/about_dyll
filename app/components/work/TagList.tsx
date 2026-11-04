type TagListProps = {
  tags: string[];
  /** Read by screen readers, e.g. "Project tags". */
  label: string;
  className?: string;
};

/** Row of small white pills. */
export default function TagList({ tags, label, className = "" }: TagListProps) {
  return (
    <ul aria-label={label} className={`flex list-none flex-wrap gap-2 p-0 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-zinc-200/80 bg-white px-3.5 py-1 text-[13px] font-medium text-zinc-700"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}