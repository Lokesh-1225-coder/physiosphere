"use client";

import React from "react";
import { Target, Compass, HeartHandshake, Home } from "lucide-react";

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const pillars = [
    {
      title: "Our Mission",
      desc: "To deliver accessible, high-standard physiotherapy directly to patients in Hyderabad, eliminating stressful travel while ensuring clinically proven recovery.",
      icon: Target
    },
    {
      title: "Our Approach",
      desc: "Root-cause assessment followed by active therapeutic exercises, joint mobilization, ergonomic advice, and systematic progress tracking.",
      icon: Compass
    },
    {
      title: "Personalized Treatment",
      desc: "Every patient’s condition and recovery goals are unique. We design rehabilitation plans specific to your body mechanics and daily routine.",
      icon: HeartHandshake
    },
    {
      title: "Home-based Rehabilitation",
      desc: "Therapy in your familiar environment allows us to optimize your actual bed, chairs, and stairs for practical, lasting functional independence.",
      icon: Home
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            About PhysioSphere
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Quality Physiotherapy, Accessible at Your Doorstep
          </h2>
        </div>

        {/* Narrative Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-8 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              At <strong className="text-slate-900 font-semibold">PhysioSphere</strong>, we believe quality physiotherapy should be accessible to everyone. Our team of experienced physiotherapists brings personalized rehabilitation and professional care directly to your home.
            </p>
            <p>
              With a team of <strong className="text-slate-900 font-semibold">8 physiotherapists spread across Hyderabad</strong>, we aim to make recovery convenient, comfortable, and accessible.
            </p>
            <p>
              Whether you are experiencing chronic pain, recovering from surgery, dealing with sports injuries, or helping an elderly family member regain mobility, our team is committed to supporting your recovery journey.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Why Home Physiotherapy Works</h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Zero travel through city traffic</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Comfortable recovery in private space</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Family members easily involved</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Flexible morning and evening slots</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full mt-2 py-2 px-3 text-xs font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white transition cursor-pointer"
            >
              Consult Our Team
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-lg p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-slate-100 text-slate-800 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
