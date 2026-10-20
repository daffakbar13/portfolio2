"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
