import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ochanissi.com"),
  alternates: {
    canonical: "https://ochanissi.com",
  },
  title: "Mirel Bițoi - Full-Stack Developer",
  description:
    "Mirel Bițoi is a Full-Stack Developer working in Bucharest, Romania.",
  keywords:
    "Mirel Bițoi, Mirel Bitoi, Full-Stack Developer, Frontend Developer, Backend Developer, Software Developer, Software Engineer, Web Developer, User Experience, UI/UX Design, IT, Technology",
  openGraph: {
    locale: "en_US",
    siteName: "Mirel Bițoi",
    type: "website",
    title: "Mirel Bițoi",
    description:
      "Mirel Bițoi is a Full-Stack Developer working in Bucharest, Romania.",
    url: "https://ochanissi.com",
    images: [
      {
        url: "./og-large-banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Meikopoulos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
