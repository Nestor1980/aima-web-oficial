import { HeroDiagram } from "./hero-diagram";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0B0F14] py-24 text-[#F3F4F9] md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(139,179,255,0.12) 1px, transparent 1px), linear-gradient(115deg, transparent 18%, rgba(91,141,239,0.08) 54%, rgba(139,108,246,0.06) 72%, transparent 92%)",
          backgroundSize: "34px 34px, 100% 100%",
          WebkitMaskImage:
            "radial-gradient(ellipse at 65% 30%, black 0%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse at 65% 30%, black 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-10 lg:px-16">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 flex-shrink-0">
              <circle cx="10" cy="10" r="7" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="10" y1="1" x2="10" y2="5" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="10" y1="15" x2="10" y2="19" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="1" y1="10" x2="5" y2="10" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="15" y1="10" x2="19" y2="10" stroke="#D4652F" strokeWidth="1.4" />
            </svg>
            <span className="font-code text-xs uppercase tracking-widest text-[#9FB0CC]">
              AIMA BIM — Paraná, AR
            </span>
          </div>

          <h1 className="max-w-[16ch] font-headline text-4xl font-extrabold leading-tight md:text-6xl">
            Working for the{" "}
            <span className="text-[#5B8DEF]">AECO sector</span>
          </h1>

          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[#C9CFDD]">
            A nearshore team that models, coordinates, and delivers — so your
            firm keeps the client relationship, the schedule, and the sign-off.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#5B8DEF] px-6 py-3 font-code text-xs font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#3F6FD6] hover:shadow-[0_8px_22px_-8px_rgba(91,141,239,0.55)]"
            >
              Schedule a Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-code text-xs font-semibold uppercase tracking-wide text-[#F3F4F9] transition hover:border-white hover:bg-white/10"
            >
              See Capabilities
            </a>
          </div>

          <div className="mt-11 flex flex-wrap gap-2.5">
            {[
              "Revit & Navisworks fluent",
              "LOD 300–400 delivery",
              "Eastern / Central overlap",
              "Native-quality English",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-code text-xs text-[#D6DCE9]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
}
