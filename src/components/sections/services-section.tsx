import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Layers3,
  BriefcaseBusiness,
  Presentation,
  CodeXml,
} from "lucide-react";

const services = [
  {
    icon: <Layers3 className="h-10 w-10 text-primary" />,
    title: "BIM",
    description:
      "Comprehensive BIM services from 3D modeling to 7D facility management, ensuring project accuracy and efficiency.",
  },
  {
    icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
    title: "Consulting",
    description:
      "Expert guidance on BIM implementation, digital strategy, and workflow optimization for AEC firms.",
  },
  {
    icon: <Presentation className="h-10 w-10 text-primary" />,
    title: "Training",
    description:
      "Customized training programs for teams and individuals to master BIM software and best practices.",
  },
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: "Software Development",
    description:
      "Bespoke software and automation tools designed to solve your unique challenges and enhance productivity.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Core Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a complete suite of services to empower your projects from
            concept to completion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="text-center hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="mx-auto bg-secondary p-4 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
