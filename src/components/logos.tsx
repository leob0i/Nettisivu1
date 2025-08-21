import { LOGOS } from "@/lib/data";

export default function Logos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-70">
      {LOGOS.map((name) => (
        <div
          key={name}
          className="h-10 rounded-md border border-slate-200 grid place-items-center text-xs"
          aria-label={`${name} logo`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
