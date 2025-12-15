import React from "react";

export default function Badge({
  children,
  variant = "primary",
  className = "",
}) {
  const baseClasses =
    "px-3 py-1 rounded-full text-sm font-medium shrink-0 inline-flex items-center";

  const variantClasses =
    variant === "primary"
      ? "bg-blue-50 text-blue-700 border border-blue-200"
      : "bg-emerald-50 text-emerald-700 border border-emerald-200";

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
}
