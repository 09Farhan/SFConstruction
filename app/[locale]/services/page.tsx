import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { services } from "@/data/services";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Navigation" });

  return (
    <main className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t("services")}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            We provide a comprehensive range of remodeling and construction services to homeowners in Kissimmee and Central Florida. From complete bathroom renovations to custom patio construction, our skilled team is ready to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col border border-border bg-surface p-6">
              <div className="p-3 bg-primary/10 text-primary rounded-sm w-fit mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {locale === "es" ? service.titleEs : service.titleEn}
              </h2>
              <p className="text-foreground/70 mb-8 flex-1">
                {locale === "es" ? service.descriptionEs : service.descriptionEn}
              </p>
              
              <Link href={`/contact?service=${service.id}`}>
                <Button variant="outline" className="w-full">
                  Request a Quote
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
