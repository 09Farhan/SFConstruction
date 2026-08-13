import { Star, MapPin, CheckCircle } from "lucide-react";
import { businessInfo } from "@/data/business";

export function TrustBar() {
  return (
    <section className="bg-surface border-b border-border py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm sm:text-base font-medium text-foreground/80">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-foreground">
              {businessInfo.rating} Google Rating
            </span>
            <span className="hidden sm:inline">({businessInfo.reviewCount} Reviews)</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Serving Kissimmee & Central Florida</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>Free Estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
