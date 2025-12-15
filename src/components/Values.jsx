import React from "react";
import { Sparkles, Shield, Eye, Globe } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Ethical design & inclusive technology",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Healing, accountability, and interdependence",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Eye,
    title: "Building systems that see people",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Open-source thinking for community empowerment",
    gradient: "from-rose-500 to-rose-600",
  },
];

export default function Values() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 font-bold">What I Care About</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Core values that guide every project, decision, and line of code.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            // Tailwind-safe class mapping for dynamic gradient
            const gradientClass = {
              "from-blue-500 to-blue-600": "bg-gradient-to-br from-blue-500 to-blue-600",
              "from-emerald-500 to-emerald-600": "bg-gradient-to-br from-emerald-500 to-emerald-600",
              "from-purple-500 to-purple-600": "bg-gradient-to-br from-purple-500 to-purple-600",
              "from-rose-500 to-rose-600": "bg-gradient-to-br from-rose-500 to-rose-600",
            }[value.gradient];

            return (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${gradientClass} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-white/90">{value.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
