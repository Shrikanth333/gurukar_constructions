"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "ghost"
  | "outline"
  | "destructive";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

const variantToClasses: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  ghost:
    "bg-transparent hover:bg-muted/60 text-foreground",
  outline:
    "border border-border bg-background hover:bg-muted/60",
  destructive:
    "bg-destructive text-white hover:bg-destructive/90",
};

const sizeToClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", isLoading = false, disabled, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:opacity-60 disabled:pointer-events-none",
          variantToClasses[variant],
          sizeToClasses[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="i-svg-spinners-3-dots-scale text-current" aria-hidden />
        ) : null}
        <span className={cn(isLoading && "opacity-0")}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;


