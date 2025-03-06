"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Typography from "@/components/Typography/typography";

export default function HeaderButtons() {
  const [active, setActive] = useState<string>("");

  function handleClick(buttonName: string) {
    setActive(buttonName);
  }

  return (
    <nav className="flex items-center gap-8">
      <Button
        onClick={() => handleClick("home")}
        variant={"link"}
        className={cn("hover:cursor-pointer", active === "home" && "underline")}
      >
        <Typography variant="p">Home</Typography>
      </Button>
      <Button
        onClick={() => handleClick("contact")}
        variant={"link"}
        className={cn(
          "hover:cursor-pointer",
          active === "contact" && "underline"
        )}
      >
        <Typography variant="p">Contact</Typography>
      </Button>
      <Button
        onClick={() => handleClick("faq")}
        variant={"link"}
        className={cn("hover:cursor-pointer", active === "faq" && "underline")}
      >
        <Typography variant="p">FAQ</Typography>
      </Button>
    </nav>
  );
}
