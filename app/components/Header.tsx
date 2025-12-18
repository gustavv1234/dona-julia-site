"use client";

import { useState } from "react";

const links = [
  { href: "#historia", label: "História" },
  { href: "#processo", label: "Processo" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange text-white shadow-[0_12px_28px_rgba(235,102,17,0.25)]">
                CJ
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Cajuína Dona Júlia</p>
                <p className="text-xs text-black/55">Produto artesanal do Piauí</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-black/70 hover:text-black"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                className="rounded-xl bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(235,102,17,0.25)] hover:brightness-95"
              >
                Fale com a gente
              </a>
            </nav>

            <button
              className="md:hidden rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Abrir menu"
            >
              Menu
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-black/5 px-4 py-3">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-black/75 hover:bg-black/5"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-brand-orange px-3 py-2 text-sm font-semibold text-white"
                >
                  Fale com a gente
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
