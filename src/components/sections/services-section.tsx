const capabilities = [
  {
    tag: "MEP",
    tagBg: "bg-[#5B8DEF]/10",
    tagText: "text-[#3F6FD6]",
    title: "MEP Modeling & Coordination",
    text: "LOD 300–400 mechanical, electrical, and plumbing models, coordinated against architectural and structural — built to how your team reviews and reissues.",
    wide: true,
  },
  {
    tag: "Coordination",
    tagBg: "bg-[#8B6CF6]/10",
    tagText: "text-[#8B6CF6]",
    title: "Clash Coordination",
    text: "Federated model review, clash detection, and a resolution log across every discipline in the set.",
    wide: false,
  },
  {
    tag: "Existing Conditions",
    tagBg: "bg-[#2DB7A3]/10",
    tagText: "text-[#2DB7A3]",
    title: "Scan-to-BIM",
    text: "Point cloud to as-built Revit models for renovation and adaptive reuse work.",
    wide: false,
  },
  {
    tag: "Authoring",
    tagBg: "bg-[#E0A63E]/15",
    tagText: "text-[#E0A63E]",
    title: "LOD Development & Model Authoring",
    text: "Carrying design intent from SD through CD, discipline by discipline, at the LOD your deliverable schedule requires.",
    wide: true,
  },
];

const process = [
  {
    n: "01",
    title: "Intake",
    text: "Scope, LOD, and deliverable format confirmed against how your team works — a formal BEP if you have one, or a clear brief if you don't.",
  },
  {
    n: "02",
    title: "Alignment",
    text: "Model standards, naming conventions, and coordination schedule locked before any modeling starts.",
  },
  {
    n: "03",
    title: "Production",
    text: "Discipline models built and internally QA'd against IFC validation checks before they reach you.",
  },
  {
    n: "04",
    title: "Coordination",
    text: "Federated review, clash tracking, and a resolution log delivered alongside the model.",
  },
  {
    n: "05",
    title: "Delivery",
    text: "Native files plus IFC export, documented and ready for your review and sign-off.",
  },
];

export function ServicesSection() {
  return (
    <>
      <section id="services" className="bg-[#F3F4F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1140px] px-5 md:px-16">
          <span className="inline-block rounded-full bg-[#5B8DEF]/10 px-3 py-1.5 font-code text-xs font-semibold uppercase tracking-wide text-[#3F6FD6]">
            Capabilities
          </span>
          <h2 className="mt-3.5 font-headline text-3xl font-bold text-[#0B1220] md:text-4xl">
            What we take off your plate
          </h2>
          <p className="mt-3.5 max-w-[60ch] text-base leading-relaxed text-[#5B6478]">
            Multi-discipline production and coordination — built for firms
            that need it done right, not just done cheap.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className={`rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(11,18,32,0.05),0_12px_28px_-16px_rgba(11,18,32,0.14)] transition hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(11,18,32,0.07),0_20px_40px_-18px_rgba(11,18,32,0.2)] ${
                  capability.wide ? "sm:col-span-2" : ""
                }`}
              >
                <span
                  className={`mb-3.5 inline-block rounded-full px-2.5 py-1 font-code text-[11px] font-semibold uppercase tracking-wide ${capability.tagBg} ${capability.tagText}`}
                >
                  {capability.tag}
                </span>
                <h3 className="mb-2 font-headline text-lg font-bold text-[#0B1220]">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5B6478]">
                  {capability.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0F1C] py-20 text-[#D7DEEB] md:py-24">
        <div className="mx-auto max-w-[1140px] px-5 md:px-16">
          <div className="mb-4 flex items-center gap-2">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 flex-shrink-0">
              <circle cx="10" cy="10" r="7" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="10" y1="1" x2="10" y2="5" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="10" y1="15" x2="10" y2="19" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="1" y1="10" x2="5" y2="10" stroke="#D4652F" strokeWidth="1.4" />
              <line x1="15" y1="10" x2="19" y2="10" stroke="#D4652F" strokeWidth="1.4" />
            </svg>
            <span className="font-code text-xs uppercase tracking-widest text-[#7C8FB5]">
              What comes back to you
            </span>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-[#F3F4F9] md:text-4xl">
            A model your team can actually open and trust.
          </h2>
          <p className="mt-3.5 max-w-[60ch] text-base leading-relaxed text-[#AEB9CE]">
            Every element carries real data — not just geometry. Here&apos;s
            the shape of what a coordinated wall looks like when it lands in
            your inbox.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="overflow-x-auto rounded-2xl border border-[#8FB3E8]/15 bg-[#0A1526] p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]">
              <pre className="font-code text-sm leading-loose">
                <span className="text-[#5E7096]">
                  {"// IfcWallStandardCase — Level 02, Grid C-4"}
                </span>
                {"\n"}
                <span className="text-[#8FB3E8]">Name</span>
                {"        "}
                <span className="text-[#E3AE79]">&quot;EXT-WALL-01&quot;</span>
                {"\n"}
                <span className="text-[#8FB3E8]">Material</span>
                {"    "}
                <span className="text-[#E3AE79]">
                  &quot;CMU 8in + Stucco&quot;
                </span>
                {"\n"}
                <span className="text-[#8FB3E8]">FireRating</span>
                {"  "}
                <span className="text-[#E3AE79]">&quot;2 HR&quot;</span>
                {"\n"}
                <span className="text-[#8FB3E8]">LOD</span>
                {"         "}
                <span className="text-[#E3AE79]">350</span>
                {"\n"}
                <span className="text-[#8FB3E8]">Discipline</span>
                {"  "}
                <span className="text-[#E3AE79]">&quot;Architectural&quot;</span>
                {"\n"}
                <span className="text-[#8FB3E8]">Coordination</span>{" "}
                <span className="text-[#2DB7A3]">
                  ✓ Clash-checked, MEP + Struct
                </span>
              </pre>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "Named, classified, and parameterized elements — not dumb geometry your team has to fix before using.",
                "Clash-checked against every discipline in the set before it reaches your inbox.",
                "Delivered native, plus IFC export, so it opens clean in whatever your office standardizes on.",
              ].map((text, index) => (
                <div
                  key={text}
                  className="flex items-start gap-3.5 rounded-2xl border border-[#8FB3E8]/10 bg-white/[0.03] p-4"
                >
                  <span className="flex-shrink-0 font-code text-sm font-semibold text-[#5B8DEF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-[#C4CCDE]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#F3F4F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1140px] px-5 md:px-16">
          <span className="inline-block rounded-full bg-[#5B8DEF]/10 px-3 py-1.5 font-code text-xs font-semibold uppercase tracking-wide text-[#3F6FD6]">
            Process
          </span>
          <h2 className="mt-3.5 font-headline text-3xl font-bold text-[#0B1220] md:text-4xl">
            How an engagement runs
          </h2>

          <div className="mt-10 flex flex-col gap-3.5">
            {process.map((step) => (
              <div
                key={step.n}
                className="flex items-start gap-5 rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(11,18,32,0.05),0_12px_28px_-16px_rgba(11,18,32,0.14)] transition hover:translate-x-1 hover:shadow-[0_4px_10px_rgba(11,18,32,0.07),0_20px_40px_-18px_rgba(11,18,32,0.2)]"
              >
                <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-[#0B1220] font-code text-sm font-semibold text-[#F3F4F9]">
                  {step.n}
                </span>
                <div>
                  <h3 className="mb-1 font-headline text-base font-bold text-[#0B1220]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5B6478]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
