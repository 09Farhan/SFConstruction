import { setRequestLocale, getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/ui/ContactForm";
import { businessInfo } from "@/data/business";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default async function ContactPage({
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
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t("contact")} Us
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Ready to start your next remodeling project? Fill out the form below for a free estimate, or reach out to us directly via phone or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-2 bg-background border border-border p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Request a Free Quote
            </h2>
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div className="bg-background border border-border p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 text-primary shrink-0 h-fit rounded-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Phone</p>
                    <a href={`tel:${businessInfo.phone}`} className="text-foreground/70 hover:text-primary transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 text-primary shrink-0 h-fit rounded-sm">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Email</p>
                    <a href={`mailto:${businessInfo.email}`} className="text-foreground/70 hover:text-primary transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 text-primary shrink-0 h-fit rounded-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Address</p>
                    <p className="text-foreground/70">
                      {businessInfo.address.street}<br/>
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 text-primary shrink-0 h-fit rounded-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Business Hours</p>
                    <p className="text-foreground/70">
                      Mon - Fri: 8:00 AM - 6:00 PM<br/>
                      Sat: 9:00 AM - 2:00 PM<br/>
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple Map Placeholder */}
            <div className="bg-muted w-full h-64 border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center flex-col z-10 p-6 text-center">
                  <MapPin className="h-8 w-8 text-foreground/50 mb-2" />
                  <span className="font-medium text-foreground/70">Map View Available in Production</span>
                </div>
                {/* Normally we'd use Google Maps iframe here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
