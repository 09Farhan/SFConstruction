"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    // @ts-ignore - The router expects specific pathnames but we use generic string for flexibility
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2 px-3 py-2"
    >
      <span className={locale === "en" ? "font-bold text-primary" : ""}>EN</span>
      <span className="text-foreground/40">|</span>
      <span className={locale === "es" ? "font-bold text-primary" : ""}>ES</span>
    </button>
  );
}
