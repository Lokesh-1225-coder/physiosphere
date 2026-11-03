"use client";

import React from "react";
import { MapPin, Star, Clock, ExternalLink, ShieldCheck, Phone } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ClinicMap() {
  const { clinic } = BRAND_INFO;

  return (
    <section id="clinic-location" className="py-8 sm:py-14 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Clinical Center & Map Location
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Our Central Rehabilitation Hub
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Centrally coordinated clinic supporting doorstep physiotherapy teams throughout Hyderabad.
          </p>
        </div>

        {/* Map & Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Clinic Details Card (Matches Page 5 of specifications) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-blue-200/90 p-5 sm:p-7 shadow-xs highlight-card flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              
              {/* Verified Location Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Location</span>
                </span>

                {/* Rating Badge */}
                <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{clinic.rating.toFixed(1)}</span>
                  <div className="flex text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold">({clinic.reviewsCount})</span>
                </div>
              </div>

              {/* Clinic Title */}
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#0a2540] leading-snug">
                  {clinic.name}
                </h3>
                <p className="text-xs text-blue-600 font-semibold mt-0.5">
                  Ortho & Neuro Pain Management • Central Hyderabad Hub
                </p>
              </div>

              {/* Exact Physical Address */}
              <div className="p-3.5 rounded-xl bg-[#f0f7fd] border border-blue-100 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{clinic.address}</span>
              </div>

              {/* Opening Hours Badge (Page 5 Requirement) */}
              <div className="p-3.5 rounded-xl bg-blue-600 text-white shadow-2xs flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                <Clock className="w-4 h-4 text-blue-100 flex-shrink-0" />
                <span>Mon-Sun: 9:00am – 9:00pm</span>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-2xs transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BRAND_INFO.phonePrimary}`}
                  className="min-h-[42px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call Clinic</span>
                </a>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-blue-200/90 overflow-hidden shadow-xs relative min-h-[360px] sm:min-h-[420px] flex">
            <iframe
              title="PhysioSphere & Legend Physiotherapy Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.127495393043!2d78.5411796!3d17.3742468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990022204c4f%3A0xb35a09e07833a69a!2sKothapet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px] sm:min-h-[420px]"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-2xs pointer-events-none">
              📍 Dwarka Nagar, Kothapet, L.B. Nagar, Hyderabad
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
