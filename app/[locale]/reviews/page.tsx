import { setRequestLocale, getTranslations } from "next-intl/server";
import { businessInfo } from "@/data/business";
import { reviews } from "@/data/reviews";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Navigation" });

  return (
    <main className="py-20 md:py-28 bg-surface min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Client {t("reviews")}
          </h1>
          <div className="flex justify-center text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-10 w-10 fill-current" />
            ))}
          </div>
          <p className="text-xl font-bold text-foreground mb-2">
            {businessInfo.rating} Out of 5 Stars
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            Based on {businessInfo.reviewCount} verified reviews on Google.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" className="font-bold">
               Read More Reviews on Google
             </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-background border border-border p-8 sm:p-10 relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-border/60" />
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-foreground font-medium mb-6 relative z-10 leading-relaxed">
                "{locale === "es" ? review.textEs : review.textEn}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-bold text-foreground">{review.author}</p>
                  <p className="text-sm text-foreground/60">Verified {review.source} Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
