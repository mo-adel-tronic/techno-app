'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../shared/Logo";
import NavList from "./NavList";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "flex justify-between items-center h-16 lg-content-padding sticky top-0 z-50 transition-all duration-300 [@media(max-width:700px)]:hidden",
        scrolled
          ? "bg-app-card-op shadow-lg rounded-b-lg"
          : "bg-app-foreground shadow-md"
      )}
    >
      <Logo />
      <NavList
        items={[
          { name: "الرئيسية", href: "#HEADER" },
          { name: "عن النظام", href: "#ABOUT" },
          { name: "التعليمات", href: "#INSTRUCTIONS" },
          { name: "فريق العمل", href: "/contact" },
        ]}
      />
      <Link
        href="#"
        className="bg-white hover:bg-app-secondary text-app-foreground hover:text-app-secondary-foreground transition-colors duration-300 py-2 px-3 rounded-md"
      >
        تسجيل الدخول
      </Link>
    </nav>
  );
}
