"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import softwareImage from "@/assets/product-image.png";

export default function SoftwareSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-12 pb-20 bg-white"
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary-black mb-6">
                  Software Solutions
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  Custom software solutions designed to streamline your business
                  operations and drive growth.
                </p>
                <div className="flex gap-4">
                  <Link href="#contact" className="btn btn-primary">
                    Get Started
                  </Link>
                  <Link href="#services" className="btn btn-outlined">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src={softwareImage}
                  alt="Software Solutions"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-primary-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Our Software Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Custom Software Development
                </h3>
                <p className="text-primary-gray-600">
                  Tailored software solutions built to address your specific
                  business challenges and requirements.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">System Integration</h3>
                <p className="text-primary-gray-600">
                  Seamless integration of new software with your existing
                  systems and workflows.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
                <p className="text-primary-gray-600">
                  Scalable cloud-based applications and services for modern
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Java",
                "Python",
                "Node.js",
                "React",
                "Angular",
                "Vue.js",
                "AWS",
                "Azure",
              ].map((tech) => (
                <div
                  key={tech}
                  className="text-center p-4 bg-primary-gray-50 rounded-sm"
                >
                  <h3 className="font-bold">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary-gray-50">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Build Your Software Solution?
            </h2>
            <p className="text-xl text-primary-gray-600 mb-12">
              Let&apos;s discuss your requirements and create a custom software
              solution for your business.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
