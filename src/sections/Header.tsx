"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import acromiaLogo from "@/assets/acromia-logo.png";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/menu.svg";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback(
    (elementId: string) => {
      if (pathname !== "/") {
        router.push(`/#${elementId}`);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileMenuOpen(false);
    },
    [pathname, router]
  );

  const handleLogoClick = useCallback(() => {
    router.push("/");
    setMobileMenuOpen(false);
  }, [router]);

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
            <Link href="/" onClick={handleLogoClick}>
              <Image
                src={acromiaLogo}
                height={160}
                width={160}
                alt="Acromia Logo"
                className="cursor-pointer"
              />
            </Link>
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
              flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-6 text-slate-500
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

              <Link
                href="/data-page"
                className="py-2 md:py-0 hover:text-black transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Data
              </Link>

              <a
                onClick={() => scrollToSection("pricing")}
                href="#pricing"
                className="py-2 md:py-0 hover:text-black transition-colors duration-200"
              >
                Pricing
              </a>
              <Link
                href="/about"
                className="py-2 md:py-0 hover:text-black transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <a
                onClick={() => scrollToSection("booking")}
                href="#booking"
                className="btn btn-primary md:my-0 md:py-2 inline-flex items-center justify-center"
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
