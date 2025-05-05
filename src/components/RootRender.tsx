'use client'

import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import GlobalError from "@/app/error";
import { useRouter } from "next/navigation";

export default function RootRender({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const currentYear = new Date().getFullYear();
    const [w, setW] = useState(0)
    const router = useRouter();
    useEffect(() => {
        setW(window.innerWidth)
      }, []);
      if (w == 0) {
        return <html>
            <body>
                
            </body>
        </html>
      }
  if (w < 768) {
    return <html>
        <body>
        <GlobalError error={new Error('مقاس الشاشة لابد أن يكون أكبر من 768')} reset={() => {
        router.refresh();
    }} />
        </body>
    </html>
  } else {
    return <html lang="ar" dir="rtl">
    <body className="font-araboto min-h-svh flex flex-col justify-between">
      {children}
      <Toaster toastOptions={{
        classNames: {
          success: "!bg-green-600 !text-white !font-bold",
          error: "!bg-red-500 !text-white !font-bold"
        }
      }} />
      <footer className="text-app-foreground text-sm py-3 text-center bg-gray-100">
        <p>Techno Torial &copy; {currentYear}</p>
      </footer>
    </body>
  </html>
  }
}
