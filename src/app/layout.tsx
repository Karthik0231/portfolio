import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/motion/lenis";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H S Karthik — Full Stack Developer & Software Engineer",
  description: "Full Stack Developer based in Udupi, working in Mangaluru at DataQueue Systems. 2+ years hands-on experience building production web applications, backend APIs, and React Native mobile products.",
  keywords: [
    "H S Karthik",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "TypeScript",
    "Udupi",
    "Mangaluru",
    "DataQueue Systems"
  ],
  authors: [{ name: "H S Karthik" }],
  openGraph: {
    title: "H S Karthik — Full Stack Developer & Software Engineer",
    description: "Full Stack Developer based in Udupi, working in Mangaluru. Building web applications, backend services, and mobile products for real-world use.",
    url: "https://karthik-portfolio-three-ruby.vercel.app/",
    siteName: "H S Karthik Portfolio",
    locale: "en_US",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-cobalt selection:text-white" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
