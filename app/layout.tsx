import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SMK Telkom Purwokerto",
  description:
    "Website Profil SMK Telkom Purwokerto. Informasi jurusan, berita terbaru, dan profil sekolah.",
  keywords: ["SMK Telkom", "Purwokerto", "PPDB", "jurusan", "Berita"],
  authors: [{ name: "SMK Telkom Purwokerto" }],
  openGraph: {
    title: "SMK Telkom Purwokerto",
    description:
      "Website Profil SMK Telkom Purwokerto. Informasi jurusan, berita terbaru, dan profil sekolah.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
