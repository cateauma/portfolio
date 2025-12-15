import React from "react";
import { ExternalLink } from "lucide-react";
import Card from "../../components/Ui/Card";
import Button from "../../components/Ui/Button";

export default function KiberaNiKwetu() {
  const mockupUrl = "https://www.figma.com/make/GZNO6iSIK1ZmcOAxHuSsc2/Kibera-Yetu-App-Design?t=Qt086tXCyaKc7Xka-6";

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* HEADER */}
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Kibera Ni Kwetu
          </h1>
          <p className="text-slate-700 mt-2">
            A trusted, violence-safe digital baraza for Kibera — built for
            security alerts, opportunities, and verified community leadership.
          </p>
        </header>

        {/* CONTENT */}
        <Card className="p-6 space-y-6">
          {/* Problem */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Problem</h2>
            <p className="text-slate-700">
              Kibera lacks a single trusted digital space for security updates,
              opportunities, and community coordination. Open community forums
              quickly devolve into political, tribal, or personal conflicts,
              making them unsafe and unusable.
            </p>
          </section>

          {/* Insight */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Insight</h2>
            <p className="text-slate-700">
              Open commenting combined with politics creates chaos. Safety comes
              from controlled publishing — verified leaders post, residents
              respond without confrontation.
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Solution (Kibera Ni Kwetu)
            </h2>
            <p className="text-slate-700">
              A leader-only publishing platform where chiefs, elders, schools,
              NGOs, and trusted groups post verified updates. Residents engage
              using reactions, private feedback, or emergency signals — never
              public arguments.
            </p>
          </section>

          {/* Core Functionalities */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Core Functionalities
            </h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Verified leader-only posts (security, jobs, programs)</li>
              <li>Emoji reactions instead of public comments</li>
              <li>Anonymous private feedback (“Nihusishe”)</li>
              <li>Weekly live audio baraza sessions</li>
              <li>One-tap emergency SOS broadcast</li>
            </ul>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Impact</h2>
            <p className="text-slate-700">
              Creates the first violence-safe digital coordination layer for
              Kibera. Trusted by local leadership, scalable across informal
              settlements, and designed to reduce misinformation and panic.
            </p>
          </section>

          {/* ACTIONS */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={() =>
                window.open(mockupUrl, "_blank", "noopener,noreferrer")
              }
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Prototype
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
