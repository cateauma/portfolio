import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import SocialIcon from "./Ui/SocialIcon";

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: "mailto:otienocathrine03@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/cateauma", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/cathrine-otieno-69b10427a/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/cathm_ere/", label: "Instagram" },
  ];

  return (
    <footer className="relative py-12 px-4 bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Gradient Accent Blob */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-emerald-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-700 mb-2">
              Building a kinder, smarter ecosystem — one project at a time.
            </p>
            <p className="text-sm text-slate-500">Based in Kibera, Kenya 🌍</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon, href, label }) => (
              <SocialIcon key={label} icon={icon} href={href} label={label} />
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Catherine Otieno. All projects in prototype phase.
          </p>
        </div>
      </div>
    </footer>
  );
}
