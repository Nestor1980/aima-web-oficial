export function Footer() {
  return (
    <footer className="bg-[#F3F4F9] py-10">
      <div className="mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-5 px-5 text-sm text-[#5B6478] md:flex-row md:items-center md:px-16">
        <span>© 2026 AIMA BIM S.A.S. — Paraná, Entre Ríos, Argentina</span>
        <span className="font-code text-xs">
          Also building <b className="font-semibold text-[#0B1220]">AIMA SaaS platforms</b> — Viewer Cloud · Digital Twin Platform · Asset Manager
        </span>
      </div>
    </footer>
  );
}
