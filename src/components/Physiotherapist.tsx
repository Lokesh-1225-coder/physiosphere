"use client";

import React from "react";
import Image from "next/image";
import { Award, Users, CheckCircle2, Stethoscope, MapPin, Calendar, Star } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface PhysiotherapistProps {
  onOpenBooking: () => void;
}

export default function Physiotherapist({ onOpenBooking }: PhysiotherapistProps) {
  const { doctorVenu } = BRAND_INFO;

  return (
    <section id="physiotherapists" className="py-14 sm:py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Clinical Team
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Meet Our Physiotherapy Team
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Experienced healthcare professionals committed to compassionate, evidence-based home rehabilitation.
          </p>
        </div>

        {/* Lead Physiotherapist Card (Dr. Venu) with High Quality Realistic Photograph */}
        <div className="bg-[#f0f7fd] border border-blue-200/90 rounded-2xl p-6 sm:p-10 mb-12 shadow-xs highlight-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Realistic Doctor Photograph */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-blue-200 shadow-md">
                <Image
                  src={doctorVenu.image || "/images/sections/doctor-venu.jpg"}
                  alt="Dr. Venu - Senior Home Physiotherapist"
                  fill
                  sizes="(max-width: 768px) 200px, 240px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3.5 flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Licensed Physiotherapist</span>
              </div>
            </div>

            {/* Right: Bio & Clinical Experience Stats */}
            <div className="md:col-span-8 space-y-4 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5 mb-1">
                  <Stethoscope className="w-4 h-4" /> Senior Home Physiotherapist
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540]">
                  {doctorVenu.name} <span className="text-base sm:text-lg font-semibold text-slate-500">({doctorVenu.qualification})</span>
                </h3>
              </div>

              {/* Verified Clinical Experience Stats */}
              <div className="flex flex-wrap gap-3.5 pt-1">
                <div className="bg-white px-4 py-2.5 rounded-xl border border-blue-100 shadow-2xs">
                  <div className="text-lg font-extrabold text-[#0a2540] leading-tight">
                    {doctorVenu.experienceYears} Years
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Clinical Experience</div>
                </div>

                <div className="bg-white px-4 py-2.5 rounded-xl border border-blue-100 shadow-2xs">
                  <div className="text-lg font-extrabold text-[#0a2540] leading-tight">
                    {doctorVenu.patientsTreated} Patients
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Successfully Treated</div>
                </div>

                <div className="bg-white px-4 py-2.5 rounded-xl border border-blue-100 shadow-2xs flex items-center gap-2">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0a2540]">Hyderabad Wide</div>
                    <div className="text-[11px] text-slate-500">Home Care Visits</div>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                {doctorVenu.bio}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Venu</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Team Section (8 Physiotherapists Across Hyderabad) */}
        <div className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-9 shadow-xs highlight-card">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5 mb-1.5">
              <Users className="w-4 h-4" /> Zonal Coordination
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a2540]">
              Our Team: 8 Physiotherapists Spread Across Hyderabad
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              &quot;Our team works together to make professional physiotherapy care accessible to patients across Hyderabad, bringing personalized treatment and rehabilitation directly to their homes.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 sm:p-5 rounded-xl bg-[#f0f7fd] border border-blue-100 highlight-card">
              <div className="font-bold text-[#0a2540] text-base mb-1.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Citywide Coverage</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Coordinated therapists located across Central, East, South, West, and North Hyderabad.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#f0f7fd] border border-blue-100 highlight-card">
              <div className="font-bold text-[#0a2540] text-base mb-1.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Qualified Practitioners</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Licensed physical therapists trained in orthopedic, neurological, and post-operative care.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#f0f7fd] border border-blue-100 highlight-card">
              <div className="font-bold text-[#0a2540] text-base mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Doorstep Scheduling</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Therapists assigned based on your neighborhood to ensure prompt appointment availability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}