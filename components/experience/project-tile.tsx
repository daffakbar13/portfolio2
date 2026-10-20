import { cn } from "@/lib/utils";

interface ProjectTileProps {
  title: string;
  tags?: string[];
  className?: string;
  titleClassName?: string;
}

// Stand-in for a project logo: the project name on the primary colour.
export default function ProjectTile({
  title,
  tags = [],
  className,
  titleClassName,
}: ProjectTileProps) {
  return (
    <div
      role="img"
      aria-label={title}
      className={cn(
        "flex flex-col items-center justify-center gap-3 p-4 text-center bg-primary text-primary-foreground",
        className
      )}
    >
      <span className={cn("text-xl font-heading", titleClassName)}>
        {title}
      </span>
      {!!tags.length && (
        <div className="flex flex-wrap justify-center gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary-foreground/35 px-2 py-0.5 text-[0.7rem] font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
