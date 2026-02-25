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
        <h1 className="flex items-center gap-4 text-8xl md:text-9xl font-light text-primary tracking-tighter animate-pulse">
  {/* El Logo */}
  <Image 
    src="/aimaLogoNegro2.png" 
    alt="AIMA Logo" 
    width={150} // Aumentamos de 100 a 150
    height={150} 
    /* Cambiamos w-20 por w-24 (móvil) y md:w-28 por md:w-36 (PC) */
    className="w-24 h-24 md:w-36 md:h-36 object-contain"
  />
  {/* El Texto */}
  <span>AIMA</span>
</h1>
      </div>

      {/* Logo fijo en la esquina superior izquierda */}
      <div 
        className={cn(
          "fixed top-4 left-6 md:top-6 md:left-10 z-[110] transition-opacity duration-1000",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      >
        <Link href="/">
          <Image 
            src="/aimaLogoBlanco.png" 
            alt="AIMA Logo" 
            width={50} 
            height={50} 
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))" }}
            className="w-10 h-10 md:w-14 md:h-14 object-contain hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/theedgevector.png"
          alt="Portada"
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
          }}
        />
        {/* Capa de color (Overlay) */}
        {/*<div className="absolute inset-0 bg-primary/40 dark:bg-primary/60 z-10" />*/}
      </div>

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
