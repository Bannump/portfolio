import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import PortfolioChatbot from "@/components/PortfolioChatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bannump.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Saratchandra Patnaik — Backend & Distributed Systems Engineer",
  description:
    "Backend and distributed systems engineer with production experience at Amagi Media Labs. Specializes in AWS, Kubernetes, reliability engineering, streaming infrastructure, and cloud-native systems. MS CS @ Arizona State University.",
  openGraph: {
    title: "Saratchandra Patnaik — Backend & Distributed Systems Engineer",
    description:
      "Backend and distributed systems engineer with production experience at Amagi Media Labs. AWS · Kubernetes · Python · Reliability Engineering. MS CS @ ASU.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/profile-photo.jpg",
        width: 600,
        height: 720,
        alt: "Saratchandra Patnaik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saratchandra Patnaik — Backend & Distributed Systems Engineer",
    description:
      "Backend and distributed systems engineer. AWS · Kubernetes · Python · Reliability. MS CS @ ASU. Ex-Amagi Media Labs.",
    images: ["/images/profile-photo.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
        <PortfolioChatbot />
      </body>
    </html>
  );
}
