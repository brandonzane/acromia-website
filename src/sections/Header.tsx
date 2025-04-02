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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                onClick={() => {
                  if (pathname !== "/") {
                    router.push("/#customers");
                  } else {
                    scrollToSection("customers");
                  }
                }}
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

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 py-3 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200">
                  Services
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

                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-sm border border-primary-gray-200 transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/services/web-development"
                      className="block px-4 py-2 text-sm text-primary-gray-700 hover:bg-primary-gray-50 hover:text-primary-black transition-colors duration-200"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/data-analysis"
                      className="block px-4 py-2 text-sm text-primary-gray-700 hover:bg-primary-gray-50 hover:text-primary-black transition-colors duration-200"
                    >
                      Data Analysis
                    </Link>
                    <Link
                      href="/services/software"
                      className="block px-4 py-2 text-sm text-primary-gray-700 hover:bg-primary-gray-50 hover:text-primary-black transition-colors duration-200"
                    >
                      Software Solutions
                    </Link>
                    <Link
                      href="/services/consulting"
                      className="block px-4 py-2 text-sm text-primary-gray-700 hover:bg-primary-gray-50 hover:text-primary-black transition-colors duration-200"
                    >
                      Consulting
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/marketing"
                className="py-3 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
              >
                Marketing
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
            <button
              className="md:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-full h-0.5 bg-primary-black transition-all duration-300 ${
                    mobileMenuOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-primary-black transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "top-2"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-primary-black transition-all duration-300 ${
                    mobileMenuOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </div>
            </button>

            {/* Mobile Navigation */}
            <div
              className={`
              fixed left-0 right-0 top-[73px] bg-white border-b border-primary-gray-200
              transition-all duration-300 md:hidden
              ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
            >
              <nav className="container py-6 flex flex-col gap-4">
                <a
                  onClick={() => {
                    if (pathname !== "/") {
                      router.push("/#customers");
                    } else {
                      scrollToSection("customers");
                    }
                  }}
                  href="#customers"
                  className="py-2 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
                >
                  Customers
                </a>

                {/* Mobile Products Dropdown */}
                <div className="flex flex-col gap-2">
                  <span className="py-2 text-sm uppercase tracking-wide">
                    Products
                  </span>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link
                      href="/products/rent-zimbabwe"
                      className="py-2 text-sm text-primary-gray-700 hover:text-primary-black transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Rent Zimbabwe
                    </Link>
                    <Link
                      href="/products/dashboards"
                      className="py-2 text-sm text-primary-gray-700 hover:text-primary-black transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Customizable Dashboards
                    </Link>
                  </div>
                </div>

                {/* Mobile Services Dropdown */}
                <div className="flex flex-col gap-2">
                  <span className="py-2 text-sm uppercase tracking-wide">
                    Services
                  </span>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link
                      href="/services/web-development"
                      className="py-2 text-sm text-primary-gray-700 hover:text-primary-black transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/data-analysis"
                      className="py-2 text-sm text-primary-gray-700 hover:text-primary-black transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Data Analysis
                    </Link>
                    <Link
                      href="/services/software"
                      className="py-2 text-sm text-primary-gray-700 hover:text-primary-black transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Software Solutions
                    </Link>
                    <Link
                      href="/services/consulting"
                      className="py-2 text-sm text-primary-gray-700 hover:text-primary-black transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Consulting
                    </Link>
                  </div>
                </div>

                <Link
                  href="/marketing"
                  className="py-2 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Marketing
                </Link>

                <a
                  onClick={() => {
                    scrollToSection("pricing");
                    setMobileMenuOpen(false);
                  }}
                  href="#pricing"
                  className="py-2 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
                >
                  Pricing
                </a>

                <Link
                  href="/about"
                  className="py-2 text-sm uppercase tracking-wide hover:text-primary-black transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                <a
                  onClick={() => {
                    scrollToSection("booking");
                    setMobileMenuOpen(false);
                  }}
                  href="#booking"
                  className="btn btn-primary text-sm uppercase tracking-wide inline-block text-center"
                >
                  Book a call
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
