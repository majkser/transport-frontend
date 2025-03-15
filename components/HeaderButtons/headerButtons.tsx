"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Typography from "@/components/Typography/typography";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderButtons() {
  const [active, setActive] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(buttonName: string) {
    const section = document.getElementById(buttonName);
    if (section) {
      const height = section.getBoundingClientRect().height;
      const middleOffset =
        section.offsetTop - window.innerHeight / 2 + height / 2;

      window.scrollTo({ top: middleOffset, behavior: "smooth" });
    }
  }

  function handleScroll() {
    const home = document.getElementById("home");
    const contact = document.getElementById("contact");

    if (home && contact) {
      const homeTop = home.getBoundingClientRect().top;
      const contactTop = contact.getBoundingClientRect().top;

      if (homeTop <= 0 && contactTop > 0) {
        setActive("home");
      }
      if (contactTop <= 500) {
        setActive("contact");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center gap-8">
      <div className="hidden md:flex">
        <Button
          onClick={() => handleClick("home")}
          variant={"link"}
          className={cn("text-white", active === "home" && "underline")}
        >
          <Typography variant="p">Home</Typography>
        </Button>
        <Button
          onClick={() => handleClick("contact")}
          variant={"link"}
          className={cn("text-white", active === "contact" && "underline")}
        >
          <Typography variant="p">Contact us</Typography>
        </Button>
        <Button
          onClick={() => handleClick("faq")}
          variant={"link"}
          className={cn("text-white", active === "faq" && "underline")}
        >
          <Typography variant="p">FAQ</Typography>
        </Button>
      </div>

      {/* Mobile Navigation */}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            className="text-white"
          >
            <GiHamburgerMenu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[250px] sm:w-[300px] bg-black border-0"
        >
          <SheetHeader>
            <SheetTitle className="text-white">Company Name/logo</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            <Button
              onClick={() => {
                handleClick("home");
                setIsOpen(false);
              }}
              variant={"link"}
              className={cn(
                "hover:cursor-pointer text-white",
                active === "home" && "underline"
              )}
            >
              <Typography variant="p">Home</Typography>
            </Button>
            <Button
              onClick={() => {
                handleClick("contact");
                setIsOpen(false);
              }}
              variant={"link"}
              className={cn(
                "hover:cursor-pointer text-white",
                active === "contact" && "underline"
              )}
            >
              <Typography variant="p">Contact us</Typography>
            </Button>
            <Button
              onClick={() => {
                handleClick("faq");
                setIsOpen(false);
              }}
              variant={"link"}
              className={cn(
                "hover:cursor-pointer text-white",
                active === "faq" && "underline"
              )}
            >
              <Typography variant="p">FAQ</Typography>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
