import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Card from '../components/Ui/Card';

export default function ContactPage() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/cateauma" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/cathrine-otieno-69b10427a/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/cathm_ere/" },
    { icon: Mail, label: "Email", href: "mailto:otienocathrine03@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-slate-900 mb-4 font-bold">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            I'm always open to conversations about technology, community, ethics, and collaboration.
          </p>
        </div>

        {/* Email & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 border-2 border-slate-200 bg-white">
            <Mail className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl text-slate-900 mb-2 font-semibold">Email</h3>
            <p className="text-slate-600 mb-4">
              For project inquiries, collaboration, or just to say hello.
            </p>
            <a
              href="mailto:otienocathrine03@gmail.com"
              className="mt-6 px-6 py-3 w-full bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-colors duration-300 text-center inline-block"
            >
              otienocathrine03@gmail.com
            </a>
          </Card>

          <Card className="p-8 border-2 border-slate-200 bg-white">
            <h3 className="text-xl text-slate-900 mb-2 font-semibold">Location</h3>
            <p className="text-slate-600">
              Based in Kibera, Nairobi, Kenya<br />
              Building technology that serves my community and beyond.
            </p>
          </Card>
        </div>

        {/* Social Links */}
        <Card className="p-8 border-2 border-slate-200 bg-white mb-12">
          <h3 className="text-xl text-slate-900 mb-6 font-semibold">Connect</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <link.icon className="w-6 h-6 text-slate-700" />
                <span className="text-sm text-slate-600">{link.label}</span>
              </a>
            ))}
          </div>
        </Card>

        {/* Collaboration Section */}
        <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
          <h3 className="text-xl text-slate-900 mb-3 font-semibold">Open to Collaboration</h3>
          <ul className="space-y-2 text-slate-700 mb-6 list-disc list-inside">
            {[
              "Center community voices and lived experiences",
              "Prioritize ethics and care in technology design",
              "Support marginalized communities and informal workers",
              "Explore intersections of healing, tech, and social change"
            ].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p className="text-slate-600">
            If you're working on something in this space, I'd love to hear from you.
          </p>
        </Card>
      </div>
    </div>
  );
}
