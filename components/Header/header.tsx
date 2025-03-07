"use client";

import Typography from "@/components/Typography/typography";
import HeaderButtons from "@/components/HeaderButtons/headerButtons";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "text-white sticky top-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-black transition-all duration-300",
        isOnTop && "bg-opacity-0"
      )}
    >
      <div className="flex items-center gap-4">
        <Typography variant="h2">LOGO</Typography>
      </div>
      <div className="hidden sm:flex mr-12">
        <HeaderButtons />
      </div>
    </header>
  );
}
