import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-brand-danger/30 bg-brand-danger-light text-brand-danger-dark dark:bg-brand-danger/20 dark:text-brand-danger",
        outline: "text-foreground border-border",
        success:
          "border-brand-success/30 bg-brand-success-light text-brand-success-dark dark:bg-brand-success/20 dark:text-brand-success",
        warning:
          "border-brand-warning/30 bg-brand-warning-light text-brand-warning-dark dark:bg-brand-warning/20 dark:text-brand-warning",
        info:
          "border-brand-meteorite/30 bg-brand-info-light text-brand-primary-dark dark:bg-brand-primary/20 dark:text-brand-meteorite-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
