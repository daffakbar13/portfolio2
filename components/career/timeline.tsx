"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { CareerExperienceInterface } from "@/config/career";

interface TimelineItemProps {
  experience: CareerExperienceInterface;
  isLast: boolean;
  expandedId: string | null;
  toggleExpand: (id: string) => void;
}

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  isLast,
  expandedId,
  toggleExpand,
}) => {
  const isExpanded = expandedId === experience.id;

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 sm:left-8 top-12 w-0.5 bg-border h-full z-0" />
      )}

      {/* Timeline item */}
      <div className="relative flex mb-8">
        {/* Timeline dot and date */}
        <div className="relative">
          <motion.div
            className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full sm:w-16 sm:h-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {experience.logo ? (
              <div className="relative w-8 h-8 overflow-hidden bg-white border-2 rounded-full sm:w-16 sm:h-16 border-primary">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-16 sm:h-16 bg-primary">
                <Icons.work className="w-4 h-4 text-white sm:w-8 sm:h-8" />
              </div>
            )}
          </motion.div>
        </div>

        {/* Content card */}
        <motion.div
          className="flex-1 ml-3 sm:ml-6"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className={`
              p-3 sm:p-5 rounded-lg border border-border bg-card hover:shadow-lg 
              transition-all duration-300 cursor-pointer
              ${isExpanded ? "shadow-md" : ""}
            `}
            onClick={() => toggleExpand(experience.id)}
            whileHover={{ y: -2 }}
            layout
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  {experience.position}
                </h3>
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground sm:text-base">
                    {experience.company}
                  </span>
                  {experience.companyUrl && (
                    <Link
                      href={experience.companyUrl}
                      target="_blank"
                      className="ml-2 text-muted-foreground hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icons.externalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {experience.location}
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-2 sm:flex-col sm:items-end sm:justify-start">
                <div className="inline-flex items-center justify-center bg-background border border-primary px-2 py-0.5 rounded-full text-xs font-medium text-primary shadow-sm">
                  {typeof experience.endDate === "string"
                    ? getYearFromDate(experience.startDate) + " - Now"
                    : getYearFromDate(experience.startDate) +
                      " - " +
                      getYearFromDate(experience.endDate)}
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icons.chevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isExpanded && (
                <div className="pt-3 mt-3 border-t sm:pt-4 sm:mt-4 border-border">
                  <div className="mb-3 sm:mb-4">
                    <h4 className="mb-1 text-xs font-medium sm:mb-2 sm:text-sm">
                      Summary
                    </h4>
                    <ul className="pl-4 space-y-1 list-disc sm:pl-5">
                      {experience.description.map((desc, idx) => (
                        <li key={idx} className="text-xs sm:text-sm">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="mb-1 text-xs font-medium sm:mb-2 sm:text-sm">
                      Skills
                    </h4>
                    <ChipContainer textArr={experience.skills} />
                  </div>

                  <Link
                    href={`/career/${experience.id}`}
                    className="inline-flex items-center mt-1 text-xs font-medium sm:mt-2 sm:text-sm text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                    <Icons.chevronRight className="w-3 h-3 ml-1 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

interface TimelineProps {
  experiences: CareerExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  // Auto-expand the first item on initial load
  useEffect(() => {
    if (sortedExperiences.length > 0 && expandedId === null) {
      setExpandedId(sortedExperiences[0].id);
    }
  }, [sortedExperiences, expandedId]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container max-w-5xl px-2 py-4 mx-auto sm:py-8 sm:px-4">
      {sortedExperiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          experience={experience}
          isLast={index === sortedExperiences.length - 1}
          expandedId={expandedId}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default Timeline;
