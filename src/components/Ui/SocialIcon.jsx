import React from "react";

export default function SocialIcon({ icon, href = "#", label = "Social link", className = "" }) {
  
  const IconComponent = icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors shadow-sm animate-fadeIn ${className}`}
    >
      {IconComponent && <IconComponent className="w-5 h-5 text-slate-600" />}
    </a>
  );
}
