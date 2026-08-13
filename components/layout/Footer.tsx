import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { businessInfo } from "@/data/business";

export function Footer() {
  const t = useTranslations("Navigation");
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.jpg" 
                alt="SF Construction MX LLC" 
                className="h-16 w-auto object-contain bg-black p-1 rounded-sm"
              />
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Premium remodeling and construction services in Kissimmee and Central Florida.
            </p>
            <div className="space-y-2 text-background/80 text-sm">
              <p>📍 {businessInfo.address.street}, {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
              <p>📞 <a href={`tel:${businessInfo.phone}`} className="hover:text-primary transition-colors">{businessInfo.phone}</a></p>
              <p>✉️ <a href={`mailto:${businessInfo.email}`} className="hover:text-primary transition-colors">{businessInfo.email}</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-background/70 hover:text-primary transition-colors">{t("home")}</Link></li>
              <li><Link href="/services" className="text-background/70 hover:text-primary transition-colors">{t("services")}</Link></li>
              <li><Link href="/projects" className="text-background/70 hover:text-primary transition-colors">{t("projects")}</Link></li>
              <li><Link href="/about" className="text-background/70 hover:text-primary transition-colors">{t("about")}</Link></li>
              <li><Link href="/contact" className="text-background/70 hover:text-primary transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Service Area</h3>
            <ul className="space-y-3 text-background/70">
              {businessInfo.serviceArea.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {businessInfo.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
