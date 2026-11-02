import React from "react";
import {
  Layout,
  Globe,
  Smartphone,
  Monitor,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Complete end-to-end product design from initial research and wireframes to polished high-fidelity interfaces.",
      icon: Layout,
    },
    {
      title: "Website Design",
      desc: "Stunning, high-converting marketing websites and web applications built for optimal user engagement.",
      icon: Globe,
    },
    {
      title: "Mobile App Design",
      desc: "Intuitive iOS and Android app interfaces optimized for touch gestures, accessibility, and high retention.",
      icon: Smartphone,
    },
    {
      title: "Landing Page Design",
      desc: "High-impact landing pages engineered to drive user acquisition, sign-ups, and conversion goals.",
      icon: Monitor,
    },
    {
      title: "Prototype",
      desc: "Creating interactive prototypes to visualize user flows, test design concepts, and validate ideas before development.",
      icon: ShieldCheck,
    },
    {
      title: "Design Systems",
      desc: "Scalable component libraries, design tokens, and documentation to unify your brand and accelerate engineering.",
      icon: Layers,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F7F9F7] text-[#17231F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C8C68]/10 text-[#2C8C68] text-xs font-semibold mb-4">
            <span>Professional Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Services I Provide
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Tailored design solutions designed to elevate your brand, delight
            users, and drive measurable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#2C8C68]/10 text-[#2C8C68] flex items-center justify-center mb-6 group-hover:bg-[#2C8C68] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#17231F] mb-3 group-hover:text-[#2C8C68] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#2C8C68] flex items-center gap-1.5 group-hover:underline"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs font-semibold text-gray-400">
                    Custom Scope
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
