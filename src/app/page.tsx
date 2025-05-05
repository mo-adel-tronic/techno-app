"use client"
import Logo from "@/components/shared/Logo";
import { MicrosoftLogo } from "@/components/shared/MicrosoftLogo";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  // const handleMicrosoftLogin = async () => {
  //   setIsLoading(true)
  //   // Simulate authentication delay
  //   setTimeout(() => {
  //     setIsLoading(false)
  //     // Redirect would happen here in a real implementation
  //   }, 1500)
  // }
  return (
    <main className="min-h-[calc(100vh-45px)] flex items-center justify-center bg-app-card px-8">
      <div style={{
        boxShadow: "0 0 36px 1px rgba(0, 0, 0, 0.3)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }} className="border-2 border-gray-100 rounded-lg p-4 w-full md:w-4/6 flex flex-col items-center justify-center">
        <Logo />
        <h1 className="text-lg md:text-2xl font-bold text-foreground my-4 ">مرحباً بك في منصة <span className="text-2xl md:text-3xl text-white">Techno Torial</span></h1>
        <div className="bg-app-background w-5/6 bg-gradient-to-r from-app-background to-gray-300 text-app-text text-sm text-center rounded-lg p-4">
          <p className="my-4">سجل دخولك باستخدام حساب Microsoft الخاص بمؤسستك التعليمية</p>

          <Button
                onClick={() => {}}
                disabled={isLoading}
                className="w-full h-12 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <MicrosoftLogo className="w-5 h-5" />
                <span className="relative">
                  {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول باستخدام Microsoft"}
                </span>
              </Button>
        </div>
      </div>
    </main>
  );
}
