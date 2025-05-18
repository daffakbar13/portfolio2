"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { careerExperiences } from "@/config/career";
import { cn } from "@/lib/utils";

interface CareerDetailPageProps {
  params: {
    careerId: string;
  };
}

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const career = careerExperiences.find((c) => c.id === params.careerId);
  const [activeTab, setActiveTab] = useState<"summary" | "skills">("summary");

  if (!career) {
    redirect("/career");
  }

  return (
    <article className="container relative max-w-3xl px-3 py-4 sm:py-6 lg:py-10 sm:px-4 md:px-6">
      {/* Desktop back link (hidden on mobile/smaller screens) */}
      <Link
        href="/career"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="w-4 h-4 mr-2" />
        All Career Experience
      </Link>

      {/* Mobile back link (shown only on mobile/smaller screens) */}
      <Link
        href="/career"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mb-3 sm:mb-4 inline-flex xl:hidden"
        )}
      >
        <Icons.chevronLeft className="w-3 h-3 mr-1 sm:mr-2 sm:h-4 sm:w-4" />
        Back
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 border rounded-lg bg-card border-border sm:p-6 md:p-8"
      >
        {/* Date badge at the top of the card */}
        <div className="flex justify-center mb-4 sm:justify-start">
          <div className="inline-flex items-center bg-background border border-primary px-2 py-0.5 rounded-full text-xs font-medium text-primary shadow-sm">
            {typeof career.endDate === "string"
              ? getYearFromDate(career.startDate) + " - Present"
              : getYearFromDate(career.startDate) +
                " - " +
                getYearFromDate(career.endDate)}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-3 mb-4 sm:flex-row sm:items-start sm:gap-4 md:mb-0">
            {career.logo ? (
              <div className="relative w-16 h-16 overflow-hidden bg-white border-2 rounded-full sm:w-20 sm:h-20 border-primary">
                <Image
                  src={career.logo}
                  alt={career.company}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-16 h-16 rounded-full sm:w-20 sm:h-20 bg-primary">
                <Icons.work className="w-6 h-6 text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
            )}
            <div className="text-center sm:text-left">
              <div className="flex flex-col gap-1 mb-1 sm:flex-row sm:items-center sm:gap-3">
                <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
                  {career.position}
                </h1>
              </div>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <h2 className="text-base sm:text-lg md:text-xl">
                  {career.company}
                </h2>
                {career.companyUrl && (
                  <Link
                    href={career.companyUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Icons.externalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{career.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <div className="flex mb-4 overflow-x-auto border-b border-border sm:mb-6">
            <button
              className={`py-1 sm:py-2 px-2 sm:px-4 font-medium text-xs sm:text-sm relative whitespace-nowrap ${activeTab === "summary" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("summary")}
            >
              Summary
              {activeTab === "summary" && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTabIndicator"
                />
              )}
            </button>
            <button
              className={`py-1 sm:py-2 px-2 sm:px-4 font-medium text-xs sm:text-sm relative whitespace-nowrap ${activeTab === "skills" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
              {activeTab === "skills" && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTabIndicator"
                />
              )}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={activeTab}
            className="min-h-[200px] sm:min-h-[300px]"
          >
            {activeTab === "summary" && (
              <div>
                <ul className="pl-4 space-y-1 list-disc sm:pl-5 md:pl-6 sm:space-y-2 md:space-y-3">
                  {career.description.map((desc, idx) => (
                    <motion.li
                      key={idx}
                      className="text-xs sm:text-sm md:text-base"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="pt-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ChipContainer textArr={career.skills} />
                </motion.div>
                <p className="mt-4 text-xs sm:mt-6 sm:text-sm text-muted-foreground">
                  These are the primary technologies and skills utilized during
                  my time at {career.company}.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center py-3 sm:py-4 md:py-6 lg:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/career"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "sm",
            }),
            "sm:text-sm"
          )}
        >
          <Icons.chevronLeft className="w-3 h-3 mr-1 sm:mr-2 sm:h-4 sm:w-4" />
          All Career Experience
        </Link>
      </motion.div>
    </article>
  );
}
