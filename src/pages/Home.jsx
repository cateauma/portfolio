import { 
  ArrowRight, BookOpen, Code, Heart, Sparkles, 
  Shield, Eye, Globe 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Ui/Button";
import Card from "../components/Ui/Card";
import ProjectCard from "../components/Projects/ProjectCard";

export default function Home() {
  const navigate = useNavigate();

  const cvLink =
    "https://docs.google.com/document/d/1-SOMG1jsN70LzO2R12R9HaFuQKsnZV7tt4NYM2HFKfA/export?format=pdf";

  const handleDownloadCV = () => {
    window.open(cvLink, "_blank", "noopener,noreferrer");
  };

  const onNavigate = () => navigate("/projects");

  const badges = [
    { icon: Heart, text: "Community Digital Caretaker", color: "text-rose-500" },
    { icon: Code, text: "Developer", color: "text-blue-500" },
    { icon: BookOpen, text: "Writer", color: "text-emerald-500" },
  ];

  const values = [
    { icon: Shield, title: "Ethical design & inclusive technology", color: "from-blue-500 to-blue-600" },
    { icon: Sparkles, title: "Healing, accountability, and interdependence", color: "from-emerald-500 to-emerald-600" },
    { icon: Eye, title: "Building systems that see people", color: "from-purple-500 to-purple-600" },
    { icon: Globe, title: "Open-source thinking for community empowerment", color: "from-rose-500 to-rose-600" },
  ];

  
  const projects = [
    {
      title: "Kenya Pro-Aging Organization",
      description:
        "A developing initiative reimagining aging and elder care in Kenya — connecting caregivers, volunteers, and older adults through coordinated support, digital tracking, and human connection.",
      image:
        "https://images.unsplash.com/photo-1761666519794-ad6fbcef058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjI0MzI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "In Development",
    },
    {
      title: "Kibra Daycare Center",
      description:
        "A community-based childcare model that blends early childhood care with digital systems for parent updates, caregiver accountability, and local employment.",
      image:
        "https://images.unsplash.com/photo-1680762662839-46b6d050b2c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZGNhcmUlMjBjaGlsZHJlbiUyMHBsYXlpbmd8ZW58MXx8fHwxNzYyNDMyNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Community Concept",
    },
  {
    title: "Mjengo Skills Certifier",
    status: "Concept",
    description: "A local-skills verification and short-course platform for construction workers — practical, short, and certified by community partners.",
    tech: "Design, Community Partnerships",
    image: "https://images.unsplash.com/photo-1672072830247-85ac23671e96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  ];

  return (
    <div className="min-h-screen w-full">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-32 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6 items-center justify-center md:justify-start">
            {badges.map((badge) => (
              <div 
                key={badge.text} 
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <badge.icon className={`w-4 h-4 ${badge.color}`} />
                <span className="text-sm text-slate-700">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Name + Heading */}
          <h1 className="text-5xl md:text-7xl mb-6 text-slate-900 font-bold text-center md:text-left">
            Catherine Otieno
          </h1>

          <h2 className="text-3xl md:text-5xl mb-8 text-slate-800 leading-tight text-center md:text-left">
            I build digital spaces that feel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              human
            </span>.
          </h2>

          {/* Intro Text */}
          <div className="prose prose-lg max-w-none text-slate-700 space-y-4 mb-10">
            <p>Tech that heals, connects and empowers. Essays. Prototypes. Concepts driven by care.</p>
            <p>
              My work sits where <strong>technology, compassion, and community</strong> intersect.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              onClick={() => navigate("/projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 flex items-center rounded-lg"
            >
              View projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              onClick={() => navigate("/writing")}
              variant="outline"
              className="border-slate-300 text-slate-700 px-6 py-4 flex items-center rounded-lg"
            >
              Read essays
              <BookOpen className="ml-2 w-4 h-4" />
            </Button>

            <Button
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 flex items-center rounded-lg"
            >
              Download CV (PDF)
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED ESSAY */}
      <section className="py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto">
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Featured Essay</h1>
      <span className="text-sm text-blue-600 uppercase tracking-wider">
        SocialTech for the Better
      </span>
    </div>

    <Card className="p-8 border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        SocialTech for the Better
      </h2>

      <p className="text-gray-700 mb-6">
        A reflective essay exploring how technology can be used to heal community
        gaps, build empathy, and support collective well-being — instead of
        exploiting it. This is part of my ongoing work in community-centered
        digital care.
      </p>

      <Button
        onClick={() => navigate("/writing")}
        variant="link"
        className="text-blue-600 p-0 flex items-center"
      >
        Read full essay
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </Card>
  </div>
</section>


      {/* CURRENT FOCUS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-8 bg-white border border-slate-200 rounded-xl">
            <div className="p-3 bg-emerald-50 rounded-lg shrink-0">
              <Code className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-lg text-slate-800">
              Building a quiet blog app to host longform essays and create an intimate reader community.
            </p>
          </div>
        </div>
      </section>

      {/* LATEST PROJECTS */}
      <section className="py-20 px-4 bg-white">
  <h1 className="text-3xl font-bold mb-10 text-gray-900 text-center">
    Latest Projects
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="transition-transform duration-500 hover:-translate-y-1 animate-fadeIn h-full"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          mockupUrl={project.mockupUrl}
          notesPath={project.notesPath}
          status={project.status}
          onClick={onNavigate}
        />
      </div>
    ))}
  </div>
</section>


      {/* VALUES */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 font-semibold">What I Care About</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Core values that guide every project, decision, and line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-white/90">{value.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
