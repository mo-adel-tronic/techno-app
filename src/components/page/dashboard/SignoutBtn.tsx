"use client";
import { Button } from "@/components/ui/button";
import { RoutesName } from "@/constants/RoutesName";
import { signOut } from "next-auth/react";

export default function SignoutBtn() {
  return (
    <Button onClick={async () => {
        await fetch(RoutesName.API_REVALIDATE, {
            headers: {
                api_key: process.env.NEXT_PUBLIC_API_KEY || ''
            },
            method: "POST",
            body: JSON.stringify({path: '/'})
        })
        signOut()
    }} className="bg-red-400 hover:bg-red-500 text-white border border-gray-300 flex items-center justify-center gap-3 relative overflow-hidden group">
      تسجيل خروج
    </Button>
  );
}
