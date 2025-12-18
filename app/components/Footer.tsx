export default function Footer() {
  const phones = [
    { label: "Valença", number: "(86) 99978-1685", wa: "5586999781685" },
    { label: "Teresina", number: "(86) 99941-7686", wa: "5586999417686" },
    { label: "WhatsApp", number: "(86) 99956-3817", wa: "5586999563817" },
  ];

  const year = new Date().getFullYear();

  const msg = encodeURIComponent(
    "Olá, tenho interesse na Cajuína Dona Júlia e gostaria de mais informações."
  );

  return (
    <footer className="mt-20 border-t border-black/5 bg-white/70">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-10 xl:max-w-7xl 2xl:max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-orange text-sm font-black text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)]">
                CJ
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Cajuína Dona Júlia
                </p>
                <p className="text-xs text-black/60">Produto artesanal do Piauí</p>
              </div>
            </div>

            <p className="mt-4 max-w-prose text-sm text-black/70">
              Cajuína Dona Júlia: tradição do Piauí em um produto artesanal, com
              história, processo bem definido e cuidado em cada garrafa.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#galeria"
                className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)] hover:brightness-95"
              >
                Ver galeria
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 hover:bg-black/5"
              >
                Fale com a gente
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            <div>
              <p className="text-sm font-semibold">Navegação</p>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li>
                  <a className="hover:text-black" href="#historia">
                    História
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#processo">
                    Processo
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#marca">
                    A Marca
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#galeria">
                    Galeria
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#contato">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Contato</p>
              <p className="mt-3 text-sm text-black/70">
                BR-316, KM 280 — Valença do Piauí • PI
              </p>

              <div className="mt-4 space-y-2">
                {phones.map((p) => (
                  <a
                    key={p.wa}
                    href={`https://wa.me/${p.wa}?text=${msg}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm hover:bg-black/5"
                  >
                    <span className="text-black/70">{p.label}</span>
                    <span className="font-semibold text-black/80">
                      {p.number}
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-4 text-xs text-black/55">
                Atendimento via WhatsApp e telefone.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-black/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Cajuína Dona Júlia. Todos os direitos reservados.</p>
          <p>Produzida em Valença do Piauí • PI.</p>
        </div>
      </div>
    </footer>
  );
}
