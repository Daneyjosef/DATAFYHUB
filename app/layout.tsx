import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Datafy Hub",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F8FC" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          {children}
          <Toaster theme="system" position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
