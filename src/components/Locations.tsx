"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, CheckCircle2, Calendar, AlertCircle } from "lucide-react";
import { HYDERABAD_ZONES } from "@/data/physiosphereData";

interface LocationsProps {
  onOpenBooking: () => void;
}

export default function Locations({ onOpenBooking }: LocationsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("All");

  const zonesList = ["All", ...HYDERABAD_ZONES.map((z) => z.zone)];

  const filteredAreas = useMemo(() => {
    let zones = HYDERABAD_ZONES;
    if (selectedZone !== "All") {
      zones = zones.filter((z) => z.zone === selectedZone);
    }

    const query = searchQuery.trim().toLowerCase();
    if (!query) return zones;

    return zones
      .map((z) => ({
        ...z,
        areas: z.areas.filter((a) => a.toLowerCase().includes(query))
      }))
      .filter((z) => z.areas.length > 0);
  }, [searchQuery, selectedZone]);

  const totalCount = filteredAreas.reduce((acc, curr) => acc + curr.areas.length, 0);

  return (
    <section id="locations" className="py-8 sm:py-14 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-7 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Coverage Area
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Service Locations in Hyderabad
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Our team of 30+ physiotherapists provides doorstep physiotherapy across 80+ localities in Hyderabad.
          </p>
        </div>

        {/* Search & Zone Controls - Mobile First */}
        <div className="space-y-3 mb-6">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-blue-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search area (e.g. Banjara Hills, Kukatpally)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-blue-200 bg-white text-base sm:text-sm text-[#0a2540] placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-100 transition shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="w-8 h-8 flex items-center justify-center absolute right-1.5 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-600 cursor-pointer font-bold"
              >
                ×
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {zonesList.map((z) => (
              <button
                key={z}
                type="button"
                onClick={() => setSelectedZone(z)}
                className={`min-h-[36px] px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer flex-shrink-0 ${
                  selectedZone === z
                    ? "bg-[#0a2540] text-white shadow-2xs"
                    : "bg-[#f0f7fd] text-slate-700 hover:bg-blue-100 border border-blue-100"
                }`}
              >
                {z}
              </button>
            ))}
            <span className="text-xs text-slate-500 whitespace-nowrap flex-shrink-0 ml-1">
              ({totalCount} areas)
            </span>
          </div>
        </div>

        {/* Areas List */}
        {filteredAreas.length === 0 ? (
          <div className="p-6 text-center bg-[#f0f7fd] rounded-xl border border-blue-200 max-w-md space-y-1">
            <MapPin className="w-6 h-6 text-blue-500 mx-auto" />
            <p className="text-sm font-bold text-[#0a2540]">No neighborhood found</p>
            <p className="text-xs text-slate-500">Call or message us to verify coverage at your address.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAreas.map((zone) => (
              <div key={zone.zone} className="bg-[#f0f7fd] rounded-xl p-4 sm:p-5 border border-blue-100 shadow-2xs highlight-card">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm sm:text-base font-bold text-[#0a2540]">{zone.zone}</h3>
                  <span className="text-[11px] font-semibold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-200">
                    {zone.areas.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {zone.areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-blue-100 text-xs text-slate-800 font-medium truncate"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Compliance Note */}
        <div className="mt-6 p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-slate-600 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            The areas above represent doorstep home-service coverage in Hyderabad. We do not operate walk-in clinics at each address. Slots are confirmed based on scheduling.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs sm:text-sm text-slate-600">Need physiotherapy at home?</span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-2xs transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Availability & Book</span>
          </button>
        </div>

      </div>
    </section>
  );
}