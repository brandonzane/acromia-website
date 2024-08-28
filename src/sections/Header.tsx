"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import acromiaLogo from "@/assets/acromia-logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useCallback, useEffect, useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = useCallback(
    (event: MouseEvent) => {
      if (mobileMenuOpen) {
        const header = document.querySelector("header");
        if (header && !header.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("click", closeMobileMenu);
    return () => {
      document.removeEventListener("click", closeMobileMenu);
    };
  }, [closeMobileMenu]);

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="py-5 relative">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src={acromiaLogo}
              height={160}
              width={160}
              alt="Light SaaS Landing Page Logo"
            />
            <MenuIcon
              className="size-5 md:hidden cursor-pointer"
              onClick={toggleMobileMenu}
            />
            <nav
              className={`
              ${
                mobileMenuOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }
              md:max-h-screen md:opacity-100
              transition-all duration-700 ease-in-out rounded-b-lg
              overflow-hidden absolute top-full left-0 right-0 md:relative md:top-auto
              bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none
              flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-6 text-white/80
            `}
            >
              <a
                onClick={() => scrollToSection("customers")}
                href="#customers"
                className="py-2 md:py-0 hover:text-black transition-colors duration-200"
              >
                Customers
              </a>
              <a
                onClick={() => scrollToSection("products")}
                href="#products"
                className="py-2 md:py-0 hover:text-black transition-colors duration-200"
              >
                Products
              </a>
              <a
                onClick={() => scrollToSection("pricing")}
                href="#pricing"
                className="py-2 md:py-0 hover:text-black transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                onClick={() => scrollToSection("booking")}
                href="#booking"
                className="btn btn-primary my-2 md:my-0"
              >
                Book a call
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
