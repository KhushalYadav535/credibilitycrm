import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import FirstVisitLoader from "@/components/first-visit-loader";
import ScrollProgress from "@/components/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Credibility | AI Voice Customer Engagement Platform",
  description:
    "Premium AI voice-driven customer interaction layer for banks, NBFCs, fintechs, and contact centers.",
  metadataBase: new URL("https://credibility.ai"),
  openGraph: {
    title: "Credibility | AI Voice Customer Engagement Platform",
    description:
      "AI voice-driven customer interaction layer for BFSI enterprises with measurable ROI.",
    type: "website",
    url: "https://credibility.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">
        <FirstVisitLoader />
        <ScrollProgress />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
