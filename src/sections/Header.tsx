"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import acromiaLogo from "@/assets/acromia-logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useCallback } from "react";

export const Header = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3 bg-black py-3 text-sm text-white">
        <p className="hidden text-white/60 md:block">
          Streamline your marketing workflow
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started with the Professional Plan</p>
          <ArrowRight className="inline-flex size-4 items-center justify-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src={acromiaLogo}
              height={160}
              width={160}
              alt="Light SaaS Landing Page Logo"
            />
            <MenuIcon className="size-5 md:hidden" />
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a onClick={() => scrollToSection("customers")} href="#customers">
                Customers
              </a>
              <a onClick={() => scrollToSection("products")} href="#products">
                Products
              </a>
              <a onClick={() => scrollToSection("pricing")} href="#pricing">
                Pricing
              </a>
              {/* <a href="#">Updates</a>
              <a href="#">Help</a> */}
              <a
                onClick={() => scrollToSection("booking")}
                href="#booking"
                className="btn btn-primary"
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
