# Design Document

## Overview

This document outlines the technical design for the D' Knotty Cottons landing page—a responsive single-page website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The design prioritizes a warm, artisanal aesthetic that reflects the handmade nature of the crochet business while ensuring modern performance and accessibility standards.

## Architecture

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme configuration
- **Font**: Inter (Google Fonts) for body, optional script font for accents
- **Icons**: Lucide React for consistent iconography
- **QR Code**: `qrcode.react` library for QR code generation

### Project Structure

```
/app
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Main landing page composing all sections
  globals.css         # Global styles and Tailwind imports
/components
  /ui
    Button.tsx        # Reusable button component
    Card.tsx          # Card container component
    Section.tsx       # Section wrapper with consistent spacing
    Input.tsx         # Form input component
    Textarea.tsx      # Form textarea component
  /sections
    Header.tsx        # Navigation header with mobile menu
    Hero.tsx          # Hero section with CTAs
    About.tsx         # About section with brand story
    Products.tsx      # Product gallery grid
    Contact.tsx       # Contact info and form
    Reviews.tsx       # Customer reviews with QR code
    Footer.tsx        # Footer with links and copyright
  /icons
    Logo.tsx          # Cat-yarn logo SVG component
    SocialIcons.tsx   # Social media icon components
/lib
  constants.ts        # Brand colors, contact info, navigation
  utils.ts            # Helper functions (cn utility)
/public
  /images             # Product placeholder images
```

## Components and Interfaces

### UI Components

#### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}
```
- Primary: Warm brown background (#8B7355) with cream text
- Secondary: Cream background with brown text and border
- Outline: Transparent with brown border

#### Card Component
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
```
- Soft cream background
- Rounded corners (rounded-2xl)
- Optional hover shadow effect

#### Section Component
```typescript
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'cream' | 'white' | 'warm';
}
```
- Consistent vertical padding (py-16 md:py-24)
- Max-width container with horizontal padding
- Alternating background options

### Section Components

#### Header Component
- Fixed/sticky positioning
- Logo + business name on left
- Navigation links: Home, About, Custom Orders, Contact
- Mobile: Hamburger menu with slide-out drawer
- Smooth scroll behavior on link click

#### Hero Component
- Full viewport height option or generous padding
- Headline: "Crafted with Love, Just for You"
- Subheadline: "Discover unique handmade crochet creations or imagine your custom piece"
- Primary CTA: "Explore Shop" → scrolls to Products
- Secondary CTA: "Create Custom" → scrolls to Contact
- Decorative crochet-inspired background pattern
- Product preview images on desktop

#### About Component
- Two-column layout on desktop (text + decorative element)
- Headline: "Our Story & Craft"
- Brand story content emphasizing handmade quality
- "Dream It, We'll Crochet It" custom order highlight
- Decorative cat logo element

#### Products Component
- Section headline: "Our Creations"
- Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop
- Product cards with:
  - Placeholder image
  - Product name
  - Price placeholder
  - Hover effect
- "View More" or custom order CTA button

#### Contact Component
- Two-column layout: Contact info + Contact form
- Contact info with clickable links:
  - Instagram icon + handle
  - Facebook icon + page name
  - Email icon + address (mailto:)
  - Phone icon + number (tel:)
  - Location pin + "Zamboanga City"
- Contact form with validation

#### Reviews Component
- Section headline: "Customer Love"
- Review cards in horizontal scroll or grid
- QR code component with "Scan Me" label
- Star rating display (★★★★★)
- "Please leave a review" call-to-action

#### Footer Component
- Dark warm background for contrast
- Logo and tagline
- Quick links
- Contact info repeated
- Social icons
- Copyright: "© 2026 D' Knotty Cottons. All rights reserved."

## Data Models

### Contact Form Data
```typescript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
```

### Navigation Item
```typescript
interface NavItem {
  label: string;
  href: string;
}
```

### Product Item (Placeholder)
```typescript
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}
```

### Review Item
```typescript
interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}
```

### Brand Constants
```typescript
const BRAND = {
  name: "D' Knotty Cottons",
  tagline: "Handmade Crochet Shop",
  location: "Zamboanga City",
  email: "Dknottycottons@gmail.com",
  phone: "+63-905-193-3830",
  website: "Dknottycottons.com",
  instagram: "@dknottycottons",
  facebook: "Dknottycottons",
};

const COLORS = {
  cream: "#F9F7F4",
  warmBrown: "#8B7355",
  lightBrown: "#D4A574",
  softBlue: "#A3C4D9",
  darkText: "#333333",
  warmBeige: "#E8E0D5",
};
```

## Error Handling

### Contact Form
- Client-side validation before submission
- Required field validation with inline error messages
- Email format validation using regex pattern
- Success state: Display confirmation message, reset form
- Error state: Display error message, preserve form data
- Loading state: Disable submit button, show spinner

### Image Loading
- Use Next.js Image component with placeholder blur
- Fallback for failed image loads
- Skeleton loading states

## Testing Strategy

### Component Testing
- Unit tests for form validation logic
- Component render tests for each section
- Accessibility testing with jest-axe

### Visual Testing
- Responsive breakpoint verification
- Cross-browser compatibility check
- Color contrast validation

### Integration Testing
- Navigation smooth scroll functionality
- Form submission flow
- Mobile menu toggle behavior

## Visual Design Specifications

### Color Palette (Tailwind Config)
```javascript
colors: {
  brand: {
    cream: '#F9F7F4',
    brown: '#8B7355',
    'light-brown': '#D4A574',
    beige: '#E8E0D5',
    'soft-blue': '#A3C4D9',
  }
}
```

### Typography Scale
- H1: text-4xl md:text-5xl lg:text-6xl, font-bold
- H2: text-3xl md:text-4xl, font-semibold
- H3: text-xl md:text-2xl, font-semibold
- Body: text-base (16px), font-normal
- Small: text-sm (14px)

### Spacing System
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Component gaps: gap-4, gap-6, gap-8

### Border Radius
- Buttons: rounded-full or rounded-lg
- Cards: rounded-2xl
- Images: rounded-xl
- Inputs: rounded-lg

### Shadows
- Cards: shadow-sm hover:shadow-md
- Buttons: shadow-sm
- Header: shadow-sm (on scroll)

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column, hamburger menu, stacked CTAs |
| Tablet | 768-1024px | 2-column grids, expanded nav |
| Desktop | > 1024px | Multi-column layouts, full navigation |

## Accessibility Considerations

- Semantic HTML structure (header, main, section, footer)
- ARIA labels on interactive elements
- Focus visible states on all interactive elements
- Skip to main content link
- Alt text on all images
- Minimum touch target size: 44x44px
- Color contrast ratio: minimum 4.5:1 for text

## Performance Optimizations

- Next.js Image component for automatic optimization
- Font optimization with next/font
- Component lazy loading for below-fold sections
- Minimal JavaScript bundle
- CSS purging via Tailwind
