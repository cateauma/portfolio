import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import Button from "../../components/Ui/Button";
import Card from "../../components/Ui/Card";
import { useNavigate } from "react-router-dom";

export default function KiberaLights() {
  const navigate = useNavigate();
  const slug = "kibera-lights";
  const mockupUrl = "https://www.figma.com/make/WUClKLhbZupUsNm31k8FTO/KiberaLights-App-Design?t=zpod7io2q6Olsbxt-6"; 

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">KiberaLights — Creative Marketplace</h1>
          <p className="text-slate-700">
            Marketplace for Kibera youth creatives & skilled workers — short reels with direct-buy to creators and donor tracking.
          </p>
        </header>

        <article>
          <Card className="p-6 space-y-4">
            <section>
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="text-slate-700">Talented creators lack safe, direct channels to sell their work without poverty-porn narratives or high platform fees.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Insight</h3>
              <p className="text-slate-700">Short, outcome-focused content with direct checkout increases dignity and conversion.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Solution</h3>
              <p className="text-slate-700">60-sec reels that end with a “Nunua” or “Fund” CTA; escrowed M-Pesa flows and donor impact tracker.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Core Functionalities</h3>
              <ul className="list-disc pl-6 text-slate-700">
                <li>Reel uploader → price/fund CTA</li>
                <li>M-Pesa escrow + payout split</li>
                <li>Verified skill badges & creator profiles</li>
                <li>Donor impact tracker and thank-you reels</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Impact</h3>
              <p className="text-slate-700">Creates a sustainable local creative economy with transparent revenue for creators.</p>
            </section>

            <div className="flex gap-3 mt-4">
              <Button onClick={() => window.open(mockupUrl, "_blank", "noopener,noreferrer")}>
                <ExternalLink className="w-4 h-4" />
                View Prototype
              </Button>
              <Button onClick={() => navigate(`/project-notes/${slug}`)} variant="outline">
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
