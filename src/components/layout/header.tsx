"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const links = [
  { href: "#services", label: "Capabilities" },
  { href: "#why", label: "Why AIMA" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B0F14]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 md:px-10 lg:px-16">
        <a href="#hero" aria-label="AIMA home" className="flex shrink-0 items-center">
          <Logo className="h-7 text-white sm:h-8" />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-code text-xs uppercase tracking-wide text-[#9FB0CC] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#5B8DEF] px-5 py-3 font-code text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#3F6FD6]"
          >
            Schedule a Call
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white md:hidden"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 border-t border-white/[0.08] bg-[#0B0F14] px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-code text-xs uppercase tracking-wide text-[#9FB0CC]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block rounded-full bg-[#5B8DEF] px-5 py-3 text-center font-code text-xs font-semibold uppercase tracking-wide text-white"
          >
            Schedule a Call
          </a>
        </nav>
      )}
    </header>
  );
}
