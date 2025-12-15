import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({ onNavigate }) {
  const projects = [
    {
      title: "Kenya Pro-Aging Organization",
      description: "A developing initiative reimagining aging and elder care in Kenya — connecting caregivers, volunteers, and older adults through coordinated support, digital tracking, and human connection.",
      image: "https://images.unsplash.com/photo-1761666519794-ad6fbcef058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjI0MzI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Kibra Daycare Center",
      description: "A community-based childcare model that blends early childhood care with digital systems for parent updates, caregiver accountability, and local employment.",
      image: "https://images.unsplash.com/photo-1680762662839-46b6d050b2c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZGNhcmUlMjBjaGlsZHJlbiUyMHBsYXlpbmd8ZW58MXx8fHwxNzYyNDMyNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    // Add remaining projects...
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Gradient Accent */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Projects in Progress
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Each project is an experiment in building a kinder, smarter ecosystem — rooted in community, powered by technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transition-transform duration-500 hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                status={project.status}
                onClick={() => onNavigate("Projects")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
