"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const isEN = pathname === "/en" || pathname.startsWith("/en/");

  const { fiPath, enPath } = useMemo(() => {
    if (isEN) {
      const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
      return { fiPath: stripped, enPath: pathname };
    } else {
      const next = pathname === "/" ? "/en" : `/en${pathname}`;
      return { fiPath: pathname, enPath: next };
    }
  }, [pathname, isEN]);

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        type="button"
        onClick={() => router.push(fiPath)}
        className={`rounded px-2 py-1 transition ${
          !isEN
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        aria-pressed={!isEN}
        aria-label="Vaihda suomeksi"
      >
        FI
      </button>
      <span className="text-slate-400">/</span>
      <button
        type="button"
        onClick={() => router.push(enPath)}
        className={`rounded px-2 py-1 transition ${
          isEN
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        aria-pressed={isEN}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
