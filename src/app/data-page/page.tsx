"use client";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

const ServiceSection = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) => (
  <motion.div
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center gap-8 my-16`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="md:w-1/2">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 mr-2 text-blue-600" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
    </div>
    <div className="md:w-1/2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={600}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  </motion.div>
);
export default function Data() {
  const services = [
    {
      title: "Advanced Analytics",
      description:
        "Leverage cutting-edge statistical and machine learning techniques to extract actionable insights from your data. Our advanced analytics services help you uncover hidden patterns, predict future trends, and make data-driven decisions with confidence.",
      icon: ChartBarIcon,
      imageSrc: "/data-3.png",
      imageAlt: "Advanced Analytics Dashboard",
    },
    {
      title: "Business Intelligence & Dashboards",
      description:
        "Transform your raw data into intuitive, interactive dashboards that provide real-time insights across your organization. Our BI solutions empower your team to visualize complex data, track KPIs, and make informed decisions quickly.",
      icon: PresentationChartLineIcon,
      imageSrc: "/data-4.jpg",
      imageAlt: "Business Intelligence Dashboard",
    },
    {
      title: "Data Engineering & Architecture",
      description:
        "Build robust, scalable data pipelines and infrastructure to handle your growing data needs. Our data engineering services ensure that your data is collected, processed, and stored efficiently, providing a solid foundation for all your data initiatives.",
      icon: CogIcon,
      imageSrc: "/images/data-engineering.jpg",
      imageAlt: "Data Engineering Architecture",
    },
    {
      title: "Cloud Data Solutions",
      description:
        "Harness the power of cloud computing for your data workloads. We design and implement cloud-native data solutions that offer scalability, flexibility, and cost-effectiveness, whether you're migrating existing systems or building new cloud-based data platforms.",
      icon: CloudIcon,
      imageSrc: "/images/cloud-data.jpg",
      imageAlt: "Cloud Data Platform",
    },
    {
      title: "Data Governance & Compliance",
      description:
        "Ensure the security, quality, and regulatory compliance of your data assets. Our data governance solutions help you implement best practices for data management, privacy protection, and compliance with regulations like GDPR, CCPA, and industry-specific standards.",
      icon: ShieldCheckIcon,
      imageSrc: "/images/data-governance.jpg",
      imageAlt: "Data Governance Framework",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Unlock the potential of artificial intelligence and machine learning for your business. From predictive modeling to natural language processing and computer vision, we develop custom AI solutions that automate processes, enhance decision-making, and drive innovation.",
      icon: CubeTransparentIcon,
      imageSrc: "/images/ai-ml.jpg",
      imageAlt: "AI and Machine Learning Visualization",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#EAEEFE] min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#808080] text-transparent bg-clip-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Data Solutions
          </motion.h1>
          <motion.p
            className="text-xl text-[#0B0B0B] tracking-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Acromia, we offer a full spectrum of data services to help
            businesses harness the power of their information. From advanced
            analytics and business intelligence to data engineering and AI
            solutions, our expert team delivers cutting-edge data capabilities
            that drive growth, efficiency, and innovation.
          </motion.p>

          {services.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              reverse={index % 2 !== 0}
            />
          ))}

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl mb-8">
              Let&apos;s discuss how our data solutions can drive your business
              forward.
            </p>
            <a href="#booking" className="btn btn-primary text-lg px-8 py-3">
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
