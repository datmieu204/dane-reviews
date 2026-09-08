import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#f3f0eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dane-reviews.vercel.app"),
  title: "Dane Reviews",
  description: "Dane Reviews — những sản phẩm mình đề xuất & phong cách sống tối giản.",
  keywords: ["Dane Reviews", "affiliate", "sản phẩm đề xuất", "review", "minimalist"],
  authors: [{ name: "Dane Reviews" }],
  openGraph: {
    title: "Dane Reviews",
    description: "Dane Reviews — những sản phẩm mình đề xuất & phong cách sống tối giản.",
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
    card: "summary",
    title: "Dane Reviews",
    description: "Dane Reviews — những sản phẩm mình đề xuất & phong cách sống tối giản.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <div className="ambient-glow" aria-hidden="true" />
        <div className="page-container">{children}</div>
      </body>
    </html>
  );
}
