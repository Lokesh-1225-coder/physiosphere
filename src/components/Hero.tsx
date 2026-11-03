"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Phone,
  Users,
  Award,
  HeartHandshake,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck
} from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#eef7fd] via-[#f5fafd] to-white border-b border-blue-100 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading (48-50px font), Supporting Content, CTAs, Trust Points */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clinical Location & Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold shadow-xs">
              <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Doorstep Physiotherapy Across Hyderabad • 8 Zonal Specialists</span>
            </div>

            {/* Main Headline - Exactly 48-50 px on desktop */}
            <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-black text-[#0a2540] tracking-tight leading-[1.15]">
              Expert Physiotherapy Care, Right at Your Home
            </h1>

            {/* Supporting Content */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Recover comfortably in your own home with experienced physiotherapists delivering personalized rehabilitation across Hyderabad. Tailored one-to-one therapy with zero clinic travel.
            </p>

            {/* Action Buttons: 1 Large Primary + 2 Secondary with official WhatsApp symbol */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-9 sm:py-4.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Book Appointment</span>
              </button>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-base shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-emerald-600 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base shadow-sm hover:shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Verified Trust Stats (3 items) with cursor highlight */}
            <div className="pt-6 border-t border-blue-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white p-3.5 rounded-xl border border-blue-100/80 text-left flex items-center gap-3 highlight-card shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#0a2540] leading-tight">Team of 8</div>
                    <div className="text-xs text-slate-500 font-medium">Physiotherapists</div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-blue-100/80 text-left flex items-center gap-3 highlight-card shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#0a2540] leading-tight">4+ Years Exp.</div>
                    <div className="text-xs text-slate-500 font-medium">Dr. Venu (B.P.T)</div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-blue-100/80 text-left flex items-center gap-3 highlight-card shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#0a2540] leading-tight">600+ Patients</div>
                    <div className="text-xs text-slate-500 font-medium">Treated by Dr. Venu</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Quality Realistic Photograph + Clinical Overview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden highlight-card">
              
              {/* High-Quality Realistic Photograph */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-100">
                <Image
                  src="/images/sections/hero-physio.jpg"
                  alt="Professional home physiotherapy rehabilitation session in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent" />
                
                {/* Floating Image Badges */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified Home Treatment
                  </span>
                  <span className="font-semibold flex items-center gap-1 bg-emerald-500/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    Flexible Timings
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-[#0a2540]">Clinical Home Rehabilitation</h3>
                    <p className="text-xs text-slate-500">100% focused attention at your convenience</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Hyderabad
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Thorough Assessment</strong>: Physical exam, posture & mobility evaluation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Senior & Post-Op Safe</strong>: Zero travel strain for elderly & post-surgery recovery.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Hands-On Care</strong>: Manual therapy, therapeutic exercise & joint mobilization.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Fast confirmation across 80+ areas</span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:shadow-md cursor-pointer transition-all"
                  >
                    Book Home Assessment
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}