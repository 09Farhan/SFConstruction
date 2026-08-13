import { ReactNode } from "react";
import { Hammer, Bath, Home, Square, Drill, PaintBucket, Sofa, Layout } from "lucide-react";

export type Service = {
  id: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  icon: any; // We'll type this as LucideIcon later or just any for now
  imageUrl: string;
};

export const services: Service[] = [
  {
    id: "general-remodeling",
    titleEn: "General Remodeling",
    titleEs: "Remodelación General",
    descriptionEn: "Complete home transformations and interior renovations tailored to your needs.",
    descriptionEs: "Transformaciones completas del hogar y renovaciones de interiores adaptadas a sus necesidades.",
    icon: Home,
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "bathroom-remodeling",
    titleEn: "Bathroom Remodeling",
    titleEs: "Remodelación de Baños",
    descriptionEn: "Premium bathroom upgrades, fixtures, and complete makeovers.",
    descriptionEs: "Mejoras premium para baños, accesorios y renovaciones completas.",
    icon: Bath,
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "tile-work",
    titleEn: "Tile Installation & Replacement",
    titleEs: "Instalación y Reemplazo de Azulejos",
    descriptionEn: "Expert tile work for floors, walls, and custom layouts.",
    descriptionEs: "Trabajo experto en azulejos para pisos, paredes y diseños personalizados.",
    icon: Square,
    imageUrl: "https://images.unsplash.com/photo-1588854337221-4cfb6fa6c589?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "drywall",
    titleEn: "Drywall Installation & Repair",
    titleEs: "Instalación y Reparación de Drywall",
    descriptionEn: "Seamless drywall repair, installation, and finishing.",
    descriptionEs: "Reparación, instalación y acabado de drywall sin costuras.",
    icon: Hammer,
    imageUrl: "https://images.unsplash.com/photo-1574360670868-b347a957b494?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "flooring",
    titleEn: "Flooring Installation & Repair",
    titleEs: "Instalación y Reparación de Pisos",
    descriptionEn: "Professional floor fitting and repair for various materials.",
    descriptionEs: "Instalación y reparación profesional de pisos para diversos materiales.",
    icon: Layout,
    imageUrl: "https://images.unsplash.com/photo-1581858326456-9d29fc6ce2a1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "basement-remodeling",
    titleEn: "Basement Remodeling",
    titleEs: "Remodelación de Sótanos",
    descriptionEn: "Transforming unfinished basements into functional living spaces.",
    descriptionEs: "Transformación de sótanos sin terminar en espacios habitables funcionales.",
    icon: Drill,
    imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "patio-construction",
    titleEn: "Patio Construction",
    titleEs: "Construcción de Patios",
    descriptionEn: "Beautiful custom patios to enhance your outdoor living area.",
    descriptionEs: "Hermosos patios personalizados para mejorar su área al aire libre.",
    icon: PaintBucket,
    imageUrl: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "home-services",
    titleEn: "Home Services & Interior Decorating",
    titleEs: "Servicios del Hogar y Decoración",
    descriptionEn: "Furniture assembly, TV mounting, and interior decoration.",
    descriptionEs: "Ensamblaje de muebles, montaje de TV y decoración de interiores.",
    icon: Sofa,
    imageUrl: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop",
  },
];
