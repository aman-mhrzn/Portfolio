"use client";
import { useState } from "react";
import Image from "next/image";
import { Briefcase, ChevronDown, ChevronUp, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Innovate Tech",
    location: "New Baneshwor, Kathmandu",
    role: "Project Manager",
    type: "Full-time",
    duration: "Jul 2025 – Present",
    startYear: "2025",
    years: "Current role",
    color: "blue",
    responsibilities: [
      "Led project planning, requirements gathering, sprint planning, task coordination, and delivery across Product, Development, and QA teams.",
      "Conducted client and stakeholder meetings to align requirements, progress, priorities, risks, dependencies, and deliverables.",
      "Translated business requirements into user stories, acceptance criteria, functional requirements, and project documentation.",
      "Managed requirements, tasks, bugs, dependencies, and production issues in GitLab through timely follow-up and resolution.",
      "Coordinated cross-functional teams to resolve blockers and deliver features on agreed timelines.",
    ],
    achievements: ["Project planning and delivery", "Stakeholder communication", "Requirements documentation", "Risk and dependency management"],
    tools: ["GitLab", "Agile", "Scrum", "Sprint Planning", "Release Management"],
  },
  {
    company: "Innovate Tech",
    location: "New Baneshwor, Kathmandu",
    role: "Senior Software QA Engineer",
    type: "Full-time",
    duration: "Jul 2024 – Present",
    startYear: "2024",
    years: "Current role",
    color: "blue",
    responsibilities: [
      "Led QA activities across multiple projects, aligning coverage with business and technical requirements.",
      "Designed and maintained test strategies, plans, cases, and scenarios for complex business workflows.",
      "Performed functional, regression, smoke, sanity, exploratory, UI, API, security, and end-to-end testing across Dev, Stage, and Production.",
      "Validated APIs with Postman and Swagger and used Burp Suite to identify vulnerabilities and input-validation weaknesses.",
      "Developed Cypress automation for back-office workflows and led defect analysis, retesting, verification, and closure.",
      "Mentored junior QA engineers and provided guidance on test design, execution, automation, and best practices.",
    ],
    achievements: ["Multi-project QA leadership", "Cypress automation", "API and security coverage", "QA mentoring"],
    tools: ["Cypress", "Postman", "Swagger", "Burp Suite", "GitLab"],
  },
  {
    company: "Innovate Tech",
    location: "New Baneshwor, Kathmandu",
    role: "Mid-Level Software QA Engineer",
    type: "Full-time",
    duration: "Jan 2023 – Jul 2024",
    startYear: "2023",
    years: "1 yr 7 mos",
    color: "blue",
    responsibilities: [
      "Prepared test scenarios, cases, and data for positive, negative, boundary, and edge-case coverage.",
      "Tested features, enhancements, integrations, and complex workflows across multiple environments.",
      "Managed defects in GitLab and participated in planning, stand-ups, requirements discussions, and releases.",
      "Developed Cypress scripts to improve regression coverage and reduce repetitive manual testing.",
    ],
    achievements: ["Requirements-based testing", "API and security testing", "Agile delivery support", "Cypress automation"],
    tools: ["Cypress", "Postman", "Swagger", "Burp Suite", "GitLab"],
  },
  {
    company: "Innovate Tech",
    location: "New Baneshwor, Kathmandu",
    role: "Associate Software QA Engineer",
    type: "Full-time",
    duration: "Jan 2022 – Jan 2023",
    startYear: "2022",
    years: "1 year",
    color: "blue",
    responsibilities: [
      "Prepared test cases, scenarios, and data from functional requirements and business specifications.",
      "Performed functional, smoke, sanity, regression, UI, and API testing for web applications.",
      "Reported and tracked defects in GitLab with detailed reproduction steps and supporting evidence.",
      "Collaborated with developers on defect verification and participated in Agile/Scrum activities.",
    ],
    achievements: ["Web application testing", "Defect lifecycle management", "API validation", "Agile/Scrum foundation"],
    tools: ["Postman", "Swagger", "GitLab", "Agile", "Scrum"],
  },
];

const colorMap: Record<string, { badge: string; border: string; dot: string }> = {
  blue: {
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    border: "border-blue-500/30",
    dot: "bg-blue-500",
  },
};

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Where I&apos;ve worked</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent hidden md:block" />

          {EXPERIENCES.map((exp, i) => {
            const c = colorMap[exp.color];
            const isOpen = expanded === i;
            return (
              <div key={i} className="relative md:pl-28 mb-8">
                {/* Timeline dot */}
                <div className={`absolute left-16 top-6 w-5 h-5 rounded-full ${c.dot} border-4 border-slate-900 hidden md:block`} />
                <span className={`absolute left-0 top-5 hidden md:block w-12 text-right text-sm font-semibold transition-opacity duration-300 ${isOpen ? "text-blue-400 opacity-100" : "text-slate-500 opacity-50"}`}>
                  {exp.startYear}
                </span>

                <div className={`glass rounded-2xl border transition-all duration-300 ${isOpen ? c.border : "border-white/5 hover:border-white/15"}`}>
                  {/* Header */}
                  <button
                    className="w-full text-left p-6"
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/95 border border-blue-500/30 flex items-center justify-center flex-shrink-0 p-1.5">
                          <Image
                            src="/innovatetech.webp"
                            alt="Innovate Tech logo"
                            width={36}
                            height={36}
                            className="w-full h-full object-contain scale-130"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                              <Calendar size={13} />
                              {exp.duration}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400 text-sm">{exp.location}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${c.badge}`}>
                              {exp.years}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 flex-shrink-0">
                        <span className="text-sm hidden sm:inline">{isOpen ? "Collapse" : "Expand"}</span>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-white/5 pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                            <Briefcase size={14} className="text-blue-400" />
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((r, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-400 text-justify">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            </span>
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {exp.achievements.map((a, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-400 text-justify">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                                {a}
                              </li>
                            ))}
                          </ul>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">Tools Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tools.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
