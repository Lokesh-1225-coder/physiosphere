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
  Accessibility
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
    <section id="home-physiotherapy" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Doorstep Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How Home Physiotherapy Works
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            The complete clinical rehabilitation process delivered at your doorstep across Hyderabad.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Value Patients Callout: Senior Citizens & Post-Op */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
          <div className="max-w-3xl mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Ideal for Seniors, Post-Operative Patients & Mobility Challenges
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Navigating traffic, climbing clinic stairs, and sitting in crowded waiting rooms can be painful and exhausting for individuals dealing with surgical recovery or frailty. Home care eliminates these barriers entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <Heart className="w-5 h-5 text-rose-600 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 mb-1">Elderly Family Members</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gentle balance and mobility therapy in a familiar setting prevents falls and maintains senior independence.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <Stethoscope className="w-5 h-5 text-blue-600 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 mb-1">Post-Surgical Care</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bedside therapy after joint replacement or spine surgery starts safely without risking car transfer strain.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <Accessibility className="w-5 h-5 text-emerald-600 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 mb-1">Mobility Difficulties</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Training tailored to your home environment—getting out of bed, walking hallways, and managing steps securely.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Portable diagnostic and therapeutic equipment is brought to every home visit.
            </span>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition cursor-pointer"
            >
              Book Home Assessment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
