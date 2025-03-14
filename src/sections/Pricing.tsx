"use client";

import CheckIcon from "@/assets/check.svg";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Basic",
    Price: `$ ${400}`,
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "1 Custom Website Design",
      "3-5 Pages",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "1 Month of Basic Support",
    ],
  },
  {
    title: "Professional",
    Price: `$ ${600}`,
    buttonText: "Book a call",
    popular: true,
    inverse: true,
    features: [
      "Up to 10 Pages",
      "1 Custom Website Design",
      "E-commerce Functionality (optional)",
      "2 Months of Priority Support",
      "Enhanced SEO Optimization",
      "Social Media Integration",
      "Google Analytics Integration",
      "Export support",
      "Backup and Restoration",
    ],
  },
  {
    title: "Enterprise",
    Price: "Get in touch",
    buttonText: "Contact Us",
    popular: false,
    inverse: false,
    features: [
      "Custom Website Design",
      "Unlimited Scalable Pages",
      "Advanced E-commerce Functionality",
      "Comprehensive SEO & Marketing Strategy",
      "Custom Web Addons",
      "Customer Database Integration",
      "Advanced analytics",
      "Dedicated Project Manager",
      "Ongoing Maintenance & Support",
      "Advanced security features",
      "Daily Backups and Restoration",
      "Payment Integrations",
      "Booking System Integration",
    ],
  },
];

export const Pricing = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-gray-100">
      <div className="container">
        <div className="section-heading mb-16">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-description mt-4">
            Choose the package that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((plan) => (
            <div
              key={plan.title}
              className={`
                rounded-sm overflow-hidden p-8 
                ${
                  plan.popular
                    ? "bg-primary-black text-white shadow-2xl border-2 border-primary-black"
                    : "bg-white text-primary-black border border-primary-gray-200 shadow-lg"
                }
                hover:transform hover:-translate-y-2 transition-all duration-300
              `}
            >
              <div className="text-center">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-primary-black"
                  }`}
                >
                  {plan.title}
                </h3>
                <div
                  className={`text-4xl font-bold my-6 ${
                    plan.popular ? "text-white" : "text-primary-black"
                  }`}
                >
                  {plan.Price === "Get in touch" ? "Contact Us" : plan.Price}
                </div>
                <ul className="text-left space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon
                        className={`h-5 w-5 mr-2 mt-1 ${
                          plan.popular ? "text-white" : "text-primary-black"
                        }`}
                      />
                      <span
                        className={
                          plan.popular
                            ? "text-gray-200"
                            : "text-primary-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`
                    w-full py-3 rounded-sm font-medium 
                    ${
                      plan.popular
                        ? "bg-white text-primary-black hover:bg-primary-gray-100"
                        : "bg-primary-black text-white hover:bg-gray-900"
                    }
                    transition-all duration-200
                  `}
                  onClick={() => scrollToSection(plan.title.toLowerCase())}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
