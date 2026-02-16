import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LayoutWithToggle } from "@/components/LayoutWithToggle";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Diego Silvas",
  description:
    "Ing. en Sistemas Computacionales. Creo sitios modernos, rápidos y a medida. E-commerce, landings y aplicaciones web.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <LayoutWithToggle>{children}</LayoutWithToggle>
        </LanguageProvider>
      </body>
    </html>
  );
}
