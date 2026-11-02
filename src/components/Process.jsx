import React from 'react';
import { Search, FileText, Lightbulb, Layout, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover & Research",
      desc: "Conducting stakeholder interviews, user surveys, competitor audits, and behavioral data analysis.",
      icon: Search
    },
    {
      num: "02",
      title: "Define the Problem",
      desc: "Synthesizing research data into explicit user personas, journey maps, and architectural requirements.",
      icon: FileText
    },
    {
      num: "03",
      title: "Ideate & Explore",
      desc: "Sketching rapid wireframes, exploring multiple layout hypotheses, and establishing information hierarchy.",
      icon: Lightbulb
    },
    {
      num: "04",
      title: "Design & Prototype",
      desc: "Creating high-fidelity UI components, interactive prototypes, and scalable design token systems in Figma.",
      icon: Layout
    },
    {
      num: "05",
      title: "Test & Improve",
      desc: "Running usability testing sessions, accessibility audits (WCAG), and continuous post-launch refinement.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 bg-[#17231F] text-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2C8C68_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C8C68]/20 text-[#2C8C68] text-xs font-semibold mb-4">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            My Design Process
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            A structured, repeatable framework that transforms complex user problems into elegant, intuitive digital solutions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 relative flex flex-col justify-between hover:border-[#2C8C68] transition-all duration-300 group hover:-translate-y-1 shadow-lg backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#2C8C68]/20 text-[#2C8C68] flex items-center justify-center group-hover:bg-[#2C8C68] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-white/20 group-hover:text-[#2C8C68]/40 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-semibold text-[#2C8C68]">
                  <span>Phase {index + 1} of 5</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
