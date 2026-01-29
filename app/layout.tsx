import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "TrueSigner - Secure Transaction Signing for Web3 | Verichains",
  description: "Secure transaction signing for Web3. TrueSigner ensures 100% certainty that funds reach intended addresses with zero-trust verification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
