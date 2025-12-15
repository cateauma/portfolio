import React from "react";

export default function Button({ children, text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 ${className}`}
    >
      {children || text}
    </button>
  );
}
