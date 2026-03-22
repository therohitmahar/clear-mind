import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
          {
            "bg-primary hover:bg-primary-dark text-white shadow-sm":
              variant === "primary",
            "bg-white text-primary hover:bg-gray-100 shadow-lg":
              variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-white":
              variant === "outline",
            "bg-white/10 backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-primary-dark text-white shadow-md":
              variant === "ghost",
          },
          {
            "min-h-10 px-4 py-2 text-sm": size === "sm",
            "min-h-11 px-5 py-2.5 text-sm sm:px-6": size === "md",
            "min-h-12 px-6 py-3 text-base sm:min-h-14 sm:px-10 sm:text-lg":
              size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
