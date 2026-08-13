import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          Ready to Transform Your Home?
        </h2>
        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-balance">
          Contact us today for a free estimate on your remodeling or construction project. We are ready to bring your vision to life.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-bold h-14 px-10 text-lg">
            Get Your Free Estimate
          </Button>
        </Link>
      </div>
    </section>
  );
}
