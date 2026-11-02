import React from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
} from "lucide-react";

import profileImg from "../../public/profile-img.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#17231F] text-white pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Background ambient glow and decorative grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2C8C68_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#2C8C68]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#2C8C68]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C8C68]/20 border border-[#2C8C68]/40 text-[#2C8C68] text-xs font-semibold mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#2C8C68] animate-ping"></span>
            <span>Available for Select Projects & Roles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Test{" "}
            <span className="text-[#2C8C68] underline decoration-[#2C8C68]/30 decoration-wavy underline-offset-8">
              Meaningful
            </span>{" "}
            Digital Products.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mb-8">
            3–4 years of hands on professional experience in UI/UX design.
            Proven experience designing websites, SaaS products, dashboards, and
            mobile applications. Strong proficiency in Figma, including Auto
            Layout, components, variants, and prototyping.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2C8C68] hover:bg-[#237053] text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl text-base font-semibold transition-all backdrop-blur-md"
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10 w-full">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C8C68]">
                4+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C8C68]">
                35+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                Products Shipped
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C8C68]">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Creative Visual Card / Portrait */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Decorative background frame */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2C8C68] to-emerald-400 opacity-30 blur-lg"></div>

            <div className="relative bg-[#1f302a] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 shadow-inner">
                <Image
                  src={profileImg}
                  alt="Alex Vance - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17231F] via-transparent to-transparent opacity-60"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#17231F]/90 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2C8C68]/20 flex items-center justify-center text-[#2C8C68]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      User Experience Designer
                    </div>
                    <div className="text-xs text-gray-300">
                      Figma • Tokens • Scalable UI
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick info tags */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2C8C68]" />
                  <span className="text-xs font-medium text-gray-200">
                    User-Centred Focus
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#2C8C68]" />
                  <span className="text-xs font-medium text-gray-200">
                    Problem Solving UI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
