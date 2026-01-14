# Implementation Plan

- [x] 1. Initialize Next.js project and configure Tailwind







  - [x] 1.1 Create Next.js 14 project with TypeScript and App Router







    - Run `npx create-next-app@latest` with TypeScript, Tailwind, App Router options
    - Verify project structure is created correctly
    - _Requirements: 10.4_
  - [x] 1.2 Configure Tailwind with brand colors and custom theme


    - Add brand colors (cream, brown, light-brown, beige, soft-blue) to tailwind.config.ts
    - Configure font family with Inter
    - Set up custom border-radius and spacing tokens
    - _Requirements: 10.1, 10.2_
  - [x] 1.3 Set up global styles and fonts

    - Configure Inter font using next/font/google in layout.tsx
    - Set up globals.css with base styles and smooth scroll behavior
    - _Requirements: 10.4_

- [x] 2. Create constants and utility files






  - [x] 2.1 Create lib/constants.ts with brand data

    - Define BRAND object with name, tagline, location, contact info
    - Define COLORS object with hex values
    - Define NAV_ITEMS array for navigation
    - Define placeholder PRODUCTS and REVIEWS arrays
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.6_

  - [x] 2.2 Create lib/utils.ts with helper functions

    - Implement cn() utility for className merging using clsx and tailwind-merge
    - _Requirements: 10.4_

- [ ] 3. Build reusable UI components
  - [ ] 3.1 Create Button component
    - Implement variant props (primary, secondary, outline)
    - Implement size props (sm, md, lg)
    - Support both button and anchor element rendering
    - Add hover and focus states with brand colors
    - _Requirements: 2.2, 2.3, 10.2_
  - [ ] 3.2 Create Card component
    - Implement cream background with rounded corners
    - Add optional hover shadow effect
    - Support className override
    - _Requirements: 10.2_
  - [ ] 3.3 Create Section component
    - Implement consistent padding and max-width container
    - Support background color variants (cream, white, warm)
    - Support id prop for scroll targeting
    - _Requirements: 9.1, 9.2, 9.3_
  - [ ] 3.4 Create Input and Textarea components
    - Implement styled form inputs with brand styling
    - Add error state styling
    - Include proper accessibility attributes
    - _Requirements: 6.1, 11.2_

- [ ] 4. Create Logo and icon components
  - [ ] 4.1 Create Logo component with cat-yarn SVG
    - Implement SVG version of the black cat on yarn ball logo
    - Support size prop for different contexts
    - _Requirements: 10.3_
  - [ ] 4.2 Create social media icon components
    - Create Instagram, Facebook, Email, Phone, Location icons
    - Use Lucide React icons or custom SVGs
    - _Requirements: 5.2, 5.6_

- [ ] 5. Build Header component with navigation
  - [ ] 5.1 Create Header component structure
    - Implement fixed/sticky header with logo and nav links
    - Add smooth scroll onClick handlers for navigation
    - Style with brand colors and shadow on scroll
    - _Requirements: 1.1, 1.2_
  - [ ] 5.2 Implement mobile hamburger menu
    - Create hamburger icon button visible on mobile
    - Implement slide-out menu drawer with navigation links
    - Add close button and overlay
    - Handle body scroll lock when menu is open
    - _Requirements: 1.3, 1.4_

- [ ] 6. Build Hero section
  - [ ] 6.1 Create Hero component
    - Display headline "Crafted with Love, Just for You"
    - Display subheadline about custom crochet creations
    - Show location "Zamboanga City"
    - Add decorative background pattern or gradient
    - _Requirements: 2.1_
  - [ ] 6.2 Add Hero CTAs and product preview
    - Implement primary CTA button linking to products section
    - Implement secondary CTA button linking to contact section
    - Add product preview images on desktop layout
    - _Requirements: 2.2, 2.3, 2.4, 2.5_

- [ ] 7. Build About section
  - [ ] 7.1 Create About component
    - Display headline "Our Story & Craft" or "Handmade with Love & Care"
    - Include brand story content about handmade quality
    - Add gratitude message about customer support
    - Highlight custom order capability with "Dream It, We'll Crochet It"
    - Add decorative cat logo element
    - _Requirements: 3.1, 3.2, 3.3_

- [ ] 8. Build Products section
  - [ ] 8.1 Create Products component with gallery grid
    - Display section headline "Our Creations"
    - Implement responsive grid (1 col mobile, 2 tablet, 3-4 desktop)
    - Create product card with image, name, price placeholder
    - Add hover effects on product cards
    - Include CTA button for custom orders
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 9. Build Contact section
  - [ ] 9.1 Create Contact component with info display
    - Display headline "Find Us Here"
    - Show Instagram handle as clickable link
    - Show Facebook page as clickable link
    - Show email as mailto link
    - Show phone as tel link
    - Show website URL
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_
  - [ ] 9.2 Create ContactForm component
    - Implement form with name, email, message fields
    - Add client-side validation for required fields
    - Add email format validation
    - Implement form state management (submitting, success, error)
    - Display success/error messages
    - Console.log submission for MVP
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 10. Build Reviews section with QR code
  - [ ] 10.1 Create Reviews component
    - Display headline "Customer Love"
    - Create ReviewCard component for testimonials
    - Display minimum 2 placeholder review cards
    - Add star rating display
    - Include "Please leave a review ★★★★★" call-to-action
    - _Requirements: 7.1, 7.2, 7.4_
  - [ ] 10.2 Implement QR code component
    - Install and configure qrcode.react library
    - Create QRCode component with "Scan Me" label
    - Style to match brand aesthetic
    - _Requirements: 7.3_

- [ ] 11. Build Footer component
  - [ ] 11.1 Create Footer component
    - Display business name and tagline
    - Include all contact information with clickable links
    - Add social media icon links
    - Display copyright notice with current year
    - Style with contrasting background
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 12. Assemble main page and finalize
  - [ ] 12.1 Compose page.tsx with all sections
    - Import and arrange all section components
    - Ensure proper section ordering and IDs for navigation
    - Add metadata for SEO (title, description)
    - _Requirements: 1.2, 2.4, 2.5_
  - [ ] 12.2 Add responsive polish and accessibility
    - Verify all breakpoints render correctly
    - Add ARIA labels to interactive elements
    - Ensure keyboard navigation works
    - Test color contrast compliance
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 11.2, 11.3, 11.4_
  - [ ] 12.3 Optimize images and performance
    - Use Next.js Image component for all images
    - Add placeholder blur for images
    - Verify bundle size is minimal
    - _Requirements: 11.1_
