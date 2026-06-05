import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  helper?: string;
  children: ReactNode;
  className?: string;
}

/** Accessible form field wrapper with label, helper, and error association */
export function FormField({
  id,
  label,
  required,
  error,
  helper,
  children,
  className,
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const helperId = helper ? `${id}-helper` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("form-group", className)}>
      <label
        htmlFor={id}
        className={cn("form-label", required && "form-label-required")}
      >
        {label}
      </label>
      {/* Clone aria-describedby onto child via wrapper context — consumer passes props */}
      <div data-describedby={describedBy}>{children}</div>
      {helper && (
        <p id={helperId} className="form-helper">
          {helper}
        </p>
      )}
      {error && (
        <p id={errorId} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function fieldAriaProps(
  id: string,
  error?: string,
  helper?: string
): { "aria-invalid"?: boolean; "aria-describedby"?: string } {
  const ids = [
    helper ? `${id}-helper` : null,
    error ? `${id}-error` : null,
  ].filter(Boolean);

  return {
    ...(error ? { "aria-invalid": true as const } : {}),
    ...(ids.length > 0 ? { "aria-describedby": ids.join(" ") } : {}),
  };
}
