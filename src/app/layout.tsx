import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kabir Singh Chadha | AI Systems Engineer & Full-Stack Architect",
  description:
    "Production portfolio of Kabir Singh Chadha. AI Systems Engineer specializing in zero-leakage quantitative ML pipelines, real-time distributed applications, and fair AI architectures. Author of published research on AI bias and mitigation.",
  keywords: [
    "Kabir Singh Chadha",
    "Kabir Chadha",
    "AI Systems Engineer",
    "Machine Learning Engineer",
    "Quantitative ML",
    "Zero-Leakage Pipeline",
    "AI Bias and Fairness",
    "Full-Stack Architect",
    "Next.js Developer",
    "Streamlit",
    "Supabase Realtime",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Kabir Singh Chadha", url: "https://github.com/KabirChadha" }],
  creator: "Kabir Singh Chadha",
  publisher: "Kabir Singh Chadha",
  metadataBase: new URL("https://kabirchadha.dev"),
  openGraph: {
    title: "Kabir Singh Chadha | AI Systems Engineer & Full-Stack Architect",
    description:
      "Explore production-grade ML pipelines, real-time distributed web systems, and published research on algorithmic fairness.",
    url: "https://kabirchadha.dev",
    siteName: "Kabir Singh Chadha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabir Singh Chadha | AI Systems Engineer & Full-Stack Architect",
    description:
      "Production ML pipelines, real-time distributed architectures, and AI fairness research.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#050508] text-[#f4f4f6] font-sans antialiased selection:bg-[#ff6b00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
