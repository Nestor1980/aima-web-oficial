import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "text-3xl font-black tracking-tighter text-primary",
        className
      )}
    >
      AIMA
    </div>
  );
}
