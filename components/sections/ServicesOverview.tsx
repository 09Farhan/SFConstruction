import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";

export function ServicesOverview() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  // Show top 6 services on homepage
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-foreground/70">
            From complete renovations to specialized installations, we bring experience and dedication to every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col bg-background border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={locale === "es" ? service.titleEs : service.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-sm">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground">
                    {locale === "es" ? service.titleEs : service.titleEn}
                  </h3>
                </div>
                <p className="text-foreground/70 mb-6 flex-1">
                  {locale === "es" ? service.descriptionEs : service.descriptionEn}
                </p>
                <Link href={`/services`} className="mt-auto">
                  <Button variant="outline" className="w-full font-semibold">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg" className="font-bold">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
