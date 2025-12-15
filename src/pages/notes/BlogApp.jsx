import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import Button from "../../components/Ui/Button";
import Card from "../../components/Ui/Card";
import { useNavigate } from "react-router-dom";


export default function BlogApp() {
  const navigate = useNavigate();
  const slug = "blog-app-home-for-essays";
  const mockupUrl = "https://www.figma.com/make/Tx7WezCJoPOOd5U0xijOhY/Personal-Blog-App-UI-Markup?t=F2SUmbuLQIW4ug0P-6"

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Blog App — Home for Essays</h1>
          <p className="text-slate-700">
            Calm, intimate platform for longform writing. Designed to centre careful reading, discoverability, and long-form archives.
          </p>
        </header>

        <article className="space-y-6">
          <Card className="p-6">
            <section aria-labelledby="problem" className="mb-4">
              <h2 id="problem" className="text-lg font-semibold">Problem</h2>
              <p className="text-slate-700">
                Public longform is fragmented across platforms. Writers lose control of layout, reading experience, and who sees their work.
              </p>
            </section>

            <section aria-labelledby="insight" className="mb-4">
              <h3 id="insight" className="text-lg font-semibold">Insight</h3>
              <p className="text-slate-700">
                Readers value focus and calm; writers want ownership and a lightweight publishing flow.
              </p>
            </section>

            <section aria-labelledby="solution" className="mb-4">
              <h3 id="solution" className="text-lg font-semibold">Solution</h3>
              <p className="text-slate-700">
                A minimal blog platform (Markdown-first), with a cozy reading mode, subscription email capture, and portable export (PDF / share links).
              </p>
            </section>

            <section aria-labelledby="core" className="mb-4">
              <h3 id="core" className="text-lg font-semibold">Core Functionalities</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Markdown editor + image uploader</li>
                <li>Cozy reading mode (typography, generous line-height)</li>
                <li>Export to PDF & shareable canonical links</li>
                <li>Subscription & minimal analytics (privacy-first)</li>
              </ul>
            </section>

            <section aria-labelledby="impact" className="mb-4">
              <h3 id="impact" className="text-lg font-semibold">Impact</h3>
              <p className="text-slate-700">
                Delight readers and keep creative control. Useful for thought leadership, essays, and building a slow, persistent archive.
              </p>
            </section>

            <div className="flex gap-3 mt-4">
              <Button onClick={() => window.open(mockupUrl, "_blank", "noopener,noreferrer")}>
                <ExternalLink className="w-4 h-4" />
                View Prototype
              </Button>
              <Button onClick={() => navigate(`/notes/${slug}`)} variant="outline">
                <FileText className="w-4 h-4" />
                Read Notes
              </Button>
            </div>
          </Card>
        </article>
      </div>
    </div>
  );
}
