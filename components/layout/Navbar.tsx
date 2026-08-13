"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { businessInfo } from "@/data/business";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const t = useTranslations("Navigation");
  const c = useTranslations("Common");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: t("services") },
    { href: "/projects", label: t("projects") },
    { href: "/about", label: t("about") },
    { href: "/reviews", label: t("reviews") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <img 
                src="/logo.jpg" 
                alt="SF Construction MX LLC" 
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact" tabIndex={-1}>
              <Button className="gap-2">
                {c("getFreeQuote")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className="block text-lg font-medium text-foreground py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
              <Button className="w-full justify-center text-lg h-12">{c("getFreeQuote")}</Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`} className="mt-2 text-center text-foreground font-medium py-2 flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
