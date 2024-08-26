import CheckIcon from "@/assets/check.svg";
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
    buttonText: "Sign up now",
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
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({ title, Price, buttonText, popular, inverse, features }) => (
              <div
                key={title}
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="items-center text-4xl font-bold tracking-tighter leading-none">
                    {Price}
                  </span>
                  {/* <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span> */}
                </div>
                <button className={twMerge("btn btn-primary w-full mt-[30px]")}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
