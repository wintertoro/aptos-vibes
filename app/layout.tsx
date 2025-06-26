import type { Metadata } from "next";
import "./globals.css";
import { WalletProvider } from "./components/WalletProvider";

export const metadata: Metadata = {
  title: "Aptos Vibes - Showcase of Vibe Coded Projects",
  description: "Discover innovative Aptos blockchain projects crafted with unique vibes and creative energy.",
  openGraph: {
    title: "Aptos Vibes - Featured Projects",
    description: "A curated collection of innovative Aptos blockchain projects built with serious vibes and hella style",
    url: "https://aptos-vibes.vercel.app",
    siteName: "Aptos Vibes",
    images: [
      {
        url: "/mainthumb.png",
        width: 1200,
        height: 630,
        alt: "Aptos Vibes - Featured Blockchain Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptos Vibes - Featured Projects",
    description: "A curated collection of innovative Aptos blockchain projects built with serious vibes and hella style",
    images: ["/mainthumb.png"],
  },
  metadataBase: new URL("https://aptos-vibes.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
