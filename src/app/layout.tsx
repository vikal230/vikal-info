import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

export const metadata: Metadata = {
  title: "Portfolio — MERN Stack & Generative AI Developer",
  description:
    "Shipped 4 production-ready full-stack applications covering AI integration, real-time systems, and payments. Comfortable owning features end-to-end.",
  keywords: ["MERN Stack", "Generative AI", "React", "Node.js", "Next.js", "Portfolio"],
  openGraph: {
    title: "Portfolio — MERN Stack & Generative AI Developer",
    description:
      "Full-stack developer with production experience in AI integration, real-time systems, and payment flows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — MERN Stack & Generative AI Developer",
    description: "Full-stack developer with production experience in AI integration, real-time systems, and payment flows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
