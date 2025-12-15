import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Writing", path: "/writing" },
    { name: "Contact", path: "/contact" },
    { name: "About Me", path: "/about me"},
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <NavLink
          to="/"
          className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
        >
          Catherine Otieno
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
