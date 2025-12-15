import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import Button from "../../components/Ui/Button";
import Card from "../../components/Ui/Card";
import { useNavigate } from "react-router-dom";

export default function MjengoSkillsCertifier() {
  const navigate = useNavigate();
  const slug = "mjengo-skills-certifier";
  const mockupUrl = "https://www.figma.com/make/MZHiNycMfJFlayOVKU4eG9/Elderly-Care-Center-Landing-Page?t=F2SUmbuLQIW4ug0P-6"

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Mjengo Skills Certifier</h1>
          <p className="text-slate-700">
            Local skills verification platform for construction workers — verified short courses and a portable credibility score.
          </p>
        </header>

        <article>
          <Card className="p-6 space-y-4">
            <section>
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="text-slate-700">Informal workers lack verified credentials and lose work because there’s no portable proof of skill.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Insight</h3>
              <p className="text-slate-700">A lightweight, local credential tied to community partners unlocks better pay and safer work.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Solution</h3>
              <p className="text-slate-700">Short certified modules, on-site assessments, portable badges and employer trust scores.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Core Functionalities</h3>
              <ul className="list-disc pl-6 text-slate-700">
                <li>Short course + micro-certification</li>
                <li>On-site practical assessment & digital badge</li>
                <li>Employer verification & job matching</li>
                <li>Simple digital wallet for certificates</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Impact</h3>
              <p className="text-slate-700">Higher wages, safer sites, and a trusted skills economy for informal workers.</p>
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
