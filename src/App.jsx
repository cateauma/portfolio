import React from "react";
import { Routes, Route } from "react-router-dom";

// Core portfolio pages
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import WritingPage from "./pages/WritingPage";
import ContactPage from "./pages/ContactPage";
import AboutMe from "./pages/AboutMe";

// Project Notes Pages
import BlogApp from "./pages/notes/BlogApp";
import CycleSyncApp from "./pages/notes/CycleSyncApp";
import KenyaProAgingProject from "./pages/notes/KenyaProAgingProject";
import KiberaLights from "./pages/notes/KiberaLights";
import KiberaNiKwetu from "./pages/notes/KiberaNiKwetu";
import MjengoSkillsCertifier from "./pages/notes/MjengoSkillsCertifier";

import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <Routes>
          {/* Main portfolio pages */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about Me" element={<AboutMe />} />

          {/* Project Notes Pages */}
          <Route path="/notes/BlogApp" element={<BlogApp />} />
          <Route path="/notes/CycleSyncApp" element={<CycleSyncApp />} />
          <Route
            path="/notes/KenyaProAgingProject"
            element={<KenyaProAgingProject />}
          />
          <Route path="/notes/KiberaLights" element={<KiberaLights />} />
          <Route path="/notes/KiberaNiKwetu" element={<KiberaNiKwetu />} />
          <Route
            path="/notes/MjengoSkillsCertifier"
            element={<MjengoSkillsCertifier />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
