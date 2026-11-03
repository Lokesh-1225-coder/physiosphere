"use client";

import React from "react";
import { Award, Users, CheckCircle2, Stethoscope, MapPin, Calendar, HeartHandshake } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface PhysiotherapistProps {
  onOpenBooking: () => void;
}

export default function Physiotherapist({ onOpenBooking }: PhysiotherapistProps) {
  const { doctorVenu } = BRAND_INFO;

  return (
    <section id="physiotherapists" className="py-8 sm:py-14 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Clinical Team
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Meet Our Physiotherapy Team
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Experienced healthcare professionals committed to compassionate, evidence-based home rehabilitation.
          </p>
        </div>

        {/* Lead Physiotherapist Card (Dr. Venu) - Minimal, No Photo, Clean Clinical UI */}
        <div className="bg-[#f0f7fd] border border-blue-200/80 rounded-xl p-4 sm:p-6 mb-6 shadow-2xs highlight-card">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5" />
                  Senior Home Physiotherapist
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Licensed Practitioner
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0a2540]">
                {doctorVenu.name} <span className="text-sm font-semibold text-slate-500">({doctorVenu.qualification})</span>
              </h3>

              {/* Verified Clinical Experience Stats */}
              <div className="flex items-center gap-3 pt-1">
                <div className="bg-white px-3 py-1.5 rounded-lg border border-blue-100 shadow-2xs">
                  <span className="text-sm font-bold text-[#0a2540]">{doctorVenu.experienceYears} Years</span>
                  <span className="text-[11px] text-slate-500 ml-1">Clinical Exp.</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded-lg border border-blue-100 shadow-2xs">
                  <span className="text-sm font-bold text-[#0a2540]">{doctorVenu.patientsTreated}</span>
                  <span className="text-[11px] text-slate-500 ml-1">Patients Treated</span>
                </div>
              </div>

              {/* Short Bio */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl pt-1">
                {doctorVenu.bio}
              </p>
            </div>

            <div className="sm:self-center flex-shrink-0">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-2xs transition cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book with Dr. Venu</span>
              </button>
            </div>

          </div>
        </div>

        {/* Team Section (8 Physiotherapists Across Hyderabad) - Minimal & Compact */}
        <div className="bg-white border border-blue-100 rounded-xl p-4 sm:p-6 shadow-2xs">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5 mb-1">
              <Users className="w-3.5 h-3.5" /> Zonal Coordination
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#0a2540]">
              Team of 8 Physiotherapists Across Hyderabad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Coordinated specialists assigned based on your neighborhood for prompt doorstep visits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
            <div className="p-3 rounded-lg bg-[#f0f7fd] border border-blue-100">
              <div className="font-bold text-[#0a2540] mb-0.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Citywide Coverage</span>
              </div>
              <p className="text-slate-600 text-[11px]">Central, East, South, West, and North Hyderabad.</p>
            </div>

            <div className="p-3 rounded-lg bg-[#f0f7fd] border border-blue-100">
              <div className="font-bold text-[#0a2540] mb-0.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Licensed Experts</span>
              </div>
              <p className="text-slate-600 text-[11px]">Qualified in orthopedic, neuro, and geriatric care.</p>
            </div>

            <div className="p-3 rounded-lg bg-[#f0f7fd] border border-blue-100">
              <div className="font-bold text-[#0a2540] mb-0.5 flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />
                <span>Prompt Scheduling</span>
              </div>
              <p className="text-slate-600 text-[11px]">Morning and evening flexible home slots available.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}