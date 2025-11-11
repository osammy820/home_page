# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the C-SERP (Consolidated Security Services Recruitment Portal) landing page for Ghana's security services recruitment. It's a Next.js 14 application built with TypeScript, React 18, and Tailwind CSS.

The portal serves as the main entry point for applications to Ghana's six security services:
- Ghana Police Service
- Ghana National Fire Service
- Ghana Immigration Service
- Ghana Prisons Service
- NADMO (National Disaster Management Organization)
- Narcotics Control Commission

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Architecture

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Ghana national colors
- **Icons**: React Icons (react-icons/fa)
- **Build Tool**: Next.js with SWC minification

### Key Files Structure
- `app/layout.tsx` - Root layout with global metadata
- `app/page.tsx` - Main landing page with hero, process overview, services showcase
- `app/services/[service]/page.tsx` - Individual service pages with SEO metadata
- `app/services/ghana-immigration-service/GIS.tsx` - Advanced complex component (1067 lines)
- `app/globals.css` - Global styles with Tailwind imports
- `tailwind.config.js` - Extended config with Ghana colors and custom animations

### Service Page Architecture Patterns

#### Simple Service Pages (Most Services)
Most service pages follow a straightforward structure:
```tsx
export default function ServiceName() {
  return (
    <main>
      {/* Hero Section with service-specific background */}
      {/* Service Overview */}
      {/* Requirements/Qualifications */}
      {/* Required Documents */}
      {/* CTA Section */}
    </main>
  )
}
```

#### Advanced Service Architecture (Ghana Immigration Service)
The Ghana Immigration Service demonstrates enterprise-level architecture with:
- **Page component** (`page.tsx`): SEO metadata, structured data (JSON-LD), and component import
- **Component file** (`GIS.tsx`): Interactive UI with state management (11 recruitment categories, 1067 lines)
- **Background Image Integration**: Hero section with `/assets/bg/immigration.jpg` and transparent overlay
- **SEO Implementation**: Next.js Metadata API with comprehensive structured data
- **Interactive Features**: Collapsible categories with detailed specialization requirements

### Recruitment Categories Architecture

The Ghana Immigration Service includes 11 comprehensive recruitment categories:

**Entry-Level Categories:**
- **Category A**: Graduate Entry (Bachelor's Degree holders)
- **Category B**: Non-Graduate Entry (HND/Diploma/WASSCE)

**Professional Categories:**
- **Category C**: Medical (Doctors, Nurses, Psychologists, Pharmacists, Physician Assistants)
- **Category D**: Religious Affairs (Ministers/Chaplains, Imams)

**Technical & Vocational Categories:**
- **Category E**: Estates & Projects Division (Masons, Electricians, Plumbers, Carpenters)
- **Category F**: Transport Division (Drivers, Emergency/Ambulance Drivers, Mechanics, Technical Staff)
- **Category G**: Specialized Support Staff (Tailors, Communication Technicians)
- **Category H**: Computer Hardware & IT Support
- **Category I**: Sports Personnel (Football, Volleyball, Table Tennis, Basketball, Arm Wrestling, Athletics)
- **Category J**: Band & Music Staff
- **Category K**: Auxiliary Staff (Janitorial Workers, Gardeners)

### Custom Design System
- **Ghana National Colors**: Custom color palette (`ghana.red`, `ghana.yellow`, `ghana.green`)
- **Category-Specific Colors**: Orange (Technical), Blue (Transport), Purple (Support), Cyan (IT), Green (Sports), Yellow (Auxiliary)
- **Animations**: Custom keyframes for fade-in-up, fade-in-left, fade-in-right, scale-in, float, slide-up, bounce-slow
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Component Patterns**: Consistent hero sections, qualification categories, document lists

### SEO Implementation Strategy
- **Page Metadata**: Using Next.js App Router Metadata API with comprehensive structured data
- **Rich Structured Data**: JSON-LD schemas for GovernmentOrganization and 11+ job offers
- **Social Media**: Open Graph and Twitter Card optimization with proper image metadata
- **Accessibility**: Semantic HTML, ARIA labels, screen reader support, keyboard navigation
- **Canonical URLs**: Proper URL canonicalization to prevent duplicate content

### Content Sections
Standard landing page includes:
1. Hero section with animated background and call-to-action
2. 5-step application process overview
3. Services showcase for all six security services
4. Trust & security section
5. Contact information with support details
6. Final call-to-action section

### External Links
The application links to `javascript:void(0)` for the actual application registration process.

## Development Notes

- The project uses Next.js App Router (app directory structure)
- Images are served from `/assets/` directory in the public folder, including service logos and background images
- Service pages range from simple components to complex architectures (see Ghana Immigration Service as the comprehensive example)
- SEO is implemented using Next.js Metadata API with detailed structured data
- Interactive features use React hooks for state management (useState for collapsible categories)
- The design emphasizes Ghanaian national colors and government branding with professional appearance
- Smooth scrolling and comprehensive hover states throughout
- Background image integration in hero sections with proper gradient overlays for text readability

## Service-Specific Features

### Ghana Immigration Service (Comprehensive Example)
- **11 Recruitment Categories**: Complete range from graduate to auxiliary positions
- **Detailed Requirements**: Each category has comprehensive qualifications, experience requirements, and educational specifications
- **Interactive UI**: Collapsible sections with detailed specialization information and visual category differentiation
- **Professional Icons**: 20+ category-specific icons from react-icons/fa
- **Background Integration**: Service-specific background image with transparent gradient overlay
- **Rich Structured Data**: Complete job offer schemas for search engine optimization with specializations

### Service Page Variations
- **Simple Services**: Direct component approach for straightforward requirements
- **Complex Services**: Separated page.tsx (SEO/metadata) and component files (interactive UI)
- **Color-Coded Categories**: Each service uses different gradient combinations for visual distinction
- **Logo Integration**: All services have consistent logo presentation and branding

## Development Patterns

### Component Architecture Best Practices
- **State Management**: Use useState for interactive elements (collapsible sections, form inputs, filters)
- **SEO First**: Implement metadata and structured data at page level for optimal search visibility
- **Component Separation**: Separate UI logic from SEO/metadata concerns in complex pages
- **Accessibility**: Use semantic HTML, ARIA labels, and keyboard navigation throughout
- **Performance**: Optimize for static generation and minimal client-side JavaScript