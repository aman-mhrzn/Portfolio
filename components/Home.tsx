"use client";
import { useEffect, useState } from "react";
import { Download, ChevronDown, MapPin, CheckCircle, Eye } from "lucide-react";

const RESUME_ID = "1-xtUzutp8lQbu3a4G6HXqahP9qA88o5y";
const resumeViewUrl =
  `https://drive.google.com/file/d/${RESUME_ID}/view`;
const resumeDownloadUrl =
  `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;

const ROLES = [
  "Senior Software QA Engineer",
  "Project Manager",
  "UAT Specialist",
  "Security & Performance Tester",
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timer = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      timer = setTimeout(() => {
        setDeleting(false);
        setIdx((idx + 1) % texts.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, idx, texts]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}

function Particle({
  x,
  y,
  size,
  delay,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
}) {
  return (
    <div
      className="absolute rounded-full bg-blue-500/20 pulse-glow"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function Home() {
  const particles = [
    { x: 10, y: 20, size: 6, delay: 0 },
    { x: 85, y: 15, size: 8, delay: 1 },
    { x: 70, y: 70, size: 5, delay: 2 },
    { x: 20, y: 75, size: 7, delay: 0.5 },
    { x: 50, y: 10, size: 4, delay: 1.5 },
    { x: 90, y: 50, size: 6, delay: 2.5 },
    { x: 30, y: 90, size: 5, delay: 0.8 },
    { x: 60, y: 85, size: 8, delay: 1.8 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl" />
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-slate-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Hello, I&apos;m <span className="gradient-text">Aman</span>
            <br />
            <span className="gradient-text">Maharjan</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4 h-10">
            <TypeWriter texts={ROLES} />
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-3 text-justify">
            Driving software quality and successful delivery through
            comprehensive testing, quality assurance practices, and effective
            cross-functional collaboration.
          </p>

          <div className="flex items-center gap-2 text-slate-500 text-sm mb-8 justify-center lg:justify-start">
            <MapPin size={14} />
            Kathmandu, Nepal
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              // href="/resume.pdf"
              href={resumeViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Eye size={18} />
              View Resume
            </a>
            <a
              // href="/resume.pdf"
              href={resumeDownloadUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-blue-500/40 font-semibold transition-all duration-200 hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>
            {/* <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Eye size={18} />
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-blue-500/40 font-semibold transition-all duration-200 hover:scale-105"
            >
              Contact Me
            </a> */}
          </div>
        </div>

        {/* Right: Profile card */}
        <div className="flex-shrink-0 relative">
          {/* Floating card */}
          <div className="relative w-72 h-72 float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/30 blur-xl" />
            <div className="relative w-72 h-72 rounded-full glass border-2 border-blue-500/30 flex items-center justify-center overflow-hidden glow-blue">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-4xl font-bold mx-auto mb-3">
                  AM
                </div>
                <p className="text-white font-semibold">Aman Maharjan</p>
                <p className="text-blue-400 text-sm">
                  Senior Software QA Engineer · Project Manager
                </p>
              </div>
            </div>
          </div>

          {/* Badge cards */}
          <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-sm font-medium border border-green-500/30">
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-green-400" />
              <span>5+ Years Experiance</span>
            </div>
          </div>
          {/* <div className="absolute -bottom-2 -left-6 glass rounded-xl px-3 py-2 text-sm font-medium border border-blue-500/30">
            <div className="flex items-center gap-2 text-blue-400">
              <span className="font-bold text-white">2</span>
              <span className="text-slate-400">Current Roles</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
