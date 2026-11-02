"use client";

import React from "react";
import Image from "next/image";
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
      desc: "A coordinated network of licensed therapists enabling prompt scheduling across Hyderabad.",
      icon: Users
    },
    {
      title: "Home Physiotherapy Across Hyderabad",
      desc: "Doorstep service in your living room, sparing you from painful traffic and hospital queues.",
      icon: MapPin
    },
    {
      title: "Personalized Treatment Plans",
      desc: "Tailored recovery routines designed around your distinct clinical diagnosis and lifestyle.",
      icon: ClipboardList
    },
    {
      title: "Experienced Physiotherapy Professionals",
      desc: "Led by Dr. Venu (4+ years, 600+ patients treated) with deep expertise in orthopedic and neuro care.",
      icon: Award
    },
    {
      title: "Convenient Appointment Booking",
      desc: "Effortless scheduling via website, WhatsApp, or direct call with zero booking hassles.",
      icon: CalendarCheck
    },
    {
      title: "Patient-Centred Care",
      desc: "Empathetic bedside demeanor, respectful communication, and pacing suited to your comfort.",
      icon: Heart
    },
    {
      title: "Dedicated Support",
      desc: "Ongoing guidance between sessions, posture correction, and exercise adherence support.",
      icon: Headphones
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Why Patients Trust Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose PhysioSphere for Home Care?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We bridge the gap between clinical excellence and home comfort for families across Hyderabad.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Two-Column Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Healthcare Graphic Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#003b73] via-[#0284c7] to-emerald-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <CheckCircle2 className="w-9 h-9 text-emerald-300" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  High-Standard Clinical Care Delivered with Comfort
                </h3>

                <p className="text-sm text-blue-100 leading-relaxed">
                  We bring therapy directly to where recovery feels most natural. Recover faster with 1-on-1 dedicated attention and customized home exercises.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span>Clinical Supervision</span>
                    <span className="font-bold text-emerald-300">100% One-to-One</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Active Team</span>
                    <span className="font-bold text-white">8 Physiotherapists</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Primary Location</span>
                    <span className="font-bold text-white">Hyderabad, Telangana</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#003b73] hover:bg-slate-100 font-bold text-xs tracking-wide transition shadow cursor-pointer text-center"
                >
                  Book Your Home Assessment Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Key Distinct Reasons */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003b73] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#0284c7]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {point.desc}
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
