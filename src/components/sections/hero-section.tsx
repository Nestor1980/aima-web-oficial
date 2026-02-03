"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);

  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-the-edge");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Animation duration
    
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setOffsetY(window.pageYOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Loading Animation */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000 ease-in-out",
          !isLoading && "opacity-0 pointer-events-none"
        )}
      >
        <h1 className="text-8xl md:text-9xl font-light text-primary tracking-tighter animate-pulse">
          AIMA
        </h1>
      </div>

      {/* Parallax Background Image */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
            opacity: isLoading ? 0 : 1,
          }}
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/40 dark:bg-primary/60" />

      {/* Hero Content */}
      <div
        className={cn(
          "relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground transition-opacity duration-1000 ease-in-out px-4",
          isLoading && "opacity-0"
        )}
      >
        <h1 className="text-[calc(1.2*3.75rem)] md:text-[calc(1.2*4.5rem)] font-extralight tracking-tight drop-shadow-lg mb-4">
          AIMA Architecture and Engineering
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90 drop-shadow-md mb-8">
          Pioneering digital transformation in the AEC industry with expert BIM
          solutions, consulting, and software development.
        </p>
        <Button size="lg" asChild>
          <Link href="#services">Explore Our Services</Link>
        </Button>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000",
          isLoading && "opacity-0"
        )}
      >
        <ArrowDown className="h-8 w-8 text-primary-foreground animate-bounce" />
      </div>
    </section>
  );
}
