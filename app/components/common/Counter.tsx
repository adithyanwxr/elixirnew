"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface Props {
  end: number;
  duration?: number;
}

const SmoothCounter = ({ end, duration = 2 }: Props) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  // THIS FIXES MOBILE FIRST ITEM ISSUE
  useEffect(() => {
    // wait a tiny moment after hydration → now inView can detect correctly
    const timeout = setTimeout(() => {
      if (isInView) setStart(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [isInView]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (start) {
      const controls = animate(0, end, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [start, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default SmoothCounter;
