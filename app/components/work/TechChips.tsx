import { TECH_META } from "../about/TechMeta";

type TechChipsProps = {
  items: string[];
  /** Read by screen readers, e.g. "Tech stack". */
  label: string;
  /**
   * Total number of technologies when `items` is only a sample of them. The difference is
   * shown as "+N more".
   */
  total?: number;
  className?: string;
};

/** Row of technology pills. Known technologies get their logo in the brand colour. */
export default function TechChips({ items, label, total, className = "" }: TechChipsProps) {
  const shown = items;
  const hidden = total ? total - items.length : 0;

  return (
    <ul aria-label={label} className={`flex list-none flex-wrap gap-2 p-0 ${className}`}>
      {shown.map((name) => {
        const meta = TECH_META[name];
        const Icon = meta?.Icon;

        return (
          <li
            key={name}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white px-3 py-1 text-[13px] font-medium text-zinc-700 transition-colors duration-200 hover:border-brand/40"
          >
            {Icon ? (
              <Icon aria-hidden="true" className="size-3.5 shrink-0" style={{ color: meta.color }} />
            ) : (
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-brand" />
            )}
            {name}
          </li>
        );
      })}

      {hidden > 0 && (
        <li className="inline-flex items-center px-1.5 py-1 text-[13px] font-medium text-zinc-500">
          +{hidden} more
        </li>
      )}
    </ul>
  );
}