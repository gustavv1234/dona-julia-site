import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

const gallery = [
  { src: "/images/gallery-duo-closeup-portrait.jpg", caption: "Duas garrafas — rótulo em destaque" },
  { src: "/images/gallery-single-outdoor.jpg", caption: "Garrafa em ambiente externo (luz natural)" },
  { src: "/images/gallery-lineup-front.jpg", caption: "Linha de garrafas (frente)" },
  { src: "/images/gallery-lineup-mixed.jpg", caption: "Linha de garrafas (frente e verso)" },
  { src: "/images/gallery-packaging-boxes.jpg", caption: "Caixas e identidade (kraft)" },
  { src: "/images/gallery-labels-details.jpg", caption: "Detalhes do rótulo e selo" },
  { src: "/images/gallery-bottle-closeup.jpg", caption: "Close da bebida (âmbar)" },
  { src: "/images/gallery-store-closeup.jpg", caption: "Produto em contexto real (close)" },
  { src: "/images/gallery-sizes.jpg", caption: "Conteúdo 500ml — variações e enquadramento" },
  { src: "/images/gallery-cashew-fruit.jpg", caption: "Origem: caju e natureza" },
  { src: "/images/scene-duo-banner.jpg", caption: "Cena com duas garrafas (banner)" },
  { src: "/images/about-event-stand.jpg", caption: "Evento/stand: presença e tradição" },
];

export default function HomePage() {
  return (
    <div id="top">
      <Header />

      <main className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 2xl:px-14">
        {/* HERO */}
        <section className="pt-10 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 2xl:gap-16">
            <div>
              <div className="inline-flex flex-wrap gap-2">
                {[
                  "Suco de caju clarificado",
                  "Não fermentado",
                  "Não alcoólico",
                  "Sem adição de açúcar",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs sm:text-sm text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
                Um site com cara de{" "}
                <span className="text-brand-orange">cajuína</span>: vivo, dourado e{" "}
                <span className="text-brand-red">artesanal</span>.
              </h1>

              <p className="mt-4 max-w-prose text-base sm:text-lg text-black/70">
                A Cajuína Dona Júlia carrega tradição, cuidado e identidade do Piauí.
                Aqui é institucional: história, processo, galeria e contato — <b>sem vendas</b>.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#galeria"
                  className="rounded-2xl bg-brand-orange px-6 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)] hover:brightness-95"
                >
                  Ver galeria
                </a>
                <a
                  href="#historia"
                  className="rounded-2xl border border-black/10 bg-white px-6 py-4 text-sm sm:text-base font-semibold text-black/80 hover:bg-black/5"
                >
                  Conhecer a história
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-black/5 bg-white/70 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-xs font-semibold text-black/60">Cor</p>
                  <p className="mt-1 text-sm sm:text-base text-black/75">
                    Âmbar dourado, como a bebida.
                  </p>
                </div>
                <div className="rounded-3xl border border-black/5 bg-white/70 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-xs font-semibold text-black/60">Matéria-prima</p>
                  <p className="mt-1 text-sm sm:text-base text-black/75">
                    Caju — símbolo e identidade.
                  </p>
                </div>
                <div className="rounded-3xl border border-black/5 bg-white/70 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-xs font-semibold text-black/60">Artesanal</p>
                  <p className="mt-1 text-sm sm:text-base text-black/75">
                    Simples, limpo e com personalidade.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD IMAGEM (grande + responsivo) */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
                <div className="relative h-[320px] sm:h-[420px] lg:h-[560px] 2xl:h-[620px]">
                  <Image
                    src="/images/hero-duo.jpg"
                    alt="Cajuína Dona Júlia em destaque"
                    fill
                    sizes="(min-width: 1536px) 45vw, (min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-2xl bg-brand-orange px-4 py-3 text-white shadow-[0_18px_40px_rgba(235,102,17,0.35)]">
                    <p className="text-xs font-semibold opacity-90">Destaque</p>
                    <p className="text-sm font-semibold">Âmbar + laranja + caju</p>
                  </div>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/5 bg-white p-5">
                    <p className="text-xs font-semibold text-black/60">Assinatura</p>
                    <p className="mt-1 text-sm sm:text-base text-black/75">
                      Rótulo forte, artesanal, com cara de tradição.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white p-5">
                    <p className="text-xs font-semibold text-black/60">Rótulo & garrafa</p>
                    <p className="mt-1 text-sm sm:text-base text-black/75">
                      Visual marcante: contraste, âmbar e identidade regional.
                    </p>
                  </div>
                </div>
              </div>

              {/* halo de cor */}
              <div className="absolute -right-8 -top-8 -z-10 h-36 w-36 rounded-full bg-brand-amber/40 blur-3xl" />
              <div className="absolute -left-10 -bottom-12 -z-10 h-52 w-52 rounded-full bg-brand-orange/25 blur-3xl" />
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section id="historia" className="mt-20 scroll-mt-28 lg:mt-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-semibold">História e identidade</h2>

              <p className="mt-4 text-black/70 sm:text-lg">
                A Cajuína Dona Júlia nasce do respeito ao caju e à tradição do Piauí.
                A gente preserva o que torna a cajuína única: aparência âmbar, sabor limpo e
                uma identidade artesanal que você reconhece de longe.
              </p>

              <p className="mt-4 text-black/70 sm:text-lg">
                Nosso produto é feito para manter a essência: suco de caju clarificado, não fermentado,
                não alcoólico e sem adição de açúcar — com cuidado em cada etapa, do preparo ao envase.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Tradição", "Artesanal", "Piauí", "Sem poluição visual"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg sm:text-xl font-semibold">Texto pronto (para colar no site)</h3>

              <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold text-black/60">Versão curta</p>
                <p className="mt-2 text-sm sm:text-base text-black/75">
                  “Da fruta ao âmbar: a Cajuína Dona Júlia carrega tradição do Piauí em cada garrafa.
                  Um produto artesanal, de sabor limpo e identidade marcante.”
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold text-black/60">Versão completa</p>
                <p className="mt-2 text-sm sm:text-base text-black/75">
                  “A Cajuína Dona Júlia é uma expressão do Piauí: feita a partir do caju, com processo
                  cuidadoso de clarificação para alcançar a cor âmbar e um sabor limpo. Mantemos uma
                  produção com identidade artesanal — do preparo ao envase — valorizando tradição,
                  simplicidade e qualidade em cada detalhe.”
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-black/80">O que a gente quer que você sinta</h4>
                <ul className="mt-3 space-y-3 text-sm sm:text-base text-black/75">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange" />
                    <span>O brilho âmbar em um visual leve e elegante.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
                    <span>O rótulo como referência: contraste e personalidade.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-leaf" />
                    <span>Origem e natureza: caju, folhas e uma pegada artesanal (kraft).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="mt-20 scroll-mt-28 lg:mt-28">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl sm:text-3xl font-semibold">Processo (visão geral)</h2>
            <p className="mt-4 text-black/70 sm:text-lg">
              Mostrando o caminho de forma simples, visual e bonita. (Depois você ajusta os textos
              para ficar 100% fiel ao processo real.)
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {[
                { t: "Seleção", d: "Escolha do caju e preparo da matéria-prima." },
                { t: "Extração", d: "Obtenção do suco e filtragem inicial." },
                { t: "Clarificação", d: "Limpeza e aparência mais límpida (âmbar)."},
                { t: "Envase", d: "Engarrafamento e rotulagem com cuidado." },
              ].map((s) => (
                <div key={s.t} className="rounded-2xl border border-black/5 bg-white p-5">
                  <p className="text-base font-semibold">{s.t}</p>
                  <p className="mt-2 text-sm sm:text-base text-black/70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="mt-20 scroll-mt-28 lg:mt-28">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Galeria</h2>
              <p className="mt-3 text-black/70 sm:text-lg">
                Fotos reais — pra deixar o site com cara de cajuína de verdade.
              </p>
            </div>
            <a
              href="#contato"
              className="hidden sm:inline-flex rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5"
            >
              Falar com a gente
            </a>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {gallery.map((img) => (
              <figure
                key={img.src}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(min-width: 1536px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="p-5 text-sm sm:text-base text-black/75">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mt-20 scroll-mt-28 lg:mt-28 pb-16">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl sm:text-3xl font-semibold">Contato</h2>
            <p className="mt-3 text-black/70 sm:text-lg">
              Por enquanto é visual. Depois você pode integrar WhatsApp, e-mail ou formulário real.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">E-mail ou WhatsApp</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="(xx) xxxxx-xxxx"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Mensagem</label>
                <textarea
                  className="mt-2 min-h-[140px] w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="Escreva sua mensagem..."
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="rounded-2xl bg-brand-orange px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)] hover:brightness-95"
                >
                  Enviar
                </button>
                <p className="text-xs text-black/55">
                  (Botão sem backend — só UI por enquanto.)
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </section>
      </main>
    </div>
  );
}
