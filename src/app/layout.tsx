import type { Metadata } from "next";
import "./globals.css";
import { ImageSrc } from "@/lib/constants";

export const metadata: Metadata = {
  icons: ImageSrc.LOGO_ICON,
  title: {
    default: "Techno Torial",
    template: "%s | Techno Torial"
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
        <footer className="text-app-foreground text-sm py-3 text-center bg-gray-100">
          <p>Techno Torial &copy; {currentYear}</p>
        </footer>
      </body>
    </html>
  );
}
