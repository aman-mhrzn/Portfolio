import {
  TrendingUp,
  ClipboardCheck,
  Code2,
  ScanSearch,
  Boxes,
  Users,
} from "lucide-react";

const EXPERTISE_AREAS = [
  {
    title: "Software Testing",
    icon: ClipboardCheck,
    color: {
      card: "border-violet-500/30 hover:border-violet-400/60 hover:shadow-violet-500/10",
      icon: "bg-violet-600 shadow-violet-950/40",
      chip: "border-violet-400/30 bg-violet-500/10 text-violet-300 hover:border-violet-300/60 hover:bg-violet-500/20",
    },
    skills: [
      "Manual Testing", "Functional Testing", "Smoke Testing", "UAT", "Regression Testing", "Integration Testing",
      "Usability Testing", "Performance Testing","API Testing",  "Security Testing", "End-to-End Testing",
    ],
  },
  {
    title: "Test Management",
    icon: Code2,
    color: {
      card: "border-blue-500/30 hover:border-blue-400/60 hover:shadow-blue-500/10",
      icon: "bg-blue-600 shadow-blue-950/40",
      chip: "border-blue-400/30 bg-blue-500/10 text-blue-300 hover:border-blue-300/60 hover:bg-blue-500/20",
    },
    skills: [
      "Test Strategy", "Test Planning", "Test Case Design", "Test Execution", "Defect Management",
      "Bug Reporting", "Requirements Analysis", "Release Management", "Root Cause Analysis",
    ],
  },
  {
    title: "QA Leadership",
    icon: Users,
    color: {
      card: "border-fuchsia-500/30 hover:border-fuchsia-400/60 hover:shadow-fuchsia-500/10",
      icon: "bg-fuchsia-600 shadow-fuchsia-950/40",
      chip: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-300 hover:border-fuchsia-300/60 hover:bg-fuchsia-500/20",
    },
    skills: [
      "Mentoring & Coaching", "QA Coordination", "Test Case Review", "Process Improvement",
      "Quality Standards", "Team Collaboration",
    ],
  },
  {
    title: "Project Management",
    icon: TrendingUp,
    color: {
      card: "border-orange-500/30 hover:border-orange-400/60 hover:shadow-orange-500/10",
      icon: "bg-orange-600 shadow-orange-950/40",
      chip: "border-orange-400/30 bg-orange-500/10 text-orange-300 hover:border-orange-300/60 hover:bg-orange-500/20",
    },
    skills: [
      "Agile / Scrum", "Sprint Planning", "Backlog Grooming", "Stakeholder Communication",
      "Release Management", "Cross-Functional Coordination",
    ],
  },
  {
    title: "Testing Tools",
    icon: ScanSearch,
    color: {
      card: "border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-500/10",
      icon: "bg-cyan-600 shadow-cyan-950/40",
      chip: "border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:border-cyan-300/60 hover:bg-cyan-500/20",
    },
    skills: ["Postman", "Swagger", "Burp Suite", "JMeter"],
  },
  {
    title: "Tools & Platforms",
    icon: Boxes,
    color: {
      card: "border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-emerald-500/10",
      icon: "bg-emerald-600 shadow-emerald-950/40",
      chip: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-300/60 hover:bg-emerald-500/20",
    },
    skills: ["GitLab", "Git", "AWS", "CI/CD", "Figma", "InVision", "Slack", "Google Workspace"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">What I&apos;ve worked with</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EXPERTISE_AREAS.map(({ title, icon: Icon, skills, color }) => (
            <article
              key={title}
              className={`glass rounded-3xl border p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${color.card}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 ${color.icon}`}>
                  <Icon size={27} strokeWidth={1.8} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-3.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-2.5 text-sm font-small transition-colors ${color.chip}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
