import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import Button from "../../components/Ui/Button";
import Card from "../../components/Ui/Card";
import { useNavigate } from "react-router-dom";

export default function KenyaProAgingProject() {
  const navigate = useNavigate();
  const slug = "kenya-pro-aging-organization";
  const mockupUrl = "https://www.figma.com/make/MZHiNycMfJFlayOVKU4eG9/Elderly-Care-Center-Landing-Page?t=F2SUmbuLQIW4ug0P-6"

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Kenya Pro-Aging Organization</h1>
          <p className="text-slate-700">
            Role-based web app connecting older adults, caregivers, volunteers and donors — designed for accessibility and dignity.
          </p>
        </header>

        <article>
          <Card className="p-6 space-y-4">
            <section>
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="text-slate-700">Fragmented support for elders — volunteers, caregivers and donors lack simple tools to coordinate care and track wellbeing.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Insight</h3>
              <p className="text-slate-700">A single, role-based system that meets limited digital-literacy users where they are is more effective than many disconnected tools.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Solution</h3>
              <p className="text-slate-700">Simple dashboards, voice/SMS options, volunteer rotas, medication tracking and donor transparency features.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Core Functionalities</h3>
              <ul className="list-disc pl-6 text-slate-700">
                <li>Role-based dashboards (Admin, Caregiver, Volunteer, Family)</li>
                <li>Medication & appointment tracking with photo proof</li>
                <li>Volunteer rotas + SMS / voice updates for families</li>
                <li>Donor reporting & simple impact dashboards</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Impact</h3>
              <p className="text-slate-700">Safer care, improved medication adherence, reduced admin burnout, and transparent donor reporting.</p>
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
