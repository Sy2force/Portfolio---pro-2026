
import { forwardRef, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  gradient?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, gradient = false, children, ...props }, ref) => {
    const baseClassName = cn(
      "rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden",
      gradient &&
        "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
      hover && "cursor-pointer",
      className
    );

    if (hover) {
      return (
        <motion.div
          ref={ref}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className={baseClassName}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={baseClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
));

CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 flex items-center gap-4", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";
