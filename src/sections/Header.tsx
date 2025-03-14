"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import acromiaLogo from "@/assets/acromia-logo.png";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/menu.svg";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { animate } from "framer-motion";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for header

      animate(window.scrollY, offsetPosition, {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1], // Custom easing
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
    }
  }, []);

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary-black/10">
      <div className="py-4 relative">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={handleLogoClick}>
              <Image
                src={acromiaLogo}
                height={160}
                width={160}
                alt="Acromia Logo"
                className="cursor-pointer h-10 w-auto"
              />
            </Link>

            {/* Main Navigation */}
            <nav className="flex items-center gap-8">
              <a
                onClick={() => scrollToSection("customers")}
                href="#customers"
                className="py-3 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
              >
                Customers
              </a>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 py-3 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200">
                  Products
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-sm border border-primary-gray-200 transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/products/rent-zimbabwe"
                      className="block px-4 py-2 text-sm text-primary-gray-700 hover:bg-primary-gray-50 hover:text-primary-black transition-colors duration-200"
                    >
                      Rent Zimbabwe
                    </Link>
                    <Link
                      href="/products/dashboards"
                      className="block px-4 py-2 text-sm text-primary-gray-700 hover:bg-primary-gray-50 hover:text-primary-black transition-colors duration-200"
                    >
                      Customizable Dashboards
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/data-page"
                className="py-3 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
              >
                Data
              </Link>

              <a
                onClick={() => scrollToSection("pricing")}
                href="#pricing"
                className="py-3 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
              >
                Pricing
              </a>

              <Link
                href="/about"
                className="py-3 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
              >
                About
              </Link>

              <a
                onClick={() => scrollToSection("booking")}
                href="#booking"
                className="btn btn-primary text-sm uppercase tracking-wide"
              >
                Book a call
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <MenuIcon className="size-5 text-primary-black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
