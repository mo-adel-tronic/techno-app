import AppLogo from "@/components/shared/AppLogo";
import AppSidebar from "@/components/shared/AppSidebar";
import type { Metadata } from "next";
import Link from "next/link";
import { authOptions } from "@/features/auth/AuthOptions"
import { getServerSession } from "next-auth"
import SignoutBtn from "@/components/page/dashboard/SignoutBtn";

export const metadata: Metadata = {
  title: "لوحة التحكم",
};
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions)
    if(session?.accessToken) {
        return (
            <AppSidebar>
                <main className="flex flex-col items-center bg-gradient-to-b from-app-background to-white h-full">
                <header className="py-3 flex items-center justify-between w-full bg-app-primary px-4">
                    <Link href="/">
                        <AppLogo width={40} height={40} />
                    </Link>
                    <SignoutBtn />
                </header>
                <section className="w-[95%] rounded-lg bg-white text-app-text min-h-[400px] shadow-2xl mt-8 py-6 px-4">
                {children}
                </section>
                </main>
            </AppSidebar>
          );
    } else {
        return (
            <main className="flex flex-col items-center bg-gradient-to-b from-app-background to-white h-full">
                <header className="py-3 flex items-center justify-between w-full bg-app-primary px-4">
                    <Link href="/">
                        <AppLogo width={40} height={40} />
                    </Link>
                    <SignoutBtn />
                </header>
                <section className="w-[95%] rounded-lg flex justify-center items-center bg-white text-app-primary h-[400px] shadow-2xl mt-8 py-6 px-4 font-bold text-4xl text-center leading-14">
                هناك خطأ ما في تسجيل دخولك ، قم بتسجيل الخروج من الزر أعلاه وأعد محاولة تسجيل الدخول مرة أخرى
                </section>
                </main>
          );
    }
}
