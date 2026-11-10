import { Logo } from "@/components/ui/logo";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1220] py-20 text-[#F3F4F9] md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(139,179,255,0.14) 1px, transparent 1px), linear-gradient(125deg, rgba(91,141,239,0.09), transparent 48%, rgba(139,108,246,0.08))",
          backgroundSize: "34px 34px, 100% 100%",
          WebkitMaskImage:
            "radial-gradient(ellipse at 20% 30%, black 0%, transparent 68%)",
          maskImage:
            "radial-gradient(ellipse at 20% 30%, black 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-[1140px] px-5 md:px-16">
        <div className="mb-4 flex items-center gap-2">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 flex-shrink-0">
            <circle cx="10" cy="10" r="7" stroke="#D4652F" strokeWidth="1.4" />
            <line x1="10" y1="1" x2="10" y2="5" stroke="#D4652F" strokeWidth="1.4" />
            <line x1="10" y1="15" x2="10" y2="19" stroke="#D4652F" strokeWidth="1.4" />
            <line x1="1" y1="10" x2="5" y2="10" stroke="#D4652F" strokeWidth="1.4" />
            <line x1="15" y1="10" x2="19" y2="10" stroke="#D4652F" strokeWidth="1.4" />
          </svg>
          <span className="font-code text-xs uppercase tracking-widest text-[#9FB0CC]">
            Get in touch
          </span>
        </div>

        <h2 className="max-w-[16ch] font-headline text-3xl font-extrabold md:text-5xl">
          Start with a 20-minute call
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-[#C9CFDD]">
          Tell us what&apos;s on your desk — one project, or ongoing overflow
          capacity. We&apos;ll tell you honestly whether we&apos;re a fit.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:aima.consultora.bim@gmail.com"
            className="inline-flex items-center rounded-full bg-[#5B8DEF] px-6 py-3 font-code text-xs font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#3F6FD6] hover:shadow-[0_8px_22px_-8px_rgba(91,141,239,0.55)]"
          >
            Email AIMA
          </a>
          <a
            href="mailto:aima.consultora.bim@gmail.com?subject=Discovery%20Call%20Request"
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-code text-xs font-semibold uppercase tracking-wide text-[#F3F4F9] transition hover:border-white hover:bg-white/10"
          >
            Request a Call
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-code text-xs text-[#9FB0CC]">
          <span>aima.consultora.bim@gmail.com</span>
          <span>Paraná, Entre Ríos, Argentina</span>
          <span>
            Serving architecture firms, contractors &amp; developers —
            Florida &amp; broader U.S.
          </span>
        </div>

        <div className="mt-10 flex justify-start border-t border-white/10 pt-6 md:justify-end">
          <Logo title="AIMA BIM S.A.S." className="h-7 text-white sm:h-8" />
        </div>
      </div>
    </section>
  );
}
