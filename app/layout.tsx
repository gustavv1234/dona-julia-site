import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Cajuína Dona Júlia | Site institucional",
  description:
    "Cajuína Dona Júlia: tradição do Piauí em um produto artesanal. Conheça a história, o processo e veja a galeria de fotos.",
  applicationName: "Cajuína Dona Júlia",
  openGraph: {
    title: "Cajuína Dona Júlia",
    description: "Site institucional: história, processo, galeria e contato.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-brand-cream text-black antialiased">
        {children}
      </body>
    </html>
  );
}
