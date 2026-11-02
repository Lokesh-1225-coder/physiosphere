"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, CheckCircle, Calendar, AlertCircle } from "lucide-react";
import { HYDERABAD_ZONES } from "@/data/physiosphereData";

interface LocationsProps {
  onOpenBooking: () => void;
}

export default function Locations({ onOpenBooking }: LocationsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("All");

  const zonesList = ["All", ...HYDERABAD_ZONES.map((z) => z.zone)];

  // Filter locations by search query and active zone
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

  const totalFilteredCount = filteredAreas.reduce((acc, curr) => acc + curr.areas.length, 0);

  return (
    <section id="locations" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Coverage Directory
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Home Physiotherapy Services Across Hyderabad
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            PhysioSphere has a team of 8 physiotherapists spread across Hyderabad, helping make professional home physiotherapy accessible across multiple neighbourhoods.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Search & Zone Controls */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          {/* Real-time search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your neighbourhood (e.g., Banjara Hills, Gachibowli, Kukatpally, Uppal)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm text-slate-900 focus:border-[#0284c7] transition shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Zone filter badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {zonesList.map((z) => (
              <button
                key={z}
                type="button"
                onClick={() => setSelectedZone(z)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedZone === z
                    ? "bg-[#003b73] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {z}
              </button>
            ))}
          </div>

          <div className="text-center text-xs text-slate-500">
            Showing <span className="font-bold text-slate-800">{totalFilteredCount}</span> service coverage areas
          </div>
        </div>

        {/* Location Display */}
        {filteredAreas.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl p-8 text-center max-w-md mx-auto space-y-3">
            <MapPin className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="font-bold text-slate-800">No matching area found</h4>
            <p className="text-xs text-slate-500">
              Don’t worry! We cover almost all Hyderabad neighbourhoods with our team of 8 therapists. Call us to confirm your area.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-4 py-2 bg-[#003b73] text-white text-xs font-bold rounded-xl"
            >
              Inquire About Your Area
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredAreas.map((zone) => (
              <div
                key={zone.zone}
                className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#003b73] flex items-center justify-center font-bold text-xs">
                    <MapPin className="w-4 h-4 text-[#0284c7]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {zone.zone}
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    {zone.areas.length} Areas
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {zone.areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-slate-100 text-xs font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition shadow-2xs"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Important Transparency Notice (Strict compliance with guidelines) */}
        <div className="mt-12 bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 sm:p-6 text-xs text-slate-600 max-w-4xl mx-auto space-y-2">
          <div className="flex items-start gap-2 font-bold text-blue-900">
            <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Important Service Coverage Information:</span>
          </div>
          <p className="leading-relaxed pl-6">
            The areas listed above represent our <strong>doorstep home-physiotherapy service coverage zones</strong> across Hyderabad, not walk-in clinic branches. We provide treatment directly at your home. Individual appointment slot availability depends on the daily routes of our 8 physiotherapists and will be promptly confirmed by our clinical coordination team upon receiving your booking request.
          </p>
        </div>

        {/* Call-to-action */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#002f5c] hover:to-[#0369a1] text-white font-bold text-sm shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            <span>Check Availability & Book Home Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
}
