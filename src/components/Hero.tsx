"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Phone,
  MessageSquare,
  Users,
  Award,
  HeartHandshake,
  CheckCircle,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Supporting Text, 3 CTAs, Trust Stats */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#003b73] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Doorstep Healthcare in Hyderabad & Surrounding Areas</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Expert Physiotherapy Care,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003b73] via-[#0284c7] to-emerald-600">
                Right at Your Home
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Recover better, move freely, and regain your confidence with experienced physiotherapists delivering personalized care at your doorstep across Hyderabad.
            </p>

            {/* Three CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* 1. Book Now */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#002d58] hover:to-[#0369a1] text-white font-bold text-base shadow-lg shadow-blue-900/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-emerald-300" />
                <span>Book Now</span>
              </button>

              {/* 2. WhatsApp Us */}
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              {/* 3. Call Now */}
              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0284c7]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Verified Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Verified Clinical Excellence
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Stat 1: Team of 8 */}
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#003b73] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 leading-none">Team of 8</div>
                    <div className="text-xs text-slate-500 mt-1">Physiotherapists in Hyderabad</div>
                  </div>
                </div>

                {/* Stat 2: 4+ Years Experience (Dr. Venu) */}
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 leading-none">4+ Years Exp.</div>
                    <div className="text-xs text-slate-500 mt-1">Dr. Venu (B.P.T)</div>
                  </div>
                </div>

                {/* Stat 3: 600+ Patients Successfully Treated (Dr. Venu) */}
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 leading-none">600+ Patients</div>
                    <div className="text-xs text-slate-500 mt-1">Treated by Dr. Venu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Healthcare Visual & Consultation Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Decorative Visual Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/50 p-6 sm:p-8 border border-slate-200/80 shadow-2xl overflow-hidden">
                
                {/* Healthcare Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm">
                      <Image
                        src="/images/logo.jpeg"
                        alt="PhysioSphere Symbol"
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">PhysioSphere Care</div>
                      <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Home Assessment Available
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                    Hyderabad
                  </span>
                </div>

                {/* Hero Physiotherapy Image Placeholder & Showcase */}
                <div className="my-6 relative rounded-2xl bg-gradient-to-br from-[#002f5c] via-[#0284c7] to-[#0d9488] p-7 text-white shadow-inner overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" /> Personalized Home Rehabilitation
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-snug">
                    Safe, Comforting Therapy Designed for Your Living Room
                  </h3>

                  <p className="text-xs text-blue-100 leading-relaxed mb-4">
                    Zero hospital commute. Zero waiting rooms. Comprehensive physical assessment and evidence-backed therapy right where you heal best.
                  </p>

                  <div className="space-y-2 text-xs text-white/95">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                      <span>Post-operative knee & hip replacement care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                      <span>Spine, back & cervical spondylosis relief</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                      <span>Elderly balance, gait & fall prevention</span>
                    </div>
                  </div>
                </div>

                {/* Quick Consultation Trigger Card (Inspired by reference) */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <div className="text-xs font-bold text-slate-800">
                      Need a home physiotherapist today?
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center justify-center sm:justify-start gap-1">
                      <Clock className="w-3 h-3 text-blue-600" /> Fast scheduling across Hyderabad
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-4 py-2 bg-[#003b73] hover:bg-[#0284c7] text-white text-xs font-bold rounded-xl transition cursor-pointer flex-shrink-0"
                  >
                    Request Visit
                  </button>
                </div>
              </div>

              {/* Floating review/trust pill */}
              <div className="absolute -bottom-4 left-6 right-6 sm:left-12 sm:right-12 bg-white rounded-xl shadow-lg border border-slate-100 py-2.5 px-4 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#0284c7]" /> Coverage across all 5 zones
                </span>
                <span className="font-bold text-emerald-600">8 Specialists Ready</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
