import type { Metadata } from 'next'
import GIS from "./GIS";

// SEO structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "Ghana Immigration Service",
  "url": "https://c-serp.gov.gh/services/ghana-immigration-service",
  "logo": "https://c-serp.gov.gh/assets/services/ghana_immigration_service_logo.png",
  "description": "Control and monitor borders, regulate entry/exit, and manage residence permits in Ghana. Join Ghana's elite immigration service through our secure digital platform.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GH",
    "addressLocality": "Accra"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+233 30 222 2222",
    "contactType": "customer service"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Graduate Entry Recruitment",
      "category": "Category A - Graduate Entry",
      "educationalLevel": "Bachelor's Degree"
    },
    {
      "@type": "Offer",
      "name": "Non-Graduate Entry Recruitment",
      "category": "Category B - Non-Graduate Entry",
      "educationalLevel": "WASSCE/SSSCE/HND/Diploma"
    },
    {
      "@type": "Offer",
      "name": "Medical Professionals Recruitment",
      "category": "Category C - Medical",
      "educationalLevel": "Professional Medical Qualifications"
    },
    {
      "@type": "Offer",
      "name": "Religious Affairs Recruitment",
      "category": "Category D - Religious Affairs",
      "educationalLevel": "Theological/Islamic Studies"
    },
    {
      "@type": "Offer",
      "name": "Technical & Vocational Staff Recruitment",
      "category": "Category E - Estates & Projects Division",
      "educationalLevel": "Technical/Vocational Certificates",
      "specializations": ["Masons", "Electricians", "Plumbers", "Carpenters"]
    },
    {
      "@type": "Offer",
      "name": "Transport & Logistics Staff Recruitment",
      "category": "Category F - Transport Division",
      "educationalLevel": "Technical/Certified Training",
      "specializations": ["Drivers", "Emergency/Ambulance Drivers", "Mechanics", "Welders", "Fabricators", "Auto Electricians", "Auto AC Repairers", "Sprayers"]
    },
    {
      "@type": "Offer",
      "name": "Uniform & Support Services Recruitment",
      "category": "Category G - Specialized Support Staff",
      "educationalLevel": "Technical/Vocational Training",
      "specializations": ["Tailors", "Communication Technicians"]
    },
    {
      "@type": "Offer",
      "name": "Computer Hardware & IT Support Recruitment",
      "category": "Category H - IT Technical Staff",
      "educationalLevel": "Technical/Vocational Certificate",
      "specializations": ["Computer Hardware", "Electronics", "IT Support", "Network Setup", "Troubleshooting"]
    },
    {
      "@type": "Offer",
      "name": "Sports Personnel Recruitment",
      "category": "Category I - Athletes & Sports Instructors",
      "educationalLevel": "Sports Proficiency",
      "specializations": ["Football", "Volleyball", "Table Tennis", "Basketball", "Arm Wrestling", "Athletics"]
    },
    {
      "@type": "Offer",
      "name": "Band & Music Staff Recruitment",
      "category": "Category J - Musicians & Band Members",
      "educationalLevel": "Music Proficiency",
      "specializations": ["Musical Notation", "Instrument Performance", "Band Experience"]
    },
    {
      "@type": "Offer",
      "name": "Auxiliary Staff Recruitment",
      "category": "Category K - Janitorial Workers & Gardeners",
      "educationalLevel": "Basic Literacy",
      "specializations": ["Janitorial Services", "Gardening", "General Maintenance"]
    }
  ]
}

export const metadata: Metadata = {
  title: "Apply to Ghana Immigration Service 2025/2026 | C-SERP Portal",
  description: "Join Ghana Immigration Service. Control borders, facilitate travel, manage residence permits. Graduate, non-graduate, medical, religious, and technical positions available. Apply online through official C-SERP portal.",
  keywords: "Ghana Immigration Service, GIS recruitment 2025, immigration jobs Ghana, border security, passport control, Ghana government jobs, WASSCE recruitment, degree recruitment, medical jobs Ghana, immigration careers",
  authors: [{ name: "Government of Ghana - C-SERP" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://c-serp.gov.gh/services/ghana-immigration-service",
    title: "Apply to Ghana Immigration Service 2025/2026 | C-SERP Portal",
    description: "Join Ghana Immigration Service. Control borders, facilitate travel, manage residence permits. Multiple entry categories available. Apply through official portal.",
    siteName: "C-SERP Ghana",
    locale: "en_GH",
    images: [
      {
        url: "https://c-serp.gov.gh/assets/services/ghana_immigration_service_logo.png",
        width: 1200,
        height: 630,
        alt: "Ghana Immigration Service Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Ghana Immigration Service 2025/2026 | C-SERP Portal",
    description: "Join Ghana Immigration Service. Control borders, facilitate travel, manage residence permits. Apply through official portal.",
    images: ["https://c-serp.gov.gh/assets/services/ghana_immigration_service_logo.png"]
  },
  alternates: {
    canonical: "https://c-serp.gov.gh/services/ghana-immigration-service"
  },
  other: {
    "theme-color": "#10b981",
    "msapplication-TileColor": "#10b981"
  }
}

export default function GhanaImmigrationService() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GIS/>
    </>
  )
}