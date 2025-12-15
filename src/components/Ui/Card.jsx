import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
