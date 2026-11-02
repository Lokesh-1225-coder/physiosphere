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
      title: "What Physiotherapy Means",
      desc: "Physiotherapy (physical therapy) is a clinical healthcare profession focused on restoring and sustaining natural bodily movement, functional strength, and physical well-being throughout life.",
      icon: HelpCircle,
      accent: "border-blue-200 bg-blue-50/50 text-blue-700"
    },
    {
      title: "Improving Movement & Mobility",
      desc: "Whether stiffness is caused by arthritis, sitting for long work hours, or surgery, physiotherapy restores joint flexibility, lubricates tissues, and trains muscles to move smoothly without pain.",
      icon: Activity,
      accent: "border-emerald-200 bg-emerald-50/50 text-emerald-700"
    },
    {
      title: "How Physiotherapists Assess Conditions",
      desc: "During your first session, the therapist examines your posture, joint range, nerve pathways, balance, and muscle strength to pinpoint the true root cause rather than just treating symptoms.",
      icon: Stethoscope,
      accent: "border-indigo-200 bg-indigo-50/50 text-indigo-700"
    },
    {
      title: "The Role of Therapeutic Exercises",
      desc: "Specially calibrated stretches, resistance movements, and core drills rebuild weakened fibers, offload stressed joints, and retrain the body to handle daily loads safely.",
      icon: Dumbbell,
      accent: "border-teal-200 bg-teal-50/50 text-teal-700"
    },
    {
      title: "Manual Therapy & Mobilization",
      desc: "Hands-on techniques including soft-tissue release, passive joint glide, and trigger point manipulation immediately relieve muscle spasms and increase tight joint mobility.",
      icon: HandMetal,
      accent: "border-amber-200 bg-amber-50/50 text-amber-700"
    },
    {
      title: "Pain Management & Injury Recovery",
      desc: "Using scientific biomechanics and evidence-based techniques, physiotherapy reduces chronic inflammation, speeds tissue repair, and enables drug-free pain relief.",
      icon: ShieldAlert,
      accent: "border-sky-200 bg-sky-50/50 text-sky-700"
    },
    {
      title: "Preventive Physiotherapy",
      desc: "Proactive conditioning prevents injuries, halts progressive joint degeneration, enhances ergonomic sitting habits, and protects senior citizens against dangerous slips and falls.",
      icon: ShieldPlus,
      accent: "border-violet-200 bg-violet-50/50 text-violet-700"
    }
  ];

  return (
    <section id="what-is-physiotherapy" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Patient Education Guide
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Understanding Physiotherapy & How It Heals You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Physiotherapy is not just massage or exercise—it is science-backed medical rehabilitation designed to restore your independence and active lifestyle.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Informational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Summary Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Not sure if physiotherapy is suitable for your condition?
            </h4>
            <p className="text-sm text-slate-600">
              Speak directly with our physiotherapists. We review your symptoms and advise the best recovery pathway.
            </p>
          </div>
          <a
            href="tel:7675069960"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0284c7] text-white font-bold text-xs transition"
          >
            Ask a Physiotherapist: 7675069960
          </a>
        </div>

      </div>
    </section>
  );
}
