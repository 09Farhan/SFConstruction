import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const locale = useLocale();

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-background/80">
              Take a look at some of our recent remodeling and construction projects across Central Florida.
            </p>
          </div>
          <Link href="/projects" className="shrink-0">
            <Button variant="outline" className="text-background border-background/30 hover:bg-background hover:text-foreground">
              View Portfolio
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-72 sm:h-80 overflow-hidden bg-black"
            >
              <img 
                src={project.imageUrl} 
                alt={locale === "es" ? project.titleEs : project.titleEn}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-primary font-semibold text-sm mb-1 uppercase tracking-wider">
                  {locale === "es" ? project.categoryEs : project.categoryEn}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {locale === "es" ? project.titleEs : project.titleEn}
                </h3>
                <p className="text-sm text-white/70">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
