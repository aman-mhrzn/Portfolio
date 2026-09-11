"use client";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CERTS = [
  {
    name: "ISTQB Foundation Level",
    org: "ISTQB",
    date: "2022",
    color: "blue",
    status: "Certified",
  },
  {
    name: "Playwright with JavaScript",
    org: "Udemy",
    date: "2023",
    color: "cyan",
    status: "Completed",
  },
  {
    name: "Cypress – Modern Automation",
    org: "Udemy",
    date: "2022",
    color: "green",
    status: "Completed",
  },
  {
    name: "Postman API Fundamentals",
    org: "Postman",
    date: "2022",
    color: "orange",
    status: "Certified",
  },
  {
    name: "Software Testing Masterclass",
    org: "Udemy",
    date: "2021",
    color: "purple",
    status: "Completed",
  },
  {
    name: "Git & GitHub for QA Engineers",
    org: "Coursera",
    date: "2022",
    color: "pink",
    status: "Completed",
  },
];

const colorMap: Record<string, { border: string; icon: string; badge: string }> = {
  blue: { border: "border-blue-500/30", icon: "text-blue-400 bg-blue-500/15", badge: "text-blue-400 bg-blue-500/10" },
  cyan: { border: "border-cyan-500/30", icon: "text-cyan-400 bg-cyan-500/15", badge: "text-cyan-400 bg-cyan-500/10" },
  green: { border: "border-green-500/30", icon: "text-green-400 bg-green-500/15", badge: "text-green-400 bg-green-500/10" },
  orange: { border: "border-orange-500/30", icon: "text-orange-400 bg-orange-500/15", badge: "text-orange-400 bg-orange-500/10" },
  purple: { border: "border-purple-500/30", icon: "text-purple-400 bg-purple-500/15", badge: "text-purple-400 bg-purple-500/10" },
  pink: { border: "border-pink-500/30", icon: "text-pink-400 bg-pink-500/15", badge: "text-pink-400 bg-pink-500/10" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Credentials &amp; <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Continuously expanding expertise through industry-recognized certifications and courses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert) => {
            const c = colorMap[cert.color];
            return (
              <div
                key={cert.name}
                className={`glass rounded-2xl p-6 border ${c.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.icon}`}>
                    <Award size={22} />
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.badge}`}>
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-bold text-white mb-1 leading-snug">{cert.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{cert.org}</p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                  <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors group-hover:text-blue-400">
                    <ExternalLink size={12} />
                    View Certificate
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
