import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Pioneering Digital Innovation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AIMA Digital Innovations is at the forefront of the architecture,
            engineering, and construction (AEC) industry's digital
            transformation. We specialize in leveraging Building Information
            Modeling (BIM) to deliver cutting-edge solutions, from strategic
            consulting and professional training to bespoke software
            development. Our mission is to enhance efficiency, collaboration,
            and sustainability in every project we touch.
          </p>
        </div>
      </div>
    </section>
  );
}
