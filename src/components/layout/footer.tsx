import { Logo } from "@/components/ui/logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t" id="contact">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {year} AIMA Digital Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
