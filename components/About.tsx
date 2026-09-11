"use client";
import { useEffect, useRef, useState } from "react";
import { User, Target, TrendingUp, Shield } from "lucide-react";

const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Testcase Designed" },
  { value: 7, suffix: "+", label: "Key Projects" },
  { value: 1000, suffix: "+", label: "Bugs Reported" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 40;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 40);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const EXPERTISE = [
  {
    icon: TrendingUp,
    label: "QA Leadership",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Shield,
    label: "Manual Testing",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Target,
    label: "API Testing",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: User,
    label: "Security Testing",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Get to Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: bio */}
          <div>
            <p className="text-slate-400 leading-relaxed mb-8 text-justify">
              I&apos;m a Senior Software QA Engineer and Project Manager with
              over{" "}
              <span className="text-blue-400 font-semibold">
                5 years of hands-on experience
              </span>{" "}
              in web, mobile, SaaS, and enterprise testing. Skilled in
              functional, API, regression, UAT, and performance testing, with
              strong expertise in defect management, Agile/Scrum, and
              cross-functional collaboration.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-justify">
              At Innovate Tech in Kathmandu, I lead QA and project delivery
              across cross-functional teams. My work spans requirements
              analysis, test strategy, defect and release management, and
              testing across Dev, Stage, and Production environments.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-justify">
              I specialize in API and security testing, QA coordination,
              mentoring junior QAs, and bringing quality, clarity, and momentum
              to every stage of the SDLC.
            </p>

            {/* Expertise chips */}
            <div className="grid grid-cols-2 gap-3">
              {EXPERTISE.map(({ icon: Icon, label, color, bg }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${bg} border border-white/5`}
                >
                  <Icon size={18} className={color} />
                  <span className="text-sm font-medium text-slate-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats + timeline */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="text-4xl font-bold gradient-text mb-1">
                    <CountUp target={value} suffix={suffix} />
                  </div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Career Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                    <div className="w-px flex-1 bg-slate-700 mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="font-medium text-white text-sm">
                      Project Manager
                    </p>
                    <p className="text-blue-400 text-xs">
                      Innovate Tech • Jul 2025 – Present
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Project Planning, Release Management, Cross-Functional Coordination
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-600 mt-1 flex-shrink-0" />
                    <div className="w-px flex-1 bg-slate-700 mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="font-medium text-white text-sm">
                      Senior Software QA Engineer
                    </p>
                    <p className="text-cyan-400 text-xs">
                      Innovate Tech • Jul 2024 – Present
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      QA leadership, Requirement Analysis, API and security
                      testing
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-700 mt-1 flex-shrink-0" />
                    <div className="w-px flex-1 bg-slate-700 mt-1" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      Mid level QA Engineer
                    </p>
                    <p className="text-slate-500 text-xs">
                      Innovate Tech • Jun 2022 – Jul 2024
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Test Planning, Functional Testing, Integration Testing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
