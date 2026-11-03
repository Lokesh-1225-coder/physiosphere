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
  Calendar
} from "lucide-react";

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const points = [
    { title: "Team of 8 Physiotherapists", desc: "Zonal coverage for fast doorstep appointment scheduling.", icon: Users },
    { title: "Home Physiotherapy Across Hyderabad", desc: "Full rehabilitation in your living room, avoiding travel fatigue.", icon: MapPin },
    { title: "Personalized Treatment Plans", desc: "Therapy customized around your medical diagnosis and daily routine.", icon: ClipboardList },
    { title: "Experienced Professionals", desc: "Led by Dr. Venu (4+ years, 600+ patients treated) with proven results.", icon: Award },
    { title: "Convenient Booking", desc: "Instant booking via website, WhatsApp, or direct call.", icon: CalendarCheck },
    { title: "Patient-Centred Care", desc: "Gentle bedside approach tailored to your comfort and tolerance.", icon: Heart },
    { title: "Continuous Guidance", desc: "Clear home exercise programs and caregiver positioning guidance.", icon: Headphones }
  ];

  return (
    <section id="why-choose-us" className="py-8 sm:py-14 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Why PhysioSphere
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Why Choose Us for Home Physiotherapy?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Reliable clinical rehabilitation delivered directly to your doorstep with patient-first dedication.
          </p>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Highlights Box */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-blue-100 p-4 sm:p-6 space-y-4 shadow-2xs highlight-card">
            <h3 className="text-base sm:text-lg font-bold text-[#0a2540]">
              Clinical Standards at Home
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We bring clinical equipment, manual techniques, and exercise supervision to your home, ensuring safe recovery without the pain of transit.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Therapist Attention:</span>
                <span className="font-bold text-[#0a2540]">100% Dedicated 1-on-1</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Service Coverage:</span>
                <span className="font-bold text-[#0a2540]">Across Hyderabad</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Active Team:</span>
                <span className="font-bold text-[#0a2540]">8 Physiotherapists</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-medium">Coordination:</span>
                <span className="font-bold text-emerald-600">Immediate Phone / WhatsApp</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-2xs transition cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>
          </div>

          {/* 7 Points Grid - 1-col on mobile, 2-col on desktop */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`bg-white p-3.5 sm:p-4 rounded-xl border border-blue-100 shadow-2xs highlight-card flex flex-col justify-between ${
                    idx === 6 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0a2540] mb-0.5">
                      {p.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
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