"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "História", href: "#historia" },
  { label: "Processo", href: "#processo" },
  { label: "A Marca", href: "#marca" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

function cn(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#historia");

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = NAV.map((item) => {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { href: item.href, top: rect.top };
      }).filter(Boolean) as { href: string; top: number }[];

      const current = sections
        .filter((s) => s.top <= 140)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActive(current.href);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-amber-100 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        scrolled ? "bg-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.05)]" : "bg-white/70"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-200 sm:px-6 lg:h-[4.25rem] lg:px-10 xl:max-w-7xl 2xl:max-w-[1440px]">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-orange text-sm font-black text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)]">
            CJ
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">
              Cajuína Dona Júlia
            </p>
            <p className="text-[11px] uppercase tracking-[0.12em] text-black/50">
              Produto artesanal do Piauí
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 md:flex">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3 py-1 text-sm font-medium transition-colors",
                active === l.href
                  ? "bg-brand-amber/15 text-brand-orange"
                  : "text-black/70 hover:text-black hover:bg-black/5"
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-2 rounded-xl bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)] hover:brightness-95"
          >
            Fale com a gente
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-black/80 hover:bg-black/5 md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/5 p-4">
              <p className="text-sm font-semibold">Navegação</p>
              <button
                type="button"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-black/80 hover:bg-black/5"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                Fechar
              </button>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {NAV.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold transition-colors",
                      active === l.href
                        ? "text-brand-orange"
                        : "text-black/80 hover:bg-black/5"
                    )}
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)] hover:brightness-95"
              >
                Fale com a gente
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
