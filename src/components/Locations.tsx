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
    <section id="locations" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Service Coverage
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Home Physiotherapy Services Across Hyderabad
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            PhysioSphere has a team of 8 physiotherapists spread across Hyderabad, helping make professional home physiotherapy accessible across multiple neighbourhoods.
          </p>
        </div>

        {/* Search & Zone Controls */}
        <div className="space-y-3 mb-8">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your area (e.g. Banjara Hills, Kukatpally)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:border-blue-600 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer font-bold"
              >
                ×
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {zonesList.map((z) => (
              <button
                key={z}
                type="button"
                onClick={() => setSelectedZone(z)}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                  selectedZone === z
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {z}
              </button>
            ))}
            <span className="text-xs text-slate-500 ml-2">
              ({totalCount} areas)
            </span>
          </div>
        </div>

        {/* Areas List */}
        {filteredAreas.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-lg border border-slate-200 max-w-md space-y-2">
            <MapPin className="w-6 h-6 text-slate-400 mx-auto" />
            <p className="text-xs font-bold text-slate-800">No matching neighborhood found</p>
            <p className="text-xs text-slate-500">Contact us directly to confirm availability in your area.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAreas.map((zone) => (
              <div key={zone.zone} className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900">{zone.zone}</h3>
                  <span className="text-xs text-slate-500">({zone.areas.length})</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {zone.areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-1.5 p-2 rounded-md bg-white border border-slate-200 text-xs text-slate-700 font-medium"
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
        <div className="mt-8 p-4 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-slate-600 space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-blue-900">
            <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Important Service Coverage Information:</span>
          </div>
          <p className="leading-relaxed pl-6">
            The areas listed above represent home-service coverage areas across Hyderabad, not confirmed clinic branches. We do not operate walk-in clinics at each location. Appointment availability is confirmed by our clinical coordination team based on scheduling and route feasibility.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">Need physiotherapy at your home?</span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Check Availability & Book</span>
          </button>
        </div>

      </div>
    </section>
  );
}
