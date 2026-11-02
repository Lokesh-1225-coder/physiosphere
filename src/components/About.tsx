"use client";

import React from "react";
import { Target, Compass, HeartHandshake, Home, CheckCircle2, ShieldCheck } from "lucide-react";

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const pillars = [
    {
      title: "Our Mission",
      desc: "To deliver accessible, high-standard physiotherapy care to patients across Hyderabad in their homes, eliminating stressful transit while ensuring clinically proven recovery.",
      icon: Target,
      color: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "Our Approach",
      desc: "Comprehensive root-cause diagnosis followed by active therapeutic exercises, joint mobilizations, ergonomic correction, and continuous progress evaluation.",
      icon: Compass,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      title: "Personalized Treatment",
      desc: "Every patient's pain, body mechanics, and recovery goals are unique. We create customized rehabilitation plans tailored specifically to your daily lifestyle.",
      icon: HeartHandshake,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      title: "Home-based Rehabilitation",
      desc: "Practicing therapy in your living space allows us to optimize your bed height, seating, and stairs, empowering you with sustainable long-term self-care.",
      icon: Home,
      color: "text-teal-600 bg-teal-50 border-teal-100"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> About PhysioSphere
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Compassionate, Professional Care Dedicated to Your Mobility
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Narrative Positioning Block */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 mb-14 shadow-xs">
          <div className="max-w-4xl mx-auto space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed text-center sm:text-left">
            <p className="font-medium text-slate-900 text-lg sm:text-xl">
              At <span className="text-[#003b73] font-bold">PhysioSphere</span>, we believe quality physiotherapy should be accessible to everyone. Our team of experienced physiotherapists brings personalized rehabilitation and professional care directly to your home.
            </p>
            <p>
              With a team of <strong className="text-slate-900 font-bold">8 physiotherapists spread across Hyderabad</strong>, we aim to make recovery convenient, comfortable and accessible.
            </p>
            <p>
              Whether you are experiencing chronic pain, recovering from surgery, dealing with sports injuries, or helping an elderly family member regain mobility, our team is committed to supporting your recovery journey.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm font-semibold text-slate-800">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Doorstep Appointments
              </span>
              <span className="inline-flex items-center gap-1.5 text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Evidence-Based Modalities
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-slate-600" /> Patient-Centered Pacing
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Callout CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#003b73] hover:bg-[#0284c7] text-white text-sm font-bold shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <span>Consult Our Physiotherapists</span>
          </button>
        </div>

      </div>
    </section>
  );
}
