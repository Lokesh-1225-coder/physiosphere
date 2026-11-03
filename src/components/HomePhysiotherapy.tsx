"use client";

import React from "react";
import {
  ClipboardCheck,
  FileText,
  Activity,
  Dumbbell,
  Footprints,
  Stethoscope,
  TrendingUp,
  BookOpen,
  Heart,
  Accessibility,
  Calendar
} from "lucide-react";

interface HomePhysiotherapyProps {
  onOpenBooking: () => void;
}

export default function HomePhysiotherapy({ onOpenBooking }: HomePhysiotherapyProps) {
  const steps = [
    { title: "1. Assessment", desc: "Examination of muscle tone, posture, joint range, and pain levels.", icon: ClipboardCheck },
    { title: "2. Medical Review", desc: "Review of doctor notes, X-rays, MRI scans, and past prescriptions.", icon: FileText },
    { title: "3. Care Plan", desc: "Structured rehabilitation plan mapped to your personal recovery goals.", icon: Activity },
    { title: "4. Guided Exercises", desc: "1-on-1 manual supervision ensuring proper form and safety.", icon: Dumbbell },
    { title: "5. Mobility Drills", desc: "Passive and active stretches to restore natural joint glide.", icon: Footprints },
    { title: "6. Post-Surgical Care", desc: "Bedside mobility protocols after knee/hip replacement and fractures.", icon: Stethoscope },
    { title: "7. Progress Tracking", desc: "Regular tracking of range of motion, pain scores, and walking stamina.", icon: TrendingUp },
    { title: "8. Home Program", desc: "Clear daily exercises and caregiver instructions for ongoing progress.", icon: BookOpen }
  ];

  return (
    <section id="home-physiotherapy" className="py-8 sm:py-14 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Doorstep Care
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            How Home Physiotherapy Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Clinical physical rehabilitation delivered in the comfort of your home across Hyderabad.
          </p>
        </div>

        {/* 8-Step Grid: 2-col on mobile, 4-col on desktop for high density */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-[#f0f7fd] rounded-xl p-3 sm:p-4 border border-blue-100 shadow-2xs highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-blue-200 text-blue-600 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0a2540] mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal High-Value Patients Box */}
        <div className="bg-[#f0f7fd] border border-blue-200/80 rounded-xl p-4 sm:p-6 shadow-2xs">
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-bold text-[#0a2540]">
              Ideal for Seniors, Post-Operative Patients & Limited Mobility
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Avoid traffic, difficult car transfers, and clinical waiting rooms. We bring all essential equipment to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3.5 rounded-lg border border-blue-100">
              <Heart className="w-4 h-4 text-rose-600 mb-1.5" />
              <h4 className="text-xs sm:text-sm font-bold text-[#0a2540]">Elderly Mobility</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Gentle balance and walking therapy to prevent falls.</p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-blue-100">
              <Stethoscope className="w-4 h-4 text-blue-600 mb-1.5" />
              <h4 className="text-xs sm:text-sm font-bold text-[#0a2540]">Post-Surgery Rehab</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Safe bedside exercise after knee, hip, or spine surgery.</p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-blue-100">
              <Accessibility className="w-4 h-4 text-emerald-600 mb-1.5" />
              <h4 className="text-xs sm:text-sm font-bold text-[#0a2540]">Movement Recovery</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Bed-to-chair transfers and secure indoor walking drills.</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-blue-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-600 text-center sm:text-left">
              Sessions scheduled based on your convenience across Hyderabad.
            </span>
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-2xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Home Visit</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}