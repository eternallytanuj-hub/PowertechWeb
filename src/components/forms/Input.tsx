import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, id, required, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="text-foreground block text-sm font-medium">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={inputId}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          className={cn(
            "border-border bg-background text-foreground placeholder:text-muted focus:border-primary focus:ring-primary flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error focus:border-error focus:ring-error",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-error text-xs">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-muted text-xs">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
