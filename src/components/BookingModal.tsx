"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
  Home,
  Zap,
  Loader2
} from "lucide-react";
import { BRAND_INFO, CONDITIONS_TREATED, SERVICE_CATEGORIES } from "@/data/physiosphereData";
import { BookingFormData, BookingResponse } from "@/types/booking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService = ""
}: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    service: initialService || "General Physiotherapy Consultation",
    description: "",
    honeypot: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Update initial service when prop changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.mobile.replace(/\D/g, "");
    if (!formData.mobile.trim()) {
      errors.mobile = "Please enter your mobile number.";
    } else if (cleanPhone.length < 10) {
      errors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.address.trim()) {
      errors.address = "Please provide your residential location or area in Hyderabad.";
    }

    if (!formData.description.trim()) {
      errors.description = "Please describe the pain or condition requiring physiotherapy.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data: BookingResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit booking request. Please try again.");
      }

      setSubmissionSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmissionSuccess(false);
    setServerError(null);
    setFormErrors({});
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      service: "General Physiotherapy Consultation",
      description: "",
      honeypot: ""
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Consultation Header (Inspired by reference card) */}
        <div className="bg-gradient-to-r from-[#003b73] via-[#0284c7] to-[#003b73] p-6 text-white text-center relative overflow-hidden">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-inner">
            <Calendar className="w-7 h-7 text-white" />
          </div>
          <h2 id="booking-modal-title" className="text-2xl font-bold tracking-tight">
            Book Your Home Consultation
          </h2>
          <p className="text-blue-100 text-sm mt-1 max-w-md mx-auto">
            Get personalized, experienced physiotherapy care delivered directly to your doorstep across Hyderabad.
          </p>

          {/* Quick value badges */}
          <div className="mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs text-white/95">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> Expert Physiotherapists
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
              <Home className="w-3.5 h-3.5 text-blue-200" /> Home Visits in Hyderabad
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
              <Zap className="w-3.5 h-3.5 text-amber-300" /> Quick Response
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submissionSuccess ? (
            /* Success Feedback State */
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Your appointment request has been submitted successfully!
              </h3>
              <p className="text-slate-600 max-w-lg mx-auto text-base leading-relaxed">
                Our PhysioSphere team will contact you shortly to discuss your requirements and appointment availability.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 max-w-md mx-auto text-sm text-slate-700 space-y-2 text-left">
                <p className="font-semibold text-blue-900">For immediate assistance or emergency coordination:</p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a
                    href="tel:7675069960"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 text-blue-700 font-semibold hover:bg-blue-50"
                  >
                    <Phone className="w-4 h-4" /> Call: 7675069960
                  </a>
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {serverError && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Unable to submit request: </span>
                    {serverError}
                  </div>
                </div>
              )}

              {/* Honeypot anti-spam field (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition ${
                      formErrors.fullName ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-blue-600"
                    }`}
                  />
                  {formErrors.fullName && <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="e.g. 7675069960"
                    value={formData.mobile}
                    onChange={(e) => {
                      setFormData({ ...formData, mobile: e.target.value });
                      if (formErrors.mobile) setFormErrors({ ...formErrors, mobile: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition ${
                      formErrors.mobile ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-blue-600"
                    }`}
                  />
                  {formErrors.mobile && <p className="text-xs text-red-500 mt-1">{formErrors.mobile}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="e.g. ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition ${
                      formErrors.email ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-blue-600"
                    }`}
                  />
                  {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Physiotherapy Service Required
                  </label>
                  <select
                    id="modal-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:border-blue-600 transition"
                  >
                    <option value="General Physiotherapy Consultation">General Physiotherapy Consultation</option>
                    <optgroup label="Specialized Care Categories">
                      {SERVICE_CATEGORIES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Conditions Treated">
                      {CONDITIONS_TREATED.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Address / Location in Hyderabad */}
              <div>
                <label htmlFor="modal-address" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Address / Location in Hyderabad <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-address"
                  type="text"
                  required
                  placeholder="e.g. Flat 302, Green Meadows, Madhapur, Hyderabad"
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    if (formErrors.address) setFormErrors({ ...formErrors, address: "" });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition ${
                    formErrors.address ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-blue-600"
                  }`}
                />
                {formErrors.address && <p className="text-xs text-red-500 mt-1">{formErrors.address}</p>}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="modal-desc" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Description of the Problem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="modal-desc"
                  rows={3}
                  required
                  placeholder="Please describe symptoms, duration, doctor's advice (if any), or recovery goals..."
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (formErrors.description) setFormErrors({ ...formErrors, description: "" });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition ${
                    formErrors.description ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-blue-600"
                  }`}
                />
                {formErrors.description && <p className="text-xs text-red-500 mt-1">{formErrors.description}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#002f5c] hover:to-[#0369a1] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    "Request Appointment"
                  )}
                </button>
              </div>

              {/* Fast Direct Action Links */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Or connect immediately:</span>
                <div className="flex gap-2">
                  <a
                    href="tel:7675069960"
                    className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>
                  <span>•</span>
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-800 font-semibold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
