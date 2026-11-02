import React from "react";
import {
  Layers,
  Cpu,
  Compass,
  Layout,
  Smartphone,
  CheckSquare,
  Palette,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "UI Design",
      desc: "Creating pixel-perfect interfaces, visual style guides, and high-end aesthetic layouts.",
      icon: Palette,
    },
    {
      name: "UX Research",
      desc: "Conducting user interviews, empathy mapping, heatmaps, and usability analytics.",
      icon: Compass,
    },
    {
      name: "Wireframing",
      desc: "Translating abstract product requirements into structured low-to-mid fidelity blueprints.",
      icon: Layout,
    },
    {
      name: "Prototyping",
      desc: "Building interactive, motion-rich prototypes to validate user flows before coding.",
      icon: Cpu,
    },
    {
      name: "Design Systems",
      desc: "Configuring robust token libraries, component variants, and atomic UI architecture.",
      icon: Layers,
    },
    {
      name: "Interaction Design",
      desc: "Crafting micro-interactions, state transitions, and delightful tactile feedback.",
      icon: Smartphone,
    },
    {
      name: "Responsive Design",
      desc: "Ensuring fluid multi-device adaptability across desktop, tablet, and mobile views.",
      icon: CheckSquare,
    },
    {
      name: "Usability Testing",
      desc: "Validating hypothesis accuracy through moderated and unmoderated user testing sessions.",
      icon: Wrench,
    },
  ];

  const tools = [
    { name: "Figma", level: "Expert" },
    { name: "Adobe Photoshop", level: "Advanced" },
    { name: "Adobe Illustrator", level: "Advanced" },
    { name: "FigJam", level: "Expert" },
    { name: "Adobe After Effect", level: "Advanced" },
    { name: "Adobe Premier Pro", level: "Advanced" },
  ];

  return (
    <section className="py-24 bg-[#F2F8F3] text-[#17231F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C8C68]/10 text-[#2C8C68] text-xs font-semibold mb-4">
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Comprehensive proficiency across the entire product lifecycle,
            powered by industry-standard design tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-[#2C8C68]/15 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#2C8C68]/10 text-[#2C8C68] flex items-center justify-center mb-5 group-hover:bg-[#2C8C68] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#17231F] mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2C8C68]/20 shadow-lg">
          <h3 className="text-xl font-bold text-[#17231F] mb-6 text-center">
            Software & Design Toolchain
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#F7F9F7] p-4 rounded-2xl border border-gray-200 text-center flex flex-col items-center justify-center"
              >
                <span className="font-bold text-[#17231F] text-sm">
                  {tool.name}
                </span>
                <span className="text-xs text-[#2C8C68] font-semibold mt-1">
                  {tool.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
