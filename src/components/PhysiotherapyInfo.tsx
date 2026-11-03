"use client";

import React from "react";
import {
  HelpCircle,
  Activity,
  Stethoscope,
  Dumbbell,
  HandMetal,
  ShieldAlert,
  ShieldPlus
} from "lucide-react";

export default function PhysiotherapyInfo() {
  const topics = [
    {
      title: "What is Physiotherapy?",
      desc: "Clinical healthcare dedicated to restoring movement, strength, and function after illness, injury, or surgery.",
      icon: HelpCircle
    },
    {
      title: "Movement & Mobility",
      desc: "Targeted stretching and joint mobilization to relieve stiffness and restore natural pain-free range of motion.",
      icon: Activity
    },
    {
      title: "Physical Assessment",
      desc: "In-depth initial examination of posture, joint flexibility, reflexes, and strength to identify the root cause of pain.",
      icon: Stethoscope
    },
    {
      title: "Therapeutic Exercises",
      desc: "Custom exercise plans to rebuild stabilizing muscles, correct muscle imbalances, and restore stamina.",
      icon: Dumbbell
    },
    {
      title: "Manual Therapy",
      desc: "Hands-on myofascial release, trigger point therapy, and joint mobilization for immediate acute relief.",
      icon: HandMetal
    },
    {
      title: "Pain Management",
      desc: "Non-invasive methods promoting natural healing and lasting relief without over-reliance on pain medications.",
      icon: ShieldAlert
    },
    {
      title: "Preventive Care",
      desc: "Conditioning to prevent recurring back strains, correct desk posture, and train balance for senior fall safety.",
      icon: ShieldPlus
    }
  ];

  return (
    <section id="what-is-physiotherapy" className="py-8 sm:py-14 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Clinical Guide
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            How Physiotherapy Helps You
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Professional evidence-based physical therapy restores strength, relieves pain, and improves mobility.
          </p>
        </div>

        {/* Clean Topic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {topics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-4 sm:p-5 border border-blue-100 shadow-2xs highlight-card flex flex-col justify-between ${
                  idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-2.5 text-blue-600">
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

      </div>
    </section>
  );
}