import type { Metadata } from "next";
import "./globals.css";
import { WalletProvider } from "./components/WalletProvider";

export const metadata: Metadata = {
  title: "Aptos Vibes - Showcase of Vibe Coded Projects",
  description: "Discover innovative Aptos blockchain projects crafted with unique vibes and creative energy.",
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
