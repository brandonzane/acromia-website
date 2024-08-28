"use client";

import acromiaLogo from "@/assets/acromia-logo.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import { useCallback } from "react";

export const Footer = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="bg-black py-10 text-center text-sm text-[#bcbcbc]">
      <div className="container">
        <div className="relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:blur before:content-['']">
          <Image
            src={acromiaLogo}
            height={40}
            className="relative"
            alt="SaaS Logo"
          />
        </div>
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <a onClick={() => scrollToSection("customers")} href="#customers">
            Customers
          </a>
          <a onClick={() => scrollToSection("products")} href="#products">
            Products
          </a>
          <a onClick={() => scrollToSection("pricing")} href="#pricing">
            Pricing
          </a>
        </nav>
        <p className="mt-6">&copy; 2024 Your Acromia. All rights reserved.</p>
      </div>
    </footer>
  );
};
