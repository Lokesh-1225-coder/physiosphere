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
    <section id="locations" className="py-14 sm:py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Service Coverage
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Home Physiotherapy Services Across Hyderabad
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            PhysioSphere has a team of 8 physiotherapists spread across Hyderabad, helping make professional home physiotherapy accessible across multiple neighbourhoods.
          </p>
        </div>

        {/* Search & Zone Controls with Cursor Highlighting */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-lg">
            <Search className="w-5 h-5 text-blue-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your area (e.g. Banjara Hills, Kukatpally, Gachibowli)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-blue-200 bg-white text-sm sm:text-base text-[#0a2540] focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-600 cursor-pointer font-bold"
              >
                ×
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {zonesList.map((z) => (
              <button
                key={z}
                type="button"
                onClick={() => setSelectedZone(z)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedZone === z
                    ? "bg-[#0a2540] text-white shadow-xs"
                    : "bg-[#f0f7fd] text-slate-700 hover:bg-blue-100/80 hover:text-blue-800 border border-blue-100"
                }`}
              >
                {z}
              </button>
            ))}
            <span className="text-xs font-semibold text-slate-500 ml-2">
              ({totalCount} areas covered)
            </span>
          </div>
        </div>

        {/* Areas List */}
        {filteredAreas.length === 0 ? (
          <div className="p-10 text-center bg-[#f0f7fd] rounded-2xl border border-blue-200 max-w-md space-y-2">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto" />
            <p className="text-sm font-bold text-[#0a2540]">No matching neighborhood found</p>
            <p className="text-xs text-slate-500">Contact us directly to confirm availability in your area.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAreas.map((zone) => (
              <div key={zone.zone} className="bg-[#f0f7fd] rounded-2xl p-6 border border-blue-100/90 shadow-2xs highlight-card">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a2540]">{zone.zone}</h3>
                  <span className="text-xs font-semibold text-blue-600 bg-white px-2.5 py-0.5 rounded-full border border-blue-200">
                    {zone.areas.length} Localities
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {zone.areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-blue-100 text-xs sm:text-sm text-slate-800 font-semibold shadow-2xs hover:border-blue-400 hover:bg-blue-50/60 transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Clear Compliance Note */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-slate-600 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#0a2540]">
            <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Important Service Coverage Information:</span>
          </div>
          <p className="leading-relaxed pl-6">
            The areas listed above represent home-service coverage areas across Hyderabad, not confirmed clinic branches. We do not operate walk-in clinics at each location. Appointment availability is confirmed by our clinical coordination team based on scheduling and route feasibility.
          </p>
        </div>

        {/* CTA with Enlarged Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-600 font-medium">Need physiotherapy at your doorstep in Hyderabad?</span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Check Availability & Book</span>
          </button>
        </div>

      </div>
    </section>
  );
}