"use client";

import { useMemo, useState } from "react";
import { PROJECTS, type Filter } from "./content";

/** How many projects the "More projects" column shows per page. */
export const PAGE_SIZE = 3;

/**
 * All the state behind the Work page: which filter is on, which project is
 * featured, which page of the list is showing and which project is open in
 * the details dialog. Everything else is derived, so there are no effects.
 */
export function useWorkBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  const active = filtered.find((p) => p.id === activeId) ?? filtered[0] ?? null;
  const activeIndex = active ? filtered.indexOf(active) : -1;

  const others = filtered.filter((p) => p !== active);
  const pageCount = Math.max(1, Math.ceil(others.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount - 1);
  const visible = others.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  const openProject = PROJECTS.find((p) => p.id === openId) ?? null;

  /** Id of the project `delta` steps away from `id`, wrapping around the filtered list. */
  const neighbour = (id: string | null, delta: number) => {
    if (filtered.length === 0) return null;
    const from = filtered.findIndex((p) => p.id === id);
    return filtered[(from + delta + filtered.length) % filtered.length].id;
  };

  return {
    filter,
    filtered,
    active,
    activeIndex,
    visible,
    currentPage,
    pageCount,
    openProject,

    changeFilter: (next: Filter) => {
      setFilter(next);
      setActiveId(null);
      setPage(0);
    },
    select: (id: string) => setActiveId(id),
    stepActive: (delta: 1 | -1) => {
      const id = neighbour(active?.id ?? null, delta);
      if (id) setActiveId(id);
    },
    changePage: (delta: 1 | -1) =>
      setPage(Math.min(Math.max(currentPage + delta, 0), pageCount - 1)),

    open: (id: string) => setOpenId(id),
    close: () => setOpenId(null),
    stepOpen: (delta: 1 | -1) => setOpenId(neighbour(openId, delta)),
  };
}