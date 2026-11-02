"use client";

import React, { useState } from "react";
import { projects } from "../data/projects";
import { ArrowUpRight, X, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-24 bg-[#F7F9F7] text-[#17231F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C8C68]/10 text-[#2C8C68] text-xs font-semibold mb-4">
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mt-4 md:mt-0 text-sm sm:text-base">
            Explore recent end-to-end product design case studies showcasing
            research methodologies, wireframes, systems, and measurable
            outcomes.
          </p>
        </div>

        {/* Asymmetric / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col ${
                index % 3 === 0 ? "md:col-span-2 md:flex-row" : ""
              }`}
            >
              {/* Project Image Thumbnail */}
              <div
                className={`relative overflow-hidden ${index % 3 === 0 ? "md:w-1/2 h-72 md:h-auto" : "h-72 w-full"}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#17231F]/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-[#17231F]/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`p-8 flex flex-col justify-between ${index % 3 === 0 ? "md:w-1/2" : "w-full"}`}
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F2F8F3] text-[#2C8C68]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-[#17231F] group-hover:text-[#2C8C68] transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-[#2C8C68] group-hover:underline">
                    View Case Study
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F2F8F3] group-hover:bg-[#2C8C68] text-[#2C8C68] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-8 py-6 border-b border-gray-100 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold text-[#2C8C68] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-extrabold text-[#17231F] mt-1">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto space-y-8">
              <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#F2F8F3] border border-[#2C8C68]/20">
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    Client
                  </div>
                  <div className="text-sm font-bold text-[#17231F] mt-1">
                    {selectedProject.client}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    Timeline
                  </div>
                  <div className="text-sm font-bold text-[#17231F] mt-1">
                    {selectedProject.timeline}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    Role
                  </div>
                  <div className="text-sm font-bold text-[#17231F] mt-1">
                    {selectedProject.role}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    Category
                  </div>
                  <div className="text-sm font-bold text-[#17231F] mt-1">
                    {selectedProject.category.split("•")[0]}
                  </div>
                </div>
              </div>

              {/* Case Study Sections */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#17231F] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2C8C68]"></span>
                    The Problem
                  </h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#17231F] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2C8C68]"></span>
                    User Research & Insights
                  </h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {selectedProject.research}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#17231F] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2C8C68]"></span>
                    Design Process & Architecture
                  </h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {selectedProject.process}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#17231F] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2C8C68]"></span>
                    The Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#17231F] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2C8C68]"></span>
                    Key Outcome & Impact
                  </h3>
                  <div className="bg-[#2C8C68]/10 border border-[#2C8C68]/30 p-4 rounded-xl text-[#17231F] font-medium flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2C8C68] shrink-0 mt-0.5" />
                    <span>{selectedProject.outcome}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-end gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="bg-[#2C8C68] hover:bg-[#237053] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-md flex items-center gap-2"
              >
                <span>Discuss Similar Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
