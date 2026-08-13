import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { businessInfo } from '@/data/business';

export const metadata: Metadata = {
  title: "SF CONSTRUCTION MX LLC | Premium Remodeling in Kissimmee, FL",
  description: "An experienced company dedicated to interior remodeling, bathroom renovations, and construction in Kissimmee and Central Florida.",
  keywords: ["Remodeling contractor Kissimmee FL", "Bathroom remodeling Kissimmee", "Tile installation Kissimmee", "Drywall repair", "Home remodeling Central Florida"],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://sfconstructionmx.com',
  },
  icons: {
    icon: '/logo.jpg',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": businessInfo.name,
    "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
    "@id": process.env.NEXT_PUBLIC_SITE_URL || 'https://sfconstructionmx.com',
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://sfconstructionmx.com',
    "telephone": businessInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.street,
      "addressLocality": businessInfo.address.city,
      "addressRegion": businessInfo.address.state,
      "postalCode": businessInfo.address.zip,
      "addressCountry": "US"
    },
    "areaServed": businessInfo.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessInfo.rating.toString(),
      "reviewCount": businessInfo.reviewCount.toString()
    }
  };

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
