export type Project = {
  id: string;
  titleEn: string;
  titleEs: string;
  categoryEn: string;
  categoryEs: string;
  location: string;
  descriptionEn: string;
  descriptionEs: string;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    id: "modern-bathroom-kissimmee",
    titleEn: "Modern Bathroom Renovation",
    titleEs: "Renovación Moderna de Baño",
    categoryEn: "Bathroom",
    categoryEs: "Baño",
    location: "Kissimmee, FL",
    descriptionEn: "Complete bathroom overhaul including new tile, fixtures, flooring, and finishing work.",
    descriptionEs: "Renovación completa de baño incluyendo nuevos azulejos, accesorios, pisos y acabados.",
    imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "kitchen-floor-upgrade",
    titleEn: "Kitchen Tile Upgrade",
    titleEs: "Actualización de Azulejos de Cocina",
    categoryEn: "Tile Work",
    categoryEs: "Azulejos",
    location: "Orlando, FL",
    descriptionEn: "Installation of premium ceramic tile for a modern kitchen floor.",
    descriptionEs: "Instalación de azulejos de cerámica premium para un piso de cocina moderno.",
    imageUrl: "https://images.unsplash.com/photo-1588854337221-4cfb6fa6c589?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "basement-finishing",
    titleEn: "Basement Finishing",
    titleEs: "Acabado de Sótano",
    categoryEn: "Basement",
    categoryEs: "Sótano",
    location: "Kissimmee, FL",
    descriptionEn: "Transformed an unfinished basement into a comfortable family room with new drywall and flooring.",
    descriptionEs: "Transformación de un sótano sin terminar en una cómoda sala familiar con drywall y piso nuevos.",
    imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "outdoor-patio-construction",
    titleEn: "Custom Patio Construction",
    titleEs: "Construcción de Patio Personalizado",
    categoryEn: "Patio",
    categoryEs: "Patio",
    location: "Central Florida",
    descriptionEn: "Designed and built a custom outdoor patio space perfect for family gatherings.",
    descriptionEs: "Diseño y construcción de un espacio de patio al aire libre personalizado perfecto para reuniones familiares.",
    imageUrl: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop",
  }
];
