"use client";

import React from "react";
import {
  Users,
  MapPin,
  ClipboardList,
  Award,
  CalendarCheck,
  Heart,
  Headphones,
  CheckCircle2
} from "lucide-react";

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const points = [
    {
      title: "Team of 8 Physiotherapists",
      desc: "Coordinated network of therapists across Hyderabad for timely doorstep scheduling.",
      icon: Users
    },
    {
      title: "Home Physiotherapy Across Hyderabad",
      desc: "Comprehensive care in your living room, avoiding painful transit and clinic waits.",
      icon: MapPin
    },
    {
      title: "Personalized Treatment Plans",
      desc: "Rehabilitation tailored around your specific medical diagnosis and daily routine.",
      icon: ClipboardList
    },
    {
      title: "Experienced Physiotherapy Professionals",
      desc: "Led by Dr. Venu (4+ years, 600+ patients treated) with proven clinical outcomes.",
      icon: Award
    },
    {
      title: "Convenient Appointment Booking",
      desc: "Hassle-free booking through website, WhatsApp, or direct call with fast confirmation.",
      icon: CalendarCheck
    },
    {
      title: "Patient-Centred Care",
      desc: "Empathetic bedside approach with session pacing customized to your comfort.",
      icon: Heart
    },
    {
      title: "Dedicated Support",
      desc: "Continuous exercise guidance, posture coaching, and family caregiver education.",
      icon: Headphones
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Why PhysioSphere
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Choose PhysioSphere for Home Physiotherapy?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Reliable clinical rehabilitation delivered directly to your home with patient-first dedication.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Clinical Highlights Box */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Clinical Standards at Home
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We bring clinical equipment, manual techniques, and active exercise monitoring directly to your home, so you recover safely without the fatigue of travel.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Therapist Attention:</span>
                <span className="font-semibold text-slate-900">100% Dedicated 1-on-1</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Service Coverage:</span>
                <span className="font-semibold text-slate-900">Across Hyderabad</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Active Team:</span>
                <span className="font-semibold text-slate-900">8 Physiotherapists</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500">Booking Coordination:</span>
                <span className="font-semibold text-emerald-600">Immediate Phone / WhatsApp</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition cursor-pointer"
              >
                Request an Appointment
              </button>
            </div>
          </div>

          {/* Right Column: 7 Points List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between ${
                    idx === 6 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="w-8 h-8 rounded-md bg-slate-100 text-blue-600 flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
