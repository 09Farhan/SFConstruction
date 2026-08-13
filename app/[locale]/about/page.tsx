import { setRequestLocale, getTranslations } from "next-intl/server";
import { businessInfo } from "@/data/business";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export default async function AboutPage({
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              {t("about")} {businessInfo.name}
            </h1>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                {locale === "es" ? businessInfo.taglineEs : businessInfo.taglineEn} 
                We are proud to serve homeowners across Kissimmee and Central Florida with dedication and professional craftsmanship.
              </p>
              <p>
                Our team understands that your home is your most valuable asset. That's why we treat every remodeling, construction, or repair project with the utmost care and respect. Whether it is a complete bathroom makeover, custom flooring installation, or a simple repair, we are committed to delivering results that stand the test of time.
              </p>
              <p>
                We believe in clear communication, transparent pricing, and a customer-first approach. We aren't satisfied until you are thrilled with your newly transformed space.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="font-bold">Work With Us</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-sm overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=1974&auto=format&fit=crop"
              alt="Construction team at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
