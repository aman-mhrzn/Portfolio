import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface WebsiteLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  websiteLinks?: WebsiteLink[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "My Second Teacher (MST)",
    description:
      "Led QA across MST platforms like Nepal, Indonesia, Alston, and Global markets ensuring consistency across localized environments. Validated core learning workflows, integrations, region-specific functionality, and feature and content updates to support reliable releases.",
    category: "Senior QA Engineer",
    tags: ["QA Leadership", "Release Validation", "Platform Testing", "Security Testing"],
    image: "./MST.png",
    websiteLinks: [
      { label: "Global", href: "https://www.mysecondteacher.com/" },
      { label: "Nepal", href: "https://www.mysecondteacher.com.np/" },
      { label: "Jelajah", href: "https://jelajahilmu.com/" },
      
    ],
  },
  {
    title: "Home School Asia (HSA)",
    description:
      "Performed QA for an online learning and exam-preparation platform, designing and executing test scenarios for core learning, user management, and assessment workflows, including interactive lessons, quizzes, mock exams, scoring, reports, and student progress.",
    category: "Senior QA Engineer",
    tags: ["Test Design", "Functional Testing", "Defect Management", "Regression Testing"],
    image: "./HSA.svg",
    websiteLinks: [{ label: "Home School Asia", href: "https://homeschool.asia/" }],
  },
  {
    title: "Kungfu Quiz (KFQ)",
    description:
      "Performed functional, regression, UI, and exploratory testing across KFQ, Sifu, and KA platforms. Conducted UAT and final release validation, coordinated cross-functional QA activities, and ensured features met quality standards and were production-ready.",
    category: "QA Engineer",
    tags: ["Functional Testing", "Regression Testing", "UI Testing", "Exploratory Testing"],
    image: "./KFQ.svg",
    websiteLinks: [{ label: "Kungfu Quiz", href: "https://www.kungfuquiz.com/" }],
  },
  {
    title: "MST Backoffice",
    description:
      "Coordinated cross-functional teams across design, development, and QA to deliver an administrative platform supporting the MST ecosystem, managing requirements, delivery tracking, stakeholder coordination, and critical back-office workflows.",
    category: "Project Manager",
    tags: ["Project Management", "Release Management", "Cross-Functional Coordination" , "UAT", ],
    image: "./Apollo.png",
  },
  {
    title: "HRM Module",
    description:
      "Served as Project Manager and key stakeholder, aligning business requirements with implementation while mentoring interns and trainees in delivering a 20+ feature HRM web application.",
    category: "Project Manager",
    tags: ["Project Planning", "Stakeholder Management", "Cross-Functional Coordination", "Mentoring"],
    image: "./HRM.svg",
  },
  {
    title: "Interactive Video Publisher (IVy)",
    description:
      "Tested an interactive video publishing platform, focusing on question triggers, playback behavior, response capture, multiple question formats, and interactive scenarios across supported configurations.",
    category: "QA Engineer",
    tags: ["Functional Testing", "Interactive Video", "Integration Testing", "Test Execution"],
    image: "./IVY.svg",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">What I&apos;ve worked on</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className={`glass rounded-2xl border transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col overflow-hidden group ${project.featured ? "border-blue-500/30" : "border-white/10"}`}
            >
              {/* <div className="h-44 bg-slate-950/70 relative overflow-hidden p-7">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 group-hover:from-blue-600/20 group-hover:to-cyan-600/20 transition-all duration-300" />
                <Image
                  src={project.image}
                  alt={`${project.title} logo`}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="z-10 object-contain p-7 transition-transform duration-300 group-hover:scale-105"
                />
                
                {project.featured && (
                  <span className="absolute top-3 right-3 z-10 text-xs px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200">
                    Featured
                  </span>
                )}
              </div> */}
              <div className="h-44 relative overflow-hidden">
  {/* Background based on the project image */}
  <div
    className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl opacity-60"
    style={{ backgroundImage: `url(${project.image})` }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-slate-950/60" />

  <Image
    src={project.image}
    alt={`${project.title} logo`}
    fill
    unoptimized
    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
    className="z-10 object-contain p-7 transition-transform duration-300 group-hover:scale-105"
  />

  {project.featured && (
    <span className="absolute top-3 right-3 z-20 text-xs px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200">
      Featured
    </span>
  )}
</div>


              <div className="p-6 flex flex-col flex-1">
                <p className="mb-2 text-sm font-semibold text-blue-400">{project.category}</p>
                <h3 className="font-bold text-white text-lg mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5 text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.websiteLinks && (
                  <div className="flex flex-wrap gap-2">
                    {project.websiteLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-400/30 bg-blue-600/15 px-3 py-2 text-sm font-medium text-blue-300 transition-colors hover:border-blue-300/60 hover:bg-blue-600/25 hover:text-white"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
