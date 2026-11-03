"use client";

import React from "react";
import { Target, Compass, HeartHandshake, Home, Calendar } from "lucide-react";

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const pillars = [
    {
      title: "Our Mission",
      desc: "To deliver accessible, high-standard physiotherapy directly to patients across Hyderabad without travel stress.",
      icon: Target
    },
    {
      title: "Our Approach",
      desc: "Root-cause assessment followed by active exercise therapy, joint mobilization, and progress tracking.",
      icon: Compass
    },
    {
      title: "Personalized Care",
      desc: "Customized exercise and rehabilitation plans tailored to your specific condition and recovery pace.",
      icon: HeartHandshake
    },
    {
      title: "Home Rehabilitation",
      desc: "Therapy in your familiar environment using your actual stairs, chairs, and bed for practical independence.",
      icon: Home
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-14 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            About PhysioSphere
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Quality Physiotherapy at Your Doorstep
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            With a team of 8 licensed physiotherapists spread across Hyderabad, PhysioSphere makes rehabilitation accessible, convenient, and personalized for every patient.
          </p>
        </div>

        {/* 4 Pillars Grid - Single-column on mobile, 4-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#f0f7fd] rounded-xl p-4 sm:p-5 border border-blue-100 shadow-2xs highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-white border border-blue-200 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0a2540] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile-Friendly Quick CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-center sm:text-left">
          <span className="text-xs sm:text-sm text-slate-700 font-medium">
            Ready to start your home recovery journey?
          </span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-2xs transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
}