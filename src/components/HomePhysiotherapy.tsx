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
  Shield,
  Accessibility
} from "lucide-react";

interface HomePhysiotherapyProps {
  onOpenBooking: () => void;
}

export default function HomePhysiotherapy({ onOpenBooking }: HomePhysiotherapyProps) {
  const steps = [
    {
      title: "1. Initial Patient Assessment",
      desc: "Our therapist arrives at your doorstep with diagnostic tools to test muscle tone, posture, joint range, reflexes, and pain thresholds.",
      icon: ClipboardCheck
    },
    {
      title: "2. Medical History & Review",
      desc: "We review your surgeon's discharge summary, X-rays, MRI scans, medications, and previous treatments to ensure 100% safe care.",
      icon: FileText
    },
    {
      title: "3. Personalized Treatment Plans",
      desc: "A custom protocol is mapped out targeting your specific recovery timeline, lifestyle routines, and individual mobility goals.",
      icon: Activity
    },
    {
      title: "4. Guided Therapeutic Exercises",
      desc: "One-to-one manual supervision ensuring exact form, rep counts, and joint alignment without risking strain or re-injury.",
      icon: Dumbbell
    },
    {
      title: "5. Mobility & Flexibility Training",
      desc: "Targeted stretching, passive range mobilization, and neuromuscular re-education to overcome stubborn stiffness and joint freezing.",
      icon: Footprints
    },
    {
      title: "6. Post-Surgical Rehabilitation",
      desc: "Specialized bedside protocols for knee/hip replacements, spinal surgeries, and fractures to reduce edema and re-establish walking.",
      icon: Stethoscope
    },
    {
      title: "7. Continuous Progress Monitoring",
      desc: "Session-by-session evaluation of joint degrees, walking stamina, and pain reduction to steadily advance your exercises.",
      icon: TrendingUp
    },
    {
      title: "8. Home Exercise & Ergonomics",
      desc: "Clear daily home regimens, sitting posture modifications, and family/caregiver instructions for 24/7 recovery continuity.",
      icon: BookOpen
    }
  ];

  return (
    <section id="home-physiotherapy" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Doorstep Care Protocol
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Complete Home Physiotherapy Experience
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Experience high-quality clinical rehabilitation without stepping outside your front door.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-[#003b73] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 text-[#0284c7]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Focus on Elderly & Post-Op Patients */}
        <div className="rounded-3xl bg-gradient-to-br from-[#002b54] to-[#0284c7] text-white p-8 sm:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Shield className="w-4 h-4" /> Why Home Care Matters Most
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
              Designed Specially for Senior Citizens, Post-Operative Patients & Mobility Challenges
            </h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
              Traveling through city traffic, climbing clinic stairs, and waiting in crowded lobbies can be excruciating and dangerous for individuals dealing with acute surgical pain or severe frailty. Home physiotherapy completely eliminates these hurdles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-900">
              {/* Card 1 */}
              <div className="bg-white/95 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <Heart className="w-8 h-8 text-rose-500 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  Elderly Family Members
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Gentle, respectful therapy in their familiar environment minimizes confusion, reduces fall risks, and keeps seniors comfortable.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/95 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <Stethoscope className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  Post-Surgical Recovery
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Crucial bedside support after knee/hip replacement, spinal fixation, or cardiac procedures without risking surgical wound strain.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/95 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <Accessibility className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  Mobility Impairments
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rehabilitation tailored to actual household obstacles: transitioning safely from your own bed to wheelchair or walking in the hallway.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-blue-200">
                PhysioSphere therapists bring sanitized portable equipment for every session.
              </span>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow cursor-pointer transition"
              >
                Schedule Doorstep Assessment
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
