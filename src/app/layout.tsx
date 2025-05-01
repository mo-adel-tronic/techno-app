import type { Metadata } from "next";
import "./globals.css";
import { ImageSrc } from "@/lib/constants";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  icons: ImageSrc.LOGO_ICON,
  title: {
    default: "Techno Torial Admin",
    template: "%s | Techno Torial Admin",
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="ar" dir="rtl">
      <body className="font-araboto min-h-svh flex flex-col justify-between">
        {children}
        <Toaster />
        <footer className="text-app-foreground text-sm py-3 text-center bg-gray-100">
          <p>Techno Torial &copy; {currentYear}</p>
        </footer>
      </body>
    </html>
  );
}
