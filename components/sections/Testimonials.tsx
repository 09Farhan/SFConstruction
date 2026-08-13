import { useLocale } from "next-intl";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";
import { businessInfo } from "@/data/business";

export function Testimonials() {
  const locale = useLocale();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            {businessInfo.rating} Rating on Google
          </h2>
          <p className="text-lg text-foreground/70">
            Based on verified Google reviews from our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-surface p-8 sm:p-10 relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-border/60" />
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground font-medium mb-6 relative z-10 leading-relaxed">
                "{locale === "es" ? review.textEs : review.textEn}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{review.author}</p>
                  <p className="text-sm text-foreground/60">Verified {review.source} Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
