import { Logo } from "@/components/ui/logo";

/** Pantalla de carga: idéntica a la intro para que no haya salto visual. */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B0F14]">
      <Logo className="h-16 text-[#F3F4F9] motion-safe:animate-pulse sm:h-24 md:h-32" />
    </div>
  );
}
