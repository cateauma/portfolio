import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import Button from "../../components/Ui/Button";
import Card from "../../components/Ui/Card";
import { useNavigate } from "react-router-dom";

export default function CycleSyncApp() {
  const navigate = useNavigate();
  const slug = "mwezi-cycle-sync-app";
  const mockupUrl = "https://www.figma.com/make/ZbFVRATpxdXf33J9jePbVb/Mwezi-Planner-App-Design?t=F2SUmbuLQIW4ug0P-6"

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Cycle Sync App (Mwezi)</h1>
          <p className="text-slate-700">
            Planner that adapts to the cycle — auto-reschedules tasks on symptomatic days and supports energy-based planning.
          </p>
        </header>

        <article>
          <Card className="p-6 space-y-4">
            <section>
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="text-slate-700">People lose productivity and feel shame when cycles disrupt schedules because tools assume constant energy.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Insight</h3>
              <p className="text-slate-700">Auto-rescheduling and energy-aware tasks remove friction and reduce burnout.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Solution</h3>
              <p className="text-slate-700">Planner that adjusts automatically when you report symptoms — tasks move, priorities adapt, no manual juggling.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Core Functionalities</h3>
              <ul className="list-disc pl-6 text-slate-700">
                <li>Morning check-in (emoji-based)</li>
                <li>Auto-reschedule & priority shifting</li>
                <li>Energy-rated tasks + neurodivergent-friendly mode</li>
                <li>Offline & USSD fallback for low-connectivity users</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Impact</h3>
              <p className="text-slate-700">Better task completion, reduced shame, and a planning tool that respects bodily rhythm.</p>
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
