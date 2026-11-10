const risks = [
  {
    label: "Gig platforms",
    text: "Cheap, but no quality vetting and inconsistent QA.",
  },
  {
    label: "Offshore shops",
    text: "Low cost, but timezone gaps and communication friction slow reviews.",
  },
  {
    label: "Hiring internally",
    text: "Right skillset, but slow to scale up or down with project load.",
  },
];

const whyCards = [
  {
    title: "Time zone overlap",
    text: "Based in Argentina, working Eastern-time hours. Same-day answers on RFIs and coordination issues, not overnight silence.",
  },
  {
    title: "Communication you can hand to a client",
    text: "Documentation and coordination notes written in clear, professional English. No translation layer between us and your reviewer.",
  },
  {
    title: "You keep ownership of the deliverable",
    text: "AIMA produces; your team reviews, approves, and owns the output — a licensed sign-off, a permit set, or a coordination submittal.",
  },
  {
    title: "Standards fluency when it matters",
    text: "ISO 19650 and BEP-driven workflows for projects that require them. For everything else, we still model clean and document clearly.",
  },
];

export function AboutSection() {
  return (
    <>
      <section id="about" className="bg-[#F3F4F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1140px] px-5 md:px-16">
          <span className="inline-block rounded-full bg-[#5B8DEF]/10 px-3 py-1.5 font-code text-xs font-semibold uppercase tracking-wide text-[#3F6FD6]">
            The problem
          </span>
          <h2 className="mt-3.5 font-headline text-3xl font-bold text-[#0B1220] md:text-4xl">
            Overflow work shouldn&apos;t mean overflow risk
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <p className="text-lg leading-relaxed text-[#16213A]">
              Every firm hits the same wall: a project needs more modeling
              hands than the office has on the bench — whether you&apos;re an
              architecture studio, a design-build contractor, or a developer
              running your own coordination. The usual fixes come with a
              catch. AIMA sits in between: a production partner that models
              the way your team already works, close enough in time zone to
              be in your morning coordination call.
            </p>

            <div className="flex flex-col gap-3">
              {risks.map((risk) => (
                <div
                  key={risk.label}
                  className="flex items-start gap-3.5 rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(11,18,32,0.05),0_12px_28px_-16px_rgba(11,18,32,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(11,18,32,0.07),0_20px_40px_-18px_rgba(11,18,32,0.2)]"
                >
                  <b className="min-w-[9ch] flex-shrink-0 text-sm text-[#0B1220]">
                    {risk.label}
                  </b>
                  <span className="text-sm text-[#5B6478]">{risk.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#E8EAF3] py-20 md:py-24">
        <div className="mx-auto max-w-[1140px] px-5 md:px-16">
          <span className="inline-block rounded-full bg-[#2DB7A3]/10 px-3 py-1.5 font-code text-xs font-semibold uppercase tracking-wide text-[#2DB7A3]">
            Why AIMA
          </span>
          <h2 className="mt-3.5 font-headline text-3xl font-bold text-[#0B1220] md:text-4xl">
            A production partner, not a gig
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {whyCards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(11,18,32,0.05),0_12px_28px_-16px_rgba(11,18,32,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(11,18,32,0.07),0_20px_40px_-18px_rgba(11,18,32,0.2)] ${
                  index % 2 === 1 ? "md:mt-7" : ""
                }`}
              >
                <h3 className="mb-2 font-headline text-base font-bold text-[#0B1220]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5B6478]">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            <span className="mr-1.5 font-code text-xs uppercase tracking-wide text-[#5B6478]">
              Works within:
            </span>
            {["IFC4", "Revit", "Navisworks", "ISO 19650 (on request)"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#DCDFE9] bg-[#5B8DEF]/10 px-3.5 py-1.5 font-code text-xs text-[#16213A]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
