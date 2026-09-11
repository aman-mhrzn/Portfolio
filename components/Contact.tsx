"use client";

import {
Mail,
MapPin,
Link,
Phone,
} from "lucide-react";

const CONTACT_INFO = [
{
icon: Mail,
label: "Email",
value: "amanmaharjan2056@gmail.com",
href: "mailto:amanmaharjan2056@gmail.com",
color: "text-blue-400",
bg: "bg-blue-500/15",
},
{
icon: Phone,
label: "Phone",
value: "+977 9860981628",
href: "tel:+9779860981628",
color: "text-green-400",
bg: "bg-green-500/15",
},
{
icon: Link,
label: "LinkedIn",
value: "in/aman-maharjan1",
href: "https://linkedin.com/in/aman-maharjan1",
color: "text-cyan-400",
bg: "bg-cyan-500/15",
},
{
icon: MapPin,
label: "Location",
value: "Kathmandu, Nepal",
href: "https://www.google.com/maps/search/?api=1&query=Shankhamul,Kathmandu,Nepal",
color: "text-orange-400",
bg: "bg-orange-500/15",
},
];

export default function Contact() {
return (
<section id="contact" className="py-24">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
Get in Touch
</p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Let&apos;s <span className="gradient-text">Connect</span>
      </h2>
    </div>

    <div className="max-w-2xl mx-auto">
      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 text-justify">
        I&apos;m always looking for exciting QA challenges, collaborative
        opportunities, and freelance testing projects. I enjoy helping
        teams build reliable, high-quality products through thoughtful
        testing and attention to detail. Feel free to reach out, I&apos;d
        love to connect and explore how we can work together.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CONTACT_INFO.map(
          ({ icon: Icon, label, value, href, color, bg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 glass rounded-xl border border-white/5 hover:border-white/15 transition-all duration-200 group"
            >
              <div
                className={`w-11 h-11 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}
              >
                <Icon size={19} className={color} />
              </div>

              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">
                  {label}
                </p>

                <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {value}
                </p>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  </div>
</section>


);
}