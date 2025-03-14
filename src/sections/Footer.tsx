"use client";

import acromiaLogo from "@/assets/acromia-logo.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import { useCallback } from "react";

// Define the missing arrays
const socialIcons = [
  { name: "Twitter", icon: SocialX, link: "https://twitter.com" },
  { name: "Instagram", icon: SocialInsta, link: "https://instagram.com" },
  { name: "LinkedIn", icon: SocialLinkedIn, link: "https://linkedin.com" },
  { name: "Pinterest", icon: SocialPin, link: "https://pinterest.com" },
  { name: "YouTube", icon: SocialYoutube, link: "https://youtube.com" },
];

const services = [
  { name: "Web Development", link: "/services/web-development" },
  { name: "Data Analysis", link: "/services/data-analysis" },
  { name: "Software Solutions", link: "/services/software" },
  { name: "Consulting", link: "/services/consulting" },
];

const companyLinks = [
  { name: "About Us", url: "/about" },
  { name: "Careers", url: "/careers" },
  { name: "Blog", url: "/blog" },
  { name: "Press", url: "/press" },
];

export const Footer = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="bg-primary-gray-100 py-16 border-t border-primary-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Image
              src={acromiaLogo}
              height={100}
              width={100}
              alt="Acromia Logo"
              className="mb-6"
            />
            <p className="text-primary-gray-600 mb-6">
              Results-driven design and development agency transforming
              businesses through technology.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons */}
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.link}
                  className="text-primary-gray-600 hover:text-primary-black transition-colors"
                >
                  <icon.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-primary-black font-bold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.link}
                    className="text-primary-gray-600 hover:text-primary-black transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary-black font-bold text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-primary-gray-600 hover:text-primary-black transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary-black font-bold text-lg mb-6">
              Contact Us
            </h3>
            <address className="not-italic text-primary-gray-600 space-y-4">
              <p>123 Business Avenue</p>
              <p>New York, NY 10001</p>
              <p>Email: contact@acromia.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-gray-200 text-primary-gray-500 text-sm flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} Acromia. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="hover:text-primary-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-primary-black transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="hover:text-primary-black transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
