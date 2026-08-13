import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

