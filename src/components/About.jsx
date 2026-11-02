import React from "react";
import { Download, Compass, Target, Heart, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F2F8F3] text-[#17231F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C8C68]/10 text-[#2C8C68] text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Behind The Designer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            A Little About Me
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Blending rigorous empirical research with refined aesthetic
            craftsmanship to build products people genuinely love to use.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
          {/* Left Column: Imagery & Workspace */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                alt="Designer Workspace"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17231F]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-sm font-bold">Studio & Workspace</div>
                  <div className="text-xs text-gray-300">
                    San Francisco, CA • Remote Worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Stamp */}
            {/* <div className="absolute -bottom-6 -right-6 bg-[#2C8C68] text-white p-6 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold">6+</span>
              <span className="text-xs font-medium uppercase tracking-wider text-emerald-100 mt-1">
                Years Crafting
              </span>
            </div> */}
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17231F] ">
              Hello! I&apos;m Istiak, a User Experience Designer obsessed with
              clarity, purpose, and flawless execution.
            </h3>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              My journey began in computer science before discovering my true
              calling in interface design and human psychology. This dual
              background allows me to collaborate seamlessly with engineering
              teams while keeping user empathy at the very core of every
              decision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#2C8C68]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C8C68]/10 text-[#2C8C68] flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17231F] mb-1">
                    Problem-First Approach
                  </h4>
                  <p className="text-xs text-gray-600">
                    Deep qualitative research before pushing a single pixel.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#2C8C68]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C8C68]/10 text-[#2C8C68] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17231F] mb-1">
                    Human-Centred Ethics
                  </h4>
                  <p className="text-xs text-gray-600">
                    Designing inclusive, accessible products for all abilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Design Systems",
                "UX Architecture",
                "Prototyping",
                "User Interviews",
                "Accessibility WCAG",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#2C8C68]/20 text-xs font-semibold text-[#2C8C68] shadow-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                download="My-Resume.pdf"
                className="inline-flex items-center gap-2 bg-[#2C8C68] hover:bg-[#237053] text-white px-7 py-3.5 rounded-xl font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download My Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
