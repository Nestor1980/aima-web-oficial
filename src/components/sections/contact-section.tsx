import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary text-primary-foreground rounded-lg p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Innovate?
          </h2>
          <p className="max-w-xl mx-auto text-lg text-primary-foreground/80 mb-8">
            Let's discuss how AIMA can elevate your next project. Contact us
            today to start building the future together.
          </p>
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
