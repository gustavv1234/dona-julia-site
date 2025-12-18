export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">Cajuína Dona Júlia</p>
            <p className="text-sm text-black/60">
              Site institucional: história, processo, galeria e contato — sem vendas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5"
            >
              Voltar ao topo
            </a>
            <a
              href="#contato"
              className="rounded-xl bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(235,102,17,0.25)] hover:brightness-95"
            >
              Contato
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-black/50">
          © {new Date().getFullYear()} Cajuína Dona Júlia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
