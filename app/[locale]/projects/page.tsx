import { setRequestLocale, getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";

export default async function ProjectsPage({
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
            {t("projects")}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Explore our portfolio of recent home improvement projects. We take pride in delivering high-quality craftsmanship for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden bg-surface border border-border">
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={locale === "es" ? project.titleEs : project.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
                  {locale === "es" ? project.categoryEs : project.categoryEn} &bull; {project.location}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {locale === "es" ? project.titleEs : project.titleEn}
                </h3>
                <p className="text-foreground/70">
                  {locale === "es" ? project.descriptionEs : project.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
