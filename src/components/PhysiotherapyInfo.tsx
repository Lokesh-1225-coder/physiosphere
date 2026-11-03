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
      desc: "Physiotherapy is an evidence-based clinical healthcare profession dedicated to restoring movement, strength, and physical function after illness, injury, or surgery.",
      icon: HelpCircle
    },
    {
      title: "Improving Movement & Mobility",
      desc: "Through targeted mobilization and stretching, physiotherapy reduces joint stiffness, restores natural range of motion, and helps you walk and move pain-free.",
      icon: Activity
    },
    {
      title: "Physical Assessment",
      desc: "A thorough initial examination checks posture, spinal alignment, joint flexibility, nerve response, and muscle strength to identify the root cause of pain.",
      icon: Stethoscope
    },
    {
      title: "Therapeutic Exercises",
      desc: "Custom exercise prescriptions rebuild stabilizing muscles, correct muscle imbalances, and restore physical endurance without overloading joints.",
      icon: Dumbbell
    },
    {
      title: "Manual Therapy & Mobilization",
      desc: "Hands-on techniques including soft-tissue release, trigger-point therapy, and gentle joint mobilization relieve acute spasms and improve tissue mobility.",
      icon: HandMetal
    },
    {
      title: "Pain Management & Recovery",
      desc: "Non-invasive methods promote natural healing, reduce inflammation, and help patients achieve lasting pain relief without over-reliance on medication.",
      icon: ShieldAlert
    },
    {
      title: "Preventive Physiotherapy",
      desc: "Targeted conditioning prevents recurring back strain, corrects desk posture, and trains balance to protect seniors against slips and falls.",
      icon: ShieldPlus
    }
  ];

  return (
    <section id="what-is-physiotherapy" className="py-14 sm:py-20 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Educational Guide
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            What is Physiotherapy & How Does It Help?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A clear explanation of how professional physical therapy restores strength, relieves pain, and improves mobility.
          </p>
        </div>

        {/* Clean Topic Grid with Cursor Highlighting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-6 border border-blue-100/90 shadow-xs highlight-card flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3.5 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a2540] mb-2">
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