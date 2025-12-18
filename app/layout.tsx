import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Cajuína Dona Júlia",
  description: "Site institucional: história, processo, galeria e contato — sem vendas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh">
        {children}
      </body>
    </html>
  );
}
