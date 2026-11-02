"use client";

import React from "react";
import { Award, Users, CheckCircle2, Stethoscope, MapPin } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface PhysiotherapistProps {
  onOpenBooking: () => void;
}

export default function Physiotherapist({ onOpenBooking }: PhysiotherapistProps) {
  const { doctorVenu } = BRAND_INFO;

  return (
    <section id="physiotherapists" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Clinical Team
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Meet Our Physiotherapy Team
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Experienced healthcare professionals committed to compassionate, evidence-based home rehabilitation.
          </p>
        </div>

        {/* Lead Physiotherapist Card (Dr. Venu) */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Neutral Clean Profile Placeholder (Typography/Initials) */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center border-2 border-slate-200">
                <span className="text-3xl font-bold tracking-tight">DV</span>
                <span className="text-[11px] font-semibold text-slate-300 mt-1">{doctorVenu.qualification}</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Licensed Physiotherapist
              </div>
            </div>

            {/* Right: Bio & Verified Stats */}
            <div className="md:col-span-8 space-y-3 text-left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5" /> Senior Home Physiotherapist
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {doctorVenu.name} <span className="text-sm font-normal text-slate-500">({doctorVenu.qualification})</span>
                </h3>
              </div>

              {/* Verified Clinical Experience Stats */}
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="bg-white px-3.5 py-2 rounded-lg border border-slate-200">
                  <div className="text-base font-bold text-slate-900 leading-tight">
                    {doctorVenu.experienceYears} Years
                  </div>
                  <div className="text-[11px] text-slate-500">Clinical Experience</div>
                </div>

                <div className="bg-white px-3.5 py-2 rounded-lg border border-slate-200">
                  <div className="text-base font-bold text-slate-900 leading-tight">
                    {doctorVenu.patientsTreated} Patients
                  </div>
                  <div className="text-[11px] text-slate-500">Successfully Treated</div>
                </div>
              </div>

              {/* Biography */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {doctorVenu.bio}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition cursor-pointer"
                >
                  Book with Dr. Venu
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Team Section (8 Physiotherapists Across Hyderabad) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-1.5 mb-1">
              <Users className="w-3.5 h-3.5" /> Zonal Coordination
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Our Team: 8 Physiotherapists Spread Across Hyderabad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              &quot;Our team works together to make professional physiotherapy care accessible to patients across Hyderabad, bringing personalized treatment and rehabilitation directly to their homes.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Citywide Coverage</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Coordinated therapists located across Central, East, South, West, and North Hyderabad.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Qualified Practitioners</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Licensed physical therapists trained in orthopedic, neurological, and post-operative care.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Doorstep Scheduling</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Therapists assigned based on your neighborhood to ensure prompt appointment availability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
