"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ 
        opacity: 0,
        scale: 0.95,
        y: 20
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        y: 0
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
        type: "tween"
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}