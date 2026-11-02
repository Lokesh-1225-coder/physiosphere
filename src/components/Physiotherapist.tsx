"use client";

import React from "react";
import {
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  Stethoscope,
  HeartHandshake,
  MapPin,
  Clock
} from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface PhysiotherapistProps {
  onOpenBooking: () => void;
}

export default function Physiotherapist({ onOpenBooking }: PhysiotherapistProps) {
  const { doctorVenu, teamCount } = BRAND_INFO;

  return (
    <section id="physiotherapists" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Clinical Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Physiotherapy Team
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dedicated healthcare professionals bringing clinical excellence and compassionate bedside care directly to your doorstep.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Featured Doctor Card (Dr. Venu) */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Professional Profile Badge Placeholder (No fake doctor photo, clean medical styling) */}
            <div className="md:col-span-5 text-center flex flex-col items-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-[#003b73] via-[#0284c7] to-emerald-600 flex flex-col items-center justify-center text-white shadow-lg p-4 border-4 border-white">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-black mb-2">
                  DV
                </div>
                <div className="text-sm font-bold tracking-wide">
                  {doctorVenu.name}
                </div>
                <div className="text-xs text-blue-100">
                  {doctorVenu.qualification}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Certified Physiotherapist
              </div>
            </div>

            {/* Right: Bio & Key Accomplishments */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <Stethoscope className="w-4 h-4 text-blue-600" />
                  <span>Lead Physiotherapist</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {doctorVenu.name}{" "}
                  <span className="text-sm font-semibold text-slate-500">
                    ({doctorVenu.qualification})
                  </span>
                </h3>
              </div>

              {/* Two verified stats */}
              <div className="flex flex-wrap gap-4 pt-1">
                <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-lg font-bold text-[#003b73]">
                    {doctorVenu.experienceYears} Years
                  </div>
                  <div className="text-xs text-slate-500">Clinical Experience</div>
                </div>

                <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-lg font-bold text-emerald-600">
                    {doctorVenu.patientsTreated} Patients
                  </div>
                  <div className="text-xs text-slate-500">Successfully Treated</div>
                </div>
              </div>

              {/* Biography */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                {doctorVenu.bio}
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded-xl bg-[#003b73] hover:bg-[#0284c7] text-white text-xs font-bold shadow transition cursor-pointer"
                >
                  Book Consultation with Dr. Venu
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Our Team Section (Team of 8 across Hyderabad) */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-[#003b73] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" /> Comprehensive Coverage
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Our Team: 8 Dedicated Physiotherapists Spread Across Hyderabad
            </h3>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
              &quot;Our team works together to make professional physiotherapy care accessible to patients across Hyderabad, bringing personalized treatment and rehabilitation directly to their homes.&quot;
            </p>

            {/* Team Zones & Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-slate-900">
              <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                <MapPin className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-sm font-bold text-slate-900">Zonal Coverage</div>
                <div className="text-xs text-slate-600 mt-1">
                  Covers Central, East, South, West & North Hyderabad.
                </div>
              </div>

              <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                <HeartHandshake className="w-5 h-5 text-emerald-600 mb-2" />
                <div className="text-sm font-bold text-slate-900">Doorstep Care</div>
                <div className="text-xs text-slate-600 mt-1">
                  Arrives with diagnostic and therapeutic gear at your residence.
                </div>
              </div>

              <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                <Clock className="w-5 h-5 text-amber-600 mb-2" />
                <div className="text-sm font-bold text-slate-900">Flexible Hours</div>
                <div className="text-xs text-slate-600 mt-1">
                  Morning, afternoon, and evening slots coordinated for convenience.
                </div>
              </div>

              <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                <Award className="w-5 h-5 text-indigo-600 mb-2" />
                <div className="text-sm font-bold text-slate-900">Licensed Specialists</div>
                <div className="text-xs text-slate-600 mt-1">
                  Qualified physical therapists trained in modern rehabilitation.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-blue-200">
                * Note: Individual profiles and portraits will be added as verified documentation is uploaded.
              </span>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow transition cursor-pointer"
              >
                Request a Therapist in Your Area
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
