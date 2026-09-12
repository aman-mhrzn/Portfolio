"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";


const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
const RESUME_ID = "1-xtUzutp8lQbu3a4G6HXqahP9qA88o5y";
const resumeDownloadUrl =
  `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll without adding #section to the URL
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const navbarOffset = 80;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }

    // Remove any existing hash from the URL
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );

    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: "-80px 0px -30% 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10 py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 font-bold text-lg pl-4"
        >
          {/* <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
            <Bug size={16} className="text-blue-400" />
          </span> */}
          <span className="w-9 h-9 flex items-center justify-center bg-blue">
            <Image
              src="/AmanMaharjan.png"
              alt="AM"
              width={360}
              height={360}
              className="w-full h-full object-contain scale-250"
            />
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm transition-colors duration-200 relative group ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-blue-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Download CV */}
        <a
          // href="/resume.pdf"
          href={resumeDownloadUrl}
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium transition-colors duration-200"
        >
          <Download size={18} />
          Download CV
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10 mt-2 mx-4 rounded-xl p-4">
          {links.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-2.5 text-sm transition-colors ${
                  isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <a
            // href="/resume.pdf"
            href={resumeDownloadUrl}
            download
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </nav>
  );
}
