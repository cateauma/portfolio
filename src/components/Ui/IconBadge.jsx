import React from "react";

export default function IconBadge({ icon: Icon, text, color = "text-slate-700", className = "" }) {
  return (
    <div
      className={`flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm animate-fadeIn ${className}`}
    >
      {Icon && <Icon className={`w-4 h-4 ${color}`} />}
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}
