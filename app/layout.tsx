import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ 
  subsets: ["latin"], 
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Saratchandra Patnaik | Software Engineer",
  description: "AI-Focused Software Engineer specializing in Cloud Native Development and Applied Cryptography. MS CS Graduate (ASU '25) | Ex-Amagi Media Labs.",
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
      </body>
    </html>
  );
}
