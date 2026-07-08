import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Toaster } from "sonner";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Datafy Hub — Where Professionalism Meets Fun | Cowork Space Ibadan",
  description:
    "Premium coworking space on the 9th Floor of Cocoa House, Dugbe, Ibadan. Book a Flexi Desk, Private Office, or Meeting Room daily, weekly, or monthly.",
  openGraph: {
    title: "Datafy Hub — Where Professionalism Meets Fun",
    description:
      "Premium coworking space on the 9th Floor of Cocoa House, Dugbe, Ibadan.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg" }],
    shortcut: ["/favicon.jpg"],
    apple: [{ url: "/favicon.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-dark text-white antialiased">
        <CustomCursor />
        {children}
        <Toaster theme="dark" position="top-center" richColors />
      </body>
    </html>
  );
}
