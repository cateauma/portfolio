import Card from "../components/Ui/Card";        // default export
import Badge from "../components/Ui/Badge";      // default export
import Button from "../components/Ui/Button";    // default export
import { ExternalLink, FileText } from "lucide-react";
import ImageWithFallback from "../components/Ui/ImageWithFallback"; // default export
import ProjectCard from "../components/Projects/ProjectCard";
const projects = [

    {
    title: "Kenya Pro-Aging Project",
    status: "In Development",
    description: "Role-based web app to connect older adults with care services and donors. Focus: accessibility, simple UX, and community-first features.",
    tech: "React, Express, javaScript, MySQL",
    slug: "kenya-pro-aging-project",
    image: "https://images.unsplash.com/photo-1761666519794-ad6fbcef058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjI0MzI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mockupUrl: "https://www.figma.com/make/MZHiNycMfJFlayOVKU4eG9/Elderly-Care-Center-Landing-Page?t=F2SUmbuLQIW4ug0P-6",
    notesUrl: "/notes/KenyaProAgingProject"
  },
  


  {
    title: "Blog App (Home for Essays)",
    status: "Prototype",
    description: "A calm, reflective platform for longform writing about tech ethics, emotional intelligence, and cultural critique.",
    tech: "react.js, Express, MongoDB, Node.js",
    image: "https://images.unsplash.com/photo-1571916234808-adf437ac1644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwam91cm5hbCUyMGJsb2d8ZW58MXx8fHwxNzYyNDMyNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "kibera-daycare-center-elderly",
    mockupUrl: "https://www.figma.com/make/Tx7WezCJoPOOd5U0xijOhY/Personal-Blog-App-UI-Markup?t=F2SUmbuLQIW4ug0P-6",
    notesUrl: "/notes/BlogApp",
  
 
 
  },
  {
    title: "Kibera Ni Kwetu App",
    status: "In Development",
    description: "An upcoming mobile app for community safety, transparency, recognition, and accountability. Designed to help residents report, document, and celebrate what's happening in Kibera.",
    tech: "React.js, Express, MongoDB, Node.js",
    image: "https://images.unsplash.com/photo-1694184876414-3b2293b2c0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWJlcmElMjBjb21tdW5pdHklMjBLZW55YXxlbnwxfHx8fDE3NjI0MzI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "kibera yetu",
    mockupUrl: "https://www.figma.com/make/GZNO6iSIK1ZmcOAxHuSsc2/Kibera-Yetu-App-Design?t=Qt086tXCyaKc7Xka-6",
    notesUrl: "/notes/KiberaNiKweTu",
  
  
  
  },
  {
    title: "Mjengo Skills Certifier",
    status: "Concept",
    description: "A local-skills verification and short-course platform for construction workers — practical, short, and certified by community partners.",
    tech: "React.js, Express, MongoDB, Node.js",
    image: "https://images.unsplash.com/photo-1672072830247-85ac23671e96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "kazi salama",
    mockupUrl: "https://www.figma.com/make/OHmzNSpSKheDTfLpBUw5xg/Kazi-Salama-App-Mockup?t=Qt086tXCyaKc7Xka-6",
    notesUrl: "/notes/MjengoSkillsCertifier",
  
  
  },
  {
    title: "Kibera Lights",
    status: "In Development",
    description: "A youth empowerment program where young people come together to support each other, build community, and create pathways for growth and opportunity in Kibera.",
    tech: "React.js, Express, MongoDB, Node.js",
    image: "https://images.unsplash.com/photo-1761661769531-6dfd1dea2b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGVtcG93ZXJtZW50JTIwS2VueWF8ZW58MXx8fHwxNzYyNDMzMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "kibera-lights",
    mockupUrl: "https://www.figma.com/make/WUClKLhbZupUsNm31k8FTO/KiberaLights-App-Design?t=zpod7io2q6Olsbxt-6",
    notesUrl: "/notes/KiberaLights"
  
 
  },
  {
    title: "Cycle Sync App",
    status: "Improvised",
    description: "An ongoing wellness experiment — helping women and menstruating people tune into their hormonal cycles with daily reflections, body awareness prompts, and gentle habit tracking.",
    tech: "React, Express, MongoDB, Node.js",
    image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1lZGl0YXRpb24lMjB3b21hbnxlbnwxfHx8fDE3NjI0MzI3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "kibera-daycare-center-elderly",
    mockupUrl: "https://www.figma.com/make/ZbFVRATpxdXf33J9jePbVb/Mwezi-Planner-App-Design?t=F2SUmbuLQIW4ug0P-6",
    notesUrl: "/notes/CycleSyncApp"
  
 
 
 
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Projects</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto lg:mx-0">
            Each project is an experiment in building systems that see people — rooted in community, powered by technology, guided by care.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-slate-200 hover:border-blue-300 transition-all group shadow-sm hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl text-slate-900">{project.title}</h3>
                  <Badge
                    variant="secondary"
                    className={`shrink-0 ${
                      project.status === "In Development"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : project.status === "Prototype"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-purple-50 text-purple-700 border-purple-200"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-slate-700 leading-relaxed">{project.description}</p>
                <div>
                  <span className="text-sm text-slate-500">Tech: {project.tech}</span>
                </div>
                <div className="flex gap-3 pt-2">
  <a
    href={project.mockupUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="sm" className="text-slate-600">
      <ExternalLink className="w-4 h-4 mr-2" />
      View mockup
    </Button>
  </a>

  <a
    href={project.notesUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="sm" className="text-slate-600">
      <FileText className="w-4 h-4 mr-2" />
      Read notes
    </Button>
  </a>
</div>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
