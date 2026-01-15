"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/constants";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Card hover className="overflow-hidden group">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-brand-beige">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Placeholder overlay for missing images */}
        <div className="absolute inset-0 flex items-center justify-center bg-brand-beige/80">
          <svg
            className="w-16 h-16 text-brand-brown/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4 text-center">
        <h3 className="font-medium text-brand-brown mb-1">{name}</h3>
        <p className="text-brand-light-brown font-semibold">{price}</p>
      </div>
    </Card>
  );
}

export function Products() {
  return (
    <Section id="products" background="white">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-brown mb-4">
          Our Creations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Each piece is handcrafted with love and attention to detail. 
          Browse our collection or request a custom creation just for you.
        </p>
      </div>

      {/* Product grid - responsive: 1 col mobile, 2 tablet, 3-4 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      {/* CTA for custom orders */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Don't see what you're looking for?
        </p>
        <Button href="#contact" variant="primary" size="lg">
          Request Custom Order
        </Button>
      </div>
    </Section>
  );
}
