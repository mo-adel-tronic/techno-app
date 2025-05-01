import AppSidebar from "@/components/shared/AppSidebar";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "لوحة التحكم",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppSidebar>
        <main className="flex flex-col items-center bg-gradient-to-b from-app-background to-white h-full">
        <header className="py-3 flex items-center justify-between w-full bg-app-primary px-4">
            <Link href="/">
                <Logo width={40} height={40} />
            </Link>
            <Button className="bg-red-400 hover:bg-red-500 text-white border border-gray-300 flex items-center justify-center gap-3 relative overflow-hidden group">
                تسجيل خروج
            </Button>
        </header>
        <section className="w-[95%] rounded-lg bg-white text-app-text h-[400px] shadow-2xl mt-8 py-6 px-4">
        {children}
        </section>
        </main>
    </AppSidebar>
  );
}
