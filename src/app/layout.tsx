import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#003b73",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://physiosphere.in"),
  title: "PhysioSphere | Expert Physiotherapy Care at Home in Hyderabad",
  description:
    "Recover comfortably at home with PhysioSphere. Certified team of 30+ physiotherapists delivering personalized doorstep physiotherapy across Hyderabad. Back pain, stroke rehab, post-surgery, knee pain, and elderly mobility.",
  keywords: [
    "Physiotherapy at Home in Hyderabad",
    "Home Physiotherapist in Hyderabad",
    "Physiotherapy Services in Hyderabad",
    "Best Physiotherapist at Home Hyderabad",
    "Home Physiotherapy Services",
    "Physiotherapist Near Me Hyderabad",
    "Dr. Venu Physiotherapist Hyderabad",
    "Post Surgery Physiotherapy Hyderabad",
    "Elderly Home Physiotherapy Hyderabad"
  ],
  authors: [{ name: "PhysioSphere" }],
  creator: "PhysioSphere",
  publisher: "PhysioSphere",
  alternates: {
    canonical: "https://physiosphere.in"
  },
  openGraph: {
    title: "PhysioSphere | Expert Physiotherapy Care at Home in Hyderabad",
    description:
      "Doorstep physiotherapy care across Hyderabad. Certified team of 30+ physiotherapists offering specialized orthopedic, neurological, post-surgery, and geriatric rehabilitation.",
    url: "https://physiosphere.in",
    siteName: "PhysioSphere",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "PhysioSphere Advanced Physiotherapy Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "PhysioSphere | Expert Physiotherapy at Home in Hyderabad",
    description:
      "Doorstep physiotherapy care across Hyderabad. Experienced team of 30+ physiotherapists offering personalized rehabilitation at your home.",
    images: ["/images/logo.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "PhysioSphere",
    alternateName: "PhysioSphere Advanced Physiotherapy",
    description:
      "Professional home physiotherapy service provider across Hyderabad with a verified team of 30+ licensed physiotherapists.",
    url: "https://physiosphere.in",
    logo: "https://physiosphere.in/images/logo.jpeg",
    telephone: "+917675069960",
    email: "info.physiosphere.in@gmail.com",
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Telangana"
      }
    },
    medicalSpecialty: [
      "Physiotherapy",
      "Orthopedic Rehabilitation",
      "Neurological Rehabilitation",
      "Geriatric Physiotherapy"
    ],
    employee: {
      "@type": "Person",
      name: "Dr. Venu",
      jobTitle: "Senior Physiotherapist",
      honorificPrefix: "Dr.",
      hasCredential: "PT",
      description: "Physiotherapist with 4+ years of clinical and home rehabilitation experience, successfully treated over 600 patients."
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "17.3850",
        longitude: "78.4867"
      },
      geoRadius: "35000"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
