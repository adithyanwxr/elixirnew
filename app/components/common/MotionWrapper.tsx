"use client";

import { ReactNode, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  delay?: number;
}

const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ children, delay = 0, className, ...motionProps }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay, ease: "easeInOut" }}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;
