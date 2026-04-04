import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTHEMOOD PICTURES",
  description:
    "Norwegian production company and high-end tech house with an opportunistic mindset.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${inter.variable}`}>
      <body>
        <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-Y7EESHQBYC" />
      </body>
    </html>
  );
}
