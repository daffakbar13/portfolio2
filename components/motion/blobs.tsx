import { cn } from "@/lib/utils";

type Layer = "a" | "b" | "c";

export interface BlobSpec {
  layer: Layer;
  className: string;
  color: "lime" | "violet" | "cyan";
  opacity: number;
  delay?: number;
}

const colorClass = { lime: "bg-lime", violet: "bg-violet", cyan: "bg-cyan" };

/** Blurred colour blobs that drift and follow the pointer (`--px/--py`). */
export function Blobs({ items }: { items: BlobSpec[] }) {
  return (
    <>
      {items.map((b, i) => (
        <div key={i} aria-hidden="true" className={cn("par", `par-${b.layer}`)}>
          <div
            className={cn("blob", colorClass[b.color], b.className)}
            style={{ opacity: b.opacity, animationDelay: b.delay ? `${b.delay}s` : undefined }}
          />
        </div>
      ))}
    </>
  );
}
