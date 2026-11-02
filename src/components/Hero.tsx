"use client";

import React from "react";
import {
  Calendar,
  Phone,
  MessageSquare,
  Users,
  Award,
  HeartHandshake,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero" className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Supporting Content, CTAs, Trust Points */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Simple Location Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Doorstep Physiotherapy Across Hyderabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
              Expert Physiotherapy Care, Right at Your Home
            </h1>

            {/* Supporting Content (Max 2 lines) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Recover better, move freely, and regain your confidence with experienced physiotherapists delivering personalized care at your doorstep across Hyderabad.
            </p>

            {/* Action Buttons: 1 Primary + 2 Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-xs transition cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-800 font-semibold text-sm sm:text-base transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm sm:text-base transition"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Verified Trust Stats (3 items) */}
            <div className="pt-6 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-left flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-tight">Team of 8</div>
                    <div className="text-xs text-slate-500">Physiotherapists</div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200 text-left flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-tight">4+ Years Exp.</div>
                    <div className="text-xs text-slate-500">Dr. Venu (B.P.T)</div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200 text-left flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-tight">600+ Patients</div>
                    <div className="text-xs text-slate-500">Treated by Dr. Venu</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Healthcare Overview Container */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Personalized Home Care</h3>
                  <p className="text-xs text-slate-500">Clinical rehabilitation at your convenience</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Hyderabad
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Assessment</strong>: Initial physical exam and medical history review.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>One-to-One Care</strong>: 100% focused therapist attention without clinic waiting.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior & Post-Op Safe</strong>: Zero commute stress for elderly and post-surgical recovery.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Customized Drills</strong>: Tailored home exercise programs and posture guidance.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Sessions coordinated by appointment</span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
