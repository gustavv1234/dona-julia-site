"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

type MediaItem = {
  src: string;
  title: string;
  subtitle?: string;
  description?: string;
  chips?: string[];
};

const products: MediaItem[] = [
  {
    src: "/images/gallery-lineup-front.jpg",
    title: "Cajuína Dona Júlia — Linha frontal",
    subtitle: "Padrão e consistência",
    description:
      "Lotes com aparência límpida e cor âmbar uniforme. Engarrafamento e rotulagem com cuidado para manter o padrão da marca.",
    chips: ["Linha principal", "Âmbar", "Rotulagem"],
  },
  {
    src: "/images/gallery-bottle-closeup.jpg",
    title: "Duas garrafas — rótulo em destaque",
    subtitle: "Identidade forte e artesanal",
    description:
      "Uma apresentação que valoriza a tradição do Piauí: garrafa, rótulo marcante e acabamento com personalidade.",
    chips: ["Rótulo marcante", "Tradição", "Artesanal"],
  },
  {
    src: "/images/gallery-packaging-boxes.jpg",
    title: "Embalagens e identidade (kraft)",
    subtitle: "Presenteável e reconhecível",
    description:
      "Caixas com visual artesanal (kraft) que reforçam a identidade da Dona Júlia e valorizam a experiência de quem recebe.",
    chips: ["Kraft", "Presenteável", "Identidade"],
  },
  {
    src: "/images/gallery-sizes.jpg",
    title: "Conteúdos e tamanhos",
    subtitle: "Variações de volume",
    description:
      "Apresentações em diferentes tamanhos para atender ocasiões variadas, mantendo a mesma identidade visual.",
    chips: ["Tamanhos", "Versatilidade", "Linha completa"],
  },
  {
    src: "/images/about-event-stand.jpg",
    title: "Presença em eventos",
    subtitle: "Tradição que aparece",
    description:
      "A Dona Júlia marca presença com exposição, degustação e apresentação do produto — reforçando origem e cultura.",
    chips: ["Evento", "Degustação", "Cultura"],
  },
];

const gallery: MediaItem[] = [
  { src: "/images/about-event-stand.jpg", title: "Evento/stand: presença e tradição" },
  { src: "/images/gallery-bottle-closeup.jpg", title: "Duas garrafas — rótulo em destaque" },
  { src: "/images/gallery-lineup-front.jpg", title: "Linha de garrafas (frente)" },
  { src: "/images/gallery-lineup-mixed.jpg", title: "Linha de garrafas (frente e verso)" },
  { src: "/images/gallery-packaging-boxes.jpg", title: "Caixas kraft e identidade" },
  { src: "/images/gallery-labels-details.jpg", title: "Detalhes do rótulo e selo" },
  { src: "/images/gallery-cashew-fruit.jpg", title: "Caju, castanha e origem" },
  { src: "/images/scene-duo-banner.jpg", title: "Cena com duas garrafas (banner)" },
  { src: "/images/gallery-single-outdoor.jpg", title: "Cajuína em ambiente externo" },
];

function Lightbox({
  item,
  onClose,
}: {
  item: MediaItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-xl bg-black/80 px-3 py-2 text-xs font-semibold text-white hover:bg-black"
        >
          Fechar (Esc)
        </button>

        <div className="relative aspect-[16/10] w-full bg-black/5">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-base font-semibold sm:text-lg">{item.title}</p>
          {item.subtitle ? (
            <p className="mt-1 text-sm text-black/60">{item.subtitle}</p>
          ) : null}

          {item.description ? (
            <p className="mt-3 text-sm text-black/75">{item.description}</p>
          ) : null}

          {item.chips?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.chips.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-black/70"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function InfiniteCarousel({
  items,
  onOpen,
}: {
  items: MediaItem[];
  onOpen: (item: MediaItem) => void;
}) {
  const loop = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FFF7EC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FFF7EC] to-transparent" />

      <div className="dj-marquee flex w-max gap-5 py-2">
        {loop.map((p, idx) => (
          <article
            key={`${p.src}-${idx}`}
            className="w-[280px] shrink-0 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:w-[340px] lg:w-[380px]"
          >
            <button
              type="button"
              onClick={() => onOpen(p)}
              className="relative block aspect-[4/3] w-full bg-black/5"
              aria-label={`Ampliar imagem de ${p.title}`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3 py-1 text-xs font-semibold text-black/80">
                Clique para ampliar
              </span>
            </button>

            <div className="p-5">
              <p className="text-sm font-semibold sm:text-base">{p.title}</p>
              {p.subtitle ? (
                <p className="mt-1 text-xs text-black/60 sm:text-sm">
                  {p.subtitle}
                </p>
              ) : null}

              {p.description ? (
                <p className="mt-3 text-sm text-black/70">{p.description}</p>
              ) : null}

              {p.chips?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.chips.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-black/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <style jsx global>{`
        @keyframes dj-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .dj-marquee {
          animation: dj-marquee 36s linear infinite;
        }
        .dj-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .dj-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const mainProducts = products;

  return (
    <div id="top" className="min-h-screen">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-10 xl:max-w-7xl 2xl:max-w-[1440px]">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex flex-wrap gap-2">
              {[
                "Suco de caju clarificado",
                "Não fermentado",
                "Não alcoólico",
                "Sem adição de açúcar",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-tight">
              Cajuína Dona Júlia:{" "}
              <span className="text-brand-orange">âmbar</span>,{" "}
              <span className="text-brand-red">tradicional</span> e{" "}
              <span className="text-brand-leaf">artesanal</span>.
            </h1>

            <p className="mt-5 max-w-prose text-base text-black/70 sm:text-lg">
              Um produto do Piauí feito a partir do caju, com processo cuidadoso
              de clarificação para alcançar a cor âmbar e um sabor limpo.
            </p>
            <p className="mt-2 max-w-prose text-sm text-black/65 sm:text-base">
              Aqui você conhece a história, o processo de produção e a nossa
              linha de produtos, com informações para encomendas e parcerias.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#produtos"
                className="rounded-2xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)] hover:brightness-95"
              >
                Ver produtos
              </a>
              <a
                href="#historia"
                className="rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/80 hover:bg-black/5"
              >
                Conhecer a história
              </a>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Aparência", d: "Cor âmbar e brilho característicos." },
                { t: "Perfil", d: "Não fermentado e não alcoólico." },
                { t: "Essência", d: "Sabor limpo e identidade artesanal." },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-3xl border border-black/5 bg-white/70 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
                >
                  <p className="text-xs font-semibold text-black/60">{c.t}</p>
                  <p className="mt-2 text-sm text-black/75">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/70 shadow-[0_22px_70px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <Image
                  src="/images/hero-duo.jpg"
                  alt="Garrafa de Cajuína Dona Júlia em destaque"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-2xl bg-brand-orange px-5 py-4 text-white shadow-[0_18px_40px_rgba(235,102,17,0.35)]">
                  <p className="text-xs font-semibold opacity-90">Destaque</p>
                  <p className="text-sm font-semibold">
                    Cor âmbar • tradição • caju
                  </p>
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                <div className="rounded-2xl border border-black/5 bg-white p-5">
                  <p className="text-xs font-semibold text-black/60">
                    Identidade
                  </p>
                  <p className="mt-2 text-sm text-black/75">
                    Rótulo marcante e visual artesanal, reconhecível de longe.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-5">
                  <p className="text-xs font-semibold text-black/60">
                    Qualidade
                  </p>
                  <p className="mt-2 text-sm text-black/75">
                    Clarificação e cuidado do preparo ao envase.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-brand-amber/40 blur-3xl" />
            <div className="absolute -left-12 -bottom-14 -z-10 h-56 w-56 rounded-full bg-brand-orange/25 blur-3xl" />
          </div>
        </section>

        {/* HISTÓRIA */}
        <section id="historia" className="mt-20 scroll-mt-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                História e identidade
              </h2>

              <p className="mt-4 text-sm text-black/70 sm:text-base">
                A Cajuína Dona Júlia nasce do respeito ao caju e à tradição do
                Piauí. A produção é cuidadosa para preservar a essência do
                produto: aparência límpida, cor âmbar e sabor limpo.
              </p>

              <p className="mt-4 text-sm text-black/70 sm:text-base">
                Da seleção da fruta ao envase, cada etapa reforça o compromisso
                com qualidade e consistência — valorizando a cultura e a origem.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Tradição", "Artesanal", "Piauí", "Identidade"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-semibold sm:text-xl">Nossa essência</h3>

              <p className="mt-4 text-sm text-black/70 sm:text-base">
                Produto não fermentado e não alcoólico, feito a partir de suco
                de caju clarificado, com foco na cor âmbar e no perfil leve do
                sabor.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Clarificação",
                    d: "Aparência límpida e cor âmbar característica.",
                  },
                  {
                    t: "Perfil leve",
                    d: "Não fermentado e não alcoólico.",
                  },
                  { t: "Sabor do caju", d: "Sem adição de açúcar." },
                  { t: "Padrão", d: "Cuidado do preparo ao envase." },
                ].map((i) => (
                  <div
                    key={i.t}
                    className="rounded-2xl border border-black/5 bg-white p-5"
                  >
                    <p className="text-sm font-semibold">{i.t}</p>
                    <p className="mt-2 text-sm text-black/70">{i.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="mt-20 scroll-mt-28">
          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl font-semibold sm:text-3xl">Processo</h2>
            <p className="mt-4 text-sm text-black/70 sm:text-base">
              Da seleção do caju ao envase: um caminho feito com cuidado para
              garantir aparência límpida, cor âmbar e padrão de qualidade em
              cada garrafa.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {[
                {
                  t: "Seleção",
                  d: "Escolha do caju e preparo da matéria-prima.",
                },
                { t: "Extração", d: "Obtenção do suco e filtragem inicial." },
                {
                  t: "Clarificação",
                  d: "Limpeza do suco para ficar límpido e âmbar.",
                },
                {
                  t: "Envase",
                  d: "Engarrafamento e rotulagem com cuidado.",
                },
              ].map((s) => (
                <div
                  key={s.t}
                  className="rounded-2xl border border-black/5 bg-white p-5"
                >
                  <p className="text-sm font-semibold">{s.t}</p>
                  <p className="mt-2 text-sm text-black/70">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-black/5 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Wx1iDm5VM5Y"
                  title="Processo de produção da Cajuína Dona Júlia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="space-y-3 text-sm text-black/70">
                <p className="font-semibold text-black/85">
                  Veja o processo na prática
                </p>
                <p>
                  No vídeo, você acompanha a seleção do caju, a extração do
                  suco, a clarificação e o envase, destacando a cor âmbar, a
                  limpeza da bebida e o cuidado artesanal em cada etapa.
                </p>
                <p>
                  É uma forma de mostrar, em detalhes, o compromisso da Cajuína
                  Dona Júlia com a qualidade e a tradição do Piauí.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A MARCA */}
        <section id="marca" className="mt-20 scroll-mt-28">
          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold sm:text-3xl">A Marca</h2>
                <p className="mt-2 max-w-prose text-sm text-black/70 sm:text-base">
                  A Cajuína Dona Júlia une tradição familiar, cuidado artesanal e
                  orgulho nordestino para apresentar uma bebida que representa o
                  Piauí no Brasil.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/55">
                  Missão
                </p>
                <p className="mt-2 text-sm text-black/75">
                  Produzir cajuína de qualidade, valorizando o caju, a cultura do
                  Piauí e a tradição artesanal, entregando uma bebida limpa,
                  autêntica e reconhecível.
                </p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/55">
                  Visão
                </p>
                <p className="mt-2 text-sm text-black/75">
                  Ser referência nacional em cajuína, levando a identidade do
                  Piauí para novos mercados e tornando a Dona Júlia sinônimo de
                  tradição e confiança.
                </p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/55">
                  Valores
                </p>
                <ul className="mt-2 space-y-1 text-sm text-black/75">
                  <li>Respeito à origem e ao produtor.</li>
                  <li>Qualidade em cada etapa do processo.</li>
                  <li>Transparência com parceiros e consumidores.</li>
                  <li>Orgulho da cultura nordestina.</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/55">
                  Identidade visual
                </p>
                <p className="mt-2 text-sm text-black/75">
                  A cor âmbar da bebida, os rótulos com referência regional e as
                  embalagens em kraft foram pensados para traduzir simplicidade,
                  autenticidade e presença de marca.
                </p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/55">
                  Reconhecimento
                </p>
                <p className="mt-2 text-sm text-black/75">
                  A Cajuína Dona Júlia participa de eventos, feiras e encontros
                  culturais, fortalecendo sua presença no Piauí e em outros
                  estados por meio de parcerias, degustações e ações
                  promocionais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="mt-20 scroll-mt-28">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Linha de produtos
              </h2>
              <p className="mt-2 text-sm text-black/70 sm:text-base">
                Conheça as principais apresentações da Cajuína Dona Júlia.
              </p>
            </div>

            <a
              href="#contato"
              className="inline-flex w-fit rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5"
            >
              Falar com a gente
            </a>
          </div>

          <div className="mt-8 rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.06)] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-black/55">
              Linha principal
            </p>
            <InfiniteCarousel items={mainProducts} onOpen={(i) => setSelected(i)} />
            <p className="mt-4 text-xs text-black/55">
              As imagens representam produtos reais da marca, em diferentes
              apresentações.
            </p>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="mt-20 scroll-mt-28">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Galeria</h2>
              <p className="mt-2 text-sm text-black/70 sm:text-base">
                Fotos reais da marca e do produto em diferentes momentos.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <figure
                key={img.src}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => setSelected(img)}
                  className="relative block aspect-[4/3] w-full"
                  aria-label={`Ampliar imagem: ${img.title}`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </button>
                <figcaption className="p-5 text-sm text-black/75">
                  {img.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mt-20 scroll-mt-28">
          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl font-semibold sm:text-3xl">Contato</h2>
            <p className="mt-3 text-sm text-black/70 sm:text-base">
              Fale com a gente para pedidos, parcerias e informações.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  E-mail ou WhatsApp
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="(xx) xxxxx-xxxx"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Mensagem</label>
                <textarea
                  className="mt-2 min-h-[140px] w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange/30"
                  placeholder="Escreva sua mensagem..."
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="rounded-2xl bg-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(235,102,17,0.28)] hover:brightness-95"
                >
                  Enviar
                </button>
                <p className="text-xs text-black/55">
                  Preencha os dados para entrar em contato com a Cajuína Dona
                  Júlia. O retorno é feito pelos canais informados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
