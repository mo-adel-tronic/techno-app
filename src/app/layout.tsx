import type { Metadata } from "next";
import "./globals.css";
import { ImageSrc } from "@/lib/constants";
import RootRender from "@/components/RootRender";

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
  return <RootRender>
    {children}
  </RootRender>
}
