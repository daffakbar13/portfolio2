export function Marquee({ items }: { items: string[] }) {
  const loop = items.concat(items);
  return (
    <div className="overflow-hidden border-y border-line/[.08] py-[26px]">
      <div className="marquee flex w-max gap-14" aria-hidden="true">
        {loop.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-14 whitespace-nowrap font-display text-2xl font-semibold tracking-[-0.02em] md:text-[32px]"
          >
            {t}
            <span className="text-[22px] text-lime-ink">✦</span>
          </span>
        ))}
      </div>
      <p className="sr-only">{items.join(", ")}</p>
    </div>
  );
}
