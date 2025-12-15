import React from "react";
import { Heart, Code, PenLine, Mountain, Shield, Globe } from "lucide-react";

export default function AboutMe() {
  const skills = [
    "React.js",
    "JavaScript",
    "TailwindCSS",
    "Node.js / Express",
    "MySQL / Database Design",
    "UI/UX Thinking & Prototyping",
    "Community-Centered Tech Design",
    "Technical Writing & Documentation",
    "Information Systems Security",
    "Ethical & Inclusive Technology",
    "Data Privacy & Governance",
    "python programming and django",
    "Data Analysis with pandas",
    ""
  ];

  const hobbies = [
    { icon: Mountain, text: "Running & Fitness" },
    { icon: Heart, text: "Nature Walks & Reflection" },
    { icon: PenLine, text: "Personal Writing & Essays" },
    { icon: Globe, text: "Exploring Open-Source Communities" },
    { icon: Shield, text: "Studying Ethics & Responsible Tech" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-700 leading-relaxed">
          Hi, I’m <span className="font-semibold">Catherine Otieno</span> — a{" "}
          <strong className="text-blue-600">full-stack developer</strong>,{" "}
          <strong className="text-emerald-600">community-focused digital caretaker</strong>, and{" "}
          <strong className="text-rose-600">writer</strong>. I build tools, systems, and essays 
          that make life softer, clearer, and more connected for people.
          <br /><br />
          My journey is a mix of technology, ethics, and reflection. I care deeply about{" "}
          <strong>human-centered design</strong>, <strong>data privacy</strong>, and creating 
          digital spaces that empower, not exploit. My goal is to blend <strong>information systems, 
          data security, and ethical tech</strong> with thoughtful community impact.
        </p>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Technical Skills & Learning
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hobbies / Personal Interests */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            What Inspires Me
          </h2>
          <div className="flex flex-col md:flex-row gap-6 flex-wrap">
            {hobbies.map((hobby) => {
              const IconComponent = hobby.icon;
              return (
                <div
                  key={hobby.text}
                  className="flex items-center gap-3 bg-slate-50 px-5 py-4 rounded-xl shadow-sm"
                >
                  <IconComponent className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-700 text-lg">{hobby.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-lg text-slate-700 leading-relaxed">
          Every project I take on is an experiment in building technology that sees people, 
          honors ethics, and fosters connection. I’m constantly learning, reflecting, 
          and striving to create digital experiences that are as compassionate as they are functional.
        </p>
      </div>
    </section>
  );
}
