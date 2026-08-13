import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Quality Craftsmanship",
      description: "We take pride in our attention to detail and deliver results that stand the test of time."
    },
    {
      title: "Reliable Communication",
      description: "We keep you informed throughout the entire project, ensuring a smooth and stress-free experience."
    },
    {
      title: "Customer Satisfaction",
      description: "Your vision is our priority. We work closely with you to ensure your expectations are exceeded."
    },
    {
      title: "Free Estimates",
      description: "We provide clear, honest, and competitive pricing upfront with no hidden surprises."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              Why Homeowners Choose Us
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Remodeling your home is a big decision. We bring expertise, integrity, and a commitment to quality to every project, ensuring your investment is in the right hands.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-foreground/70">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581858326456-9d29fc6ce2a1?q=80&w=1974&auto=format&fit=crop"
              alt="Quality Remodeling Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Design accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
