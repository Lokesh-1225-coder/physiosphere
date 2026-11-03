"use client";

import React from "react";
import Image from "next/image";
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
  Calendar,
  CheckCircle2
} from "lucide-react";

interface HomePhysiotherapyProps {
  onOpenBooking: () => void;
}

export default function HomePhysiotherapy({ onOpenBooking }: HomePhysiotherapyProps) {
  const steps = [
    {
      title: "1. Initial Assessment",
      desc: "Our therapist examines muscle tone, posture, joint range, nerve reflexes, and pain levels in your home.",
      icon: ClipboardCheck
    },
    {
      title: "2. Medical History Review",
      desc: "We review discharge summaries, surgeon notes, X-rays, MRI scans, and current prescriptions.",
      icon: FileText
    },
    {
      title: "3. Personalized Care Plan",
      desc: "A step-by-step treatment plan mapped to your personal recovery timeline and daily functional goals.",
      icon: Activity
    },
    {
      title: "4. Guided Exercises",
      desc: "One-to-one manual supervision ensuring exact form, repetitions, and safety during every movement.",
      icon: Dumbbell
    },
    {
      title: "5. Mobility & Flexibility",
      desc: "Targeted stretching and passive range mobilization to relieve stiffness and restore natural joint glide.",
      icon: Footprints
    },
    {
      title: "6. Post-Surgical Care",
      desc: "Specialized bedside care for knee/hip replacements, fractures, and spinal surgeries to restore walking.",
      icon: Stethoscope
    },
    {
      title: "7. Progress Monitoring",
      desc: "Regular tracking of joint degrees, walking stamina, and pain scores to safely advance your exercises.",
      icon: TrendingUp
    },
    {
      title: "8. Home Exercise Program",
      desc: "Clear daily exercise instructions and family/caregiver positioning guidance for continuous progress.",
      icon: BookOpen
    }
  ];

  return (
    <section id="home-physiotherapy" className="py-14 sm:py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Doorstep Experience
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            How Home Physiotherapy Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            The complete clinical rehabilitation process delivered at your doorstep across Hyderabad.
          </p>
        </div>

        {/* 8-Step Grid with Cursor Highlighting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-[#f0f7fd] rounded-xl p-5 border border-blue-100 shadow-xs highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-blue-200 text-blue-600 flex items-center justify-center mb-3 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0a2540] mb-1.5">
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

        {/* Realistic Photography Callout: Senior Citizens & Post-Op */}
        <div className="bg-[#f0f7fd] border border-blue-200/80 rounded-2xl p-6 sm:p-10 shadow-xs highlight-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full">
                Specialized Home Patient Care
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a2540] leading-tight">
                Ideal for Seniors, Post-Operative Patients & Mobility Restrictions
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Navigating Hyderabad traffic, climbing steep clinic stairs, and waiting in crowded clinics can aggravate pain and cause immense fatigue. Home physiotherapy provides direct, dignified care at bedside.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative h-44 rounded-xl overflow-hidden border border-blue-200 shadow-sm">
                <Image
                  src="/images/sections/home-care.jpg"
                  alt="Physiotherapy treatment at home"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden border border-blue-200 shadow-sm">
                <Image
                  src="/images/sections/elderly-care.jpg"
                  alt="Compassionate elderly mobility therapy"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-xs highlight-card">
              <Heart className="w-6 h-6 text-rose-600 mb-2.5" />
              <h4 className="text-base font-bold text-[#0a2540] mb-1">Elderly Family Members</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gentle balance and mobility therapy in a familiar setting prevents dangerous falls and maintains senior independence.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-xs highlight-card">
              <Stethoscope className="w-6 h-6 text-blue-600 mb-2.5" />
              <h4 className="text-base font-bold text-[#0a2540] mb-1">Post-Surgical Bedside Care</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Immediate therapy after knee or hip replacement starts safely at bedside without risking car transit strain.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-xs highlight-card">
              <Accessibility className="w-6 h-6 text-emerald-600 mb-2.5" />
              <h4 className="text-base font-bold text-[#0a2540] mb-1">Mobility Difficulties</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Functional training tailored to your home environment—getting out of bed, walking hallways, and managing steps securely.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Portable diagnostic and therapeutic equipment is brought to every home visit.
            </span>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Home Assessment</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}