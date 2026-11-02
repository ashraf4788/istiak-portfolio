"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UI/UX Design",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/Istiak-Ashraf/pfbid02YjqNoXwWbzdyCH3JheZRz1gp8uGveVZwDKcQbAaoQDh4Nm2hJ576T1hm8vshaJtGl/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mdistiakashraf",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/istiakashraf100/moodboards",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/design/AJWU8u7JJ0kZsHjdxdnI7l/All-projects?node-id=0-1&t=r8wU6rZtpXMWN7te-1",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#17231F] text-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2C8C68_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C8C68]/20 text-[#2C8C68] text-xs font-semibold">
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Have a Project in Mind? Let&apos;s Create Something Meaningful.
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Whether you need a full SaaS design system, a mobile app
              interface, or a strategic UX audit, I&apos;m ready to help bring
              your vision to life.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-[#2C8C68]/20 text-[#2C8C68] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">
                    Direct Email
                  </div>
                  <a
                    href="mailto:istiakashraf20@gmail.com"
                    className="text-sm font-bold text-white hover:text-[#2C8C68] transition-colors"
                  >
                    istiakashraf20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-[#2C8C68]/20 text-[#2C8C68] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">
                    Location
                  </div>
                  <div className="text-sm font-bold text-white">
                    Mirpur 6, D Block, Dhaka-1216
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#2C8C68] text-gray-300 hover:text-white text-xs font-semibold transition-colors border border-white/10"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#1f302a] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-[#2C8C68]/20 text-[#2C8C68] rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 text-sm max-w-md mb-8">
                  Thank you for reaching out. I will review your project details
                  and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "UI/UX Design",
                      message: "",
                    });
                  }}
                  className="bg-[#2C8C68] hover:bg-[#237053] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Start a Project
                  </h3>
                  <p className="text-gray-300 text-xs">
                    Fill out the form below and I&apos;ll schedule an
                    introductory call.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#2C8C68] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#2C8C68] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-[#17231F] border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#2C8C68] transition-colors"
                  >
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Mobile App Design">Mobile App Design</option>
                    <option value="Landing Page Design">
                      Landing Page Design
                    </option>
                    <option value="UX Audit">UX Audit</option>
                    <option value="Design Systems">Design Systems</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your product goals, timeline, and scope..."
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#2C8C68] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2C8C68] hover:bg-[#237053] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
