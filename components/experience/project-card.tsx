import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative h-full max-w-sm p-6 border rounded-lg bg-background border-border">
      <div className="relative w-full h-[200px]">
        <Image
          className="object-cover border rounded-lg border-border"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="font-normal line-clamp-3 text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/experience/${project.id}`}>
          <Button variant={"default"} className="mt-2">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute p-3 border rounded-full bottom-4 right-4 bg-background border-border">
        {project.type === "Personal Project" ? (
          <Icons.userFill className="w-4 h-4" />
        ) : (
          <Icons.work className="w-4 h-4" />
        )}
      </div>
    </div>
  );
}
