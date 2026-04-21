import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textClassName?: string;
  underlineClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.5,
      ...props
    },
    ref
  ) => {
    const pathVariants: Variants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: underlineDuration, ease: "easeInOut" },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center gap-2", props.className)}
      >
        <div className="relative">
          <motion.h1
            className={cn("text-4xl font-bold text-center", textClassName)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {text}
          </motion.h1>
          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 300 20"
            className={cn("absolute -bottom-4 left-0", underlineClassName)}
          >
            <motion.path
              d={underlinePath}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ d: underlineHoverPath, transition: { duration: 0.8 } }}
            />
          </motion.svg>
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

// ── Inline variant: wraps text inside existing h1/h2 headings ──

interface UnderlineSpanProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
}

const UnderlineSpan = ({
  children,
  className,
  color = "#C5A059",
  duration = 1.4,
  delay = 0.7,
}: UnderlineSpanProps) => {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration, ease: "easeInOut", delay },
    },
  };

  return (
    <span className={cn("relative inline-block pb-3", className)}>
      {children}
      <motion.svg
        width="100%"
        height="14"
        viewBox="0 0 300 14"
        className="absolute bottom-0 left-0"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0,7 Q 75,0 150,7 Q 225,14 300,7"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </span>
  );
};

export { AnimatedText, UnderlineSpan };
