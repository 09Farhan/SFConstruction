import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { businessInfo } from "@/data/business";
import { Phone } from "lucide-react";

export function Hero() {
  const t = useTranslations("Navigation");
  const c = useTranslations("Common");

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] max-h-[900px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Interior Remodeling"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight mb-6">
            Premium Remodeling & Home Improvement in Kissimmee
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed text-balance">
            {businessInfo.taglineEn} We deliver quality craftsmanship, reliability, and beautiful transformations across Central Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto font-bold text-lg h-14 px-8">
                {c("getFreeQuote")}
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`} tabIndex={-1}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold text-lg h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm gap-2">
                <Phone className="h-5 w-5" />
                {c("callNow")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
