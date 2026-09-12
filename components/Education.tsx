"use client";
import Image from "next/image";

export default function Education() {
  const education = [
    {
      year: "2020",
      degree: "BSc (Hons) in Computing",
      school: "Islington College",
      university: "London Metropolitan University",
      location: "Kathmandu, Nepal",
      logo: "./islington.webp",
      logoAlt: "Islington College logo",
    },
    {
      year: "2017",
      degree: "+2 HSEB Management",
      school: "Trinity Int'l College",
      university: "Higher Secondary Education Board",
      location: "Kathmandu, Nepal",
      logo: "./trinity.webp",
      logoAlt: "Trinity Int'l College logo",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Academic Background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="
                relative
                min-h-[390px]
                rounded-3xl
                bg-slate-900/70
                border border-white/5
                p-7
                transition-all duration-300
                hover:border-white/15
                hover:-translate-y-1
              "
            >
              {/* Year */}
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-blue-300 text-sm font-mono">
                  {edu.year}
                </span>
              </div>

              {/* College Logo */}
              <div
                className="
                  w-20 h-20
                  mx-auto mt-4 mb-8
                  rounded-3xl
                  bg-white
                  flex items-center justify-center
                  p-3
                  overflow-hidden
                "
              >
                <Image
                  src={edu.logo}
                  alt={edu.logoAlt}
                  unoptimized
                  width={64}
                  height={64}
                  className="w-full h-full object-contain scale-130"
                />
              </div>

              {/* Degree */}
              <h3 className="text-lg md:text-xl font-bold text-white text-center leading-snug max-w-md mx-auto">
                {edu.degree}
              </h3>

              {/* College */}
              <p className="text-blue-400 text-base font-semibold text-center mt-5">
                {edu.school}
              </p>

              {/* University */}
              <p className="text-slate-400 text-sm text-center mt-1">
                {edu.university}
              </p>

              {/* Location */}
              <p className="text-slate-500 text-sm text-center mt-8">
                {edu.location}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
