"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { QRCode } from "@/components/ui/QRCode";
import { REVIEWS, BRAND, type Review } from "@/lib/constants";

interface ReviewCardProps {
  review: Review;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card hover className="p-6 md:p-8">
      <div className="flex flex-col gap-4">
        <StarRating rating={review.rating} />
        <p className="text-brand-darkText leading-relaxed italic">
          &ldquo;{review.content}&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-brand-brown">{review.author}</span>
          <span className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Card>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" background="warm">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-brown mb-4">
          Customer Love
        </h2>
        <p className="text-brand-darkText max-w-2xl mx-auto">
          See what our happy customers have to say about their handmade treasures
        </p>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Call to Action with QR Code */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
        <div>
          <p className="text-lg text-brand-brown font-medium mb-2">
            Loved your purchase?
          </p>
          <p className="text-xl md:text-2xl font-semibold text-brand-brown">
            Please leave a review ★★★★★
          </p>
        </div>
        <QRCode
          url={`https://facebook.com/${BRAND.facebook}`}
          label="Scan Me"
          size={100}
        />
      </div>
    </Section>
  );
}
