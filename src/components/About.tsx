"use client";

import React from "react";
import Image from "next/image";
import { Target, Compass, HeartHandshake, Home, CheckCircle2, Calendar } from "lucide-react";

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
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            About PhysioSphere
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Quality Physiotherapy, Accessible at Your Doorstep
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Making professional recovery convenient, comfortable, and personalized across Hyderabad.
          </p>
        </div>

        {/* Narrative Content with High-Quality Realistic Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-center">
          
          {/* Narrative text */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p className="text-lg text-[#0a2540] font-semibold leading-relaxed">
              At <span className="text-blue-600 font-bold">PhysioSphere</span>, we believe clinical-grade physiotherapy should be accessible without the pain and exhaustion of traveling through city traffic.
            </p>
            <p>
              With a dedicated team of <strong className="text-[#0a2540] font-bold">8 licensed physiotherapists spread across Hyderabad</strong>, we bring hospital-grade rehabilitation, post-operative care, and pain-relief exercises directly to your living room.
            </p>
            <p>
              Whether you are recovering from joint replacement surgery, managing chronic back or neck stiffness, overcoming a stroke, or helping an elderly parent maintain walking balance, our therapists provide dedicated bedside guidance every step of the way.
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Home Consultation</span>
              </button>
            </div>
          </div>

          {/* Realistic Photo & Clinical Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-blue-100 shadow-md highlight-card">
              <Image
                src="/images/sections/about-physio.jpg"
                alt="Physiotherapist providing hands-on consultation to patient"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Clinical Excellence</span>
                <p className="text-sm font-semibold">Compassionate bedside rehabilitation across Hyderabad</p>
              </div>
            </div>

            <div className="bg-[#f0f7fd] border border-blue-200/70 rounded-xl p-5 space-y-2.5 highlight-card">
              <h3 className="text-sm font-bold text-[#0a2540]">Why Home Physiotherapy Works</h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero stressful travel through Hyderabad traffic</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Comfortable recovery in private, relaxed space</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Family members easily involved in care plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Flexible morning and evening appointment slots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid with Cursor Highlighting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 border border-slate-200/90 highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a2540] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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