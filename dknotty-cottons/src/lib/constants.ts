// Brand information
export const BRAND = {
  name: "D' Knotty Cottons",
  tagline: "Handmade Crochet Shop",
  location: "Zamboanga City",
  email: "Dknottycottons@gmail.com",
  phone: "+63-905-193-3830",
  website: "Dknottycottons.com",
  instagram: "@dknottycottons",
  facebook: "Dknottycottons",
} as const;

// Brand color palette
export const COLORS = {
  cream: "#F9F7F4",
  warmBrown: "#8B7355",
  lightBrown: "#D4A574",
  softBlue: "#A3C4D9",
  darkText: "#333333",
  warmBeige: "#E8E0D5",
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

// Placeholder products
export const PRODUCTS = [
  { id: "1", name: "Cozy Bear Amigurumi", price: "₱450", image: "/images/product-1.jpg" },
  { id: "2", name: "Flower Bouquet", price: "₱350", image: "/images/product-2.jpg" },
  { id: "3", name: "Baby Blanket", price: "₱800", image: "/images/product-3.jpg" },
  { id: "4", name: "Cat Keychain", price: "₱150", image: "/images/product-4.jpg" },
  { id: "5", name: "Tote Bag", price: "₱550", image: "/images/product-5.jpg" },
  { id: "6", name: "Bunny Plushie", price: "₱400", image: "/images/product-6.jpg" },
] as const;

// Placeholder reviews
export const REVIEWS = [
  {
    id: "1",
    author: "Maria S.",
    rating: 5,
    content: "Absolutely love my custom amigurumi! The attention to detail is amazing. Will definitely order again!",
    date: "2025-12-15",
  },
  {
    id: "2",
    author: "John D.",
    rating: 5,
    content: "Ordered a baby blanket as a gift and it was perfect. Soft, beautiful, and made with so much care.",
    date: "2025-11-28",
  },
  {
    id: "3",
    author: "Ana L.",
    rating: 5,
    content: "The crochet flowers look so real! Great quality and fast delivery. Highly recommend!",
    date: "2025-10-10",
  },
] as const;

// Type exports
export type NavItem = (typeof NAV_ITEMS)[number];
export type Product = (typeof PRODUCTS)[number];
export type Review = (typeof REVIEWS)[number];
