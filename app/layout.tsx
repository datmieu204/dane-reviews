import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0a0f1d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dane-reviews.vercel.app"),
  title: "Dane Reviews — Curated Picks & Recommendations",
  description: "Trang đề xuất sản phẩm chất lượng, phong cách tối giản từ Dane Reviews.",
  keywords: ["Dane Reviews", "affiliate", "sản phẩm đề xuất", "curated", "minimalist"],
  authors: [{ name: "Dane Reviews" }],
  openGraph: {
    title: "Dane Reviews — Curated Picks & Recommendations",
    description: "Trang đề xuất sản phẩm chất lượng, phong cách tối giản từ Dane Reviews.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/avatar.jpg",
        width: 600,
        height: 600,
        alt: "Dane Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dane Reviews — Curated Picks",
    description: "Trang đề xuất sản phẩm chất lượng, phong cách tối giản từ Dane Reviews.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-theme="dark" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body>
        <div className="mesh-gradient-bg" aria-hidden="true" />
        <div className="grid-overlay-pattern" aria-hidden="true" />
        <div className="page-container">{children}</div>
      </body>
    </html>
  );
}
