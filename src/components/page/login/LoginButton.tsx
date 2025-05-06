"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MicrosoftLogo } from "./MicrosoftLogo";

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    // Login logic
    setIsLoading(false);
  };
  return (
    <Button
      onClick={() => handleMicrosoftLogin()}
      disabled={isLoading}
      className="w-full h-12 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 flex items-center justify-center gap-3 relative overflow-hidden group"
    >
      <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full"></span>
      <MicrosoftLogo className="w-5 h-5" />
      <span className="relative font-bold">
        {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول باستخدام Microsoft"}
      </span>
    </Button>
  );
}
