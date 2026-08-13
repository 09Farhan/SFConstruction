export type Review = {
  id: string;
  author: string;
  rating: number;
  textEn: string;
  textEs: string;
  source: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Google Reviewer", // Obfuscated real name as requested by prompt to not invent details unnecessarily.
    rating: 5,
    textEn: "Highly recommend him for any work around the house.",
    textEs: "Lo recomiendo altamente para cualquier trabajo en la casa.",
    source: "Google",
  },
  {
    id: "r2",
    author: "Google Reviewer",
    rating: 5,
    textEn: "He helped me build a laundry room in my garage.",
    textEs: "Me ayudó a construir un cuarto de lavado en mi garaje.",
    source: "Google",
  }
];
