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
  CheckCircle2,
  Calendar
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
    <section id="why-choose-us" className="py-14 sm:py-20 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Why PhysioSphere
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Why Choose PhysioSphere for Home Physiotherapy?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Reliable clinical rehabilitation delivered directly to your home with patient-first dedication.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clinical Highlights Box with Cursor Highlight */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-blue-100/90 p-6 sm:p-8 space-y-5 shadow-xs highlight-card">
            <h3 className="text-lg font-bold text-[#0a2540]">
              Clinical Standards at Home
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We bring clinical equipment, manual techniques, and active exercise monitoring directly to your home, so you recover safely without the fatigue of travel.
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Therapist Attention:</span>
                <span className="font-bold text-[#0a2540]">100% Dedicated 1-on-1</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Service Coverage:</span>
                <span className="font-bold text-[#0a2540]">Across Hyderabad</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Active Team:</span>
                <span className="font-bold text-[#0a2540]">8 Licensed Physiotherapists</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-medium">Booking Coordination:</span>
                <span className="font-bold text-emerald-600">Immediate Phone / WhatsApp</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request an Appointment</span>
              </button>
            </div>
          </div>

          {/* Right Column: 7 Points List with Cursor Highlight */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`bg-white p-5 rounded-xl border border-blue-100 shadow-xs highlight-card flex flex-col justify-between ${
                    idx === 6 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0a2540] mb-1.5">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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