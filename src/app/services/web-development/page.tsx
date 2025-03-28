"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import webDevImage from "@/assets/product-image.png";

export default function WebDevelopmentPage() {
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
                  Web Development
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  We create modern, responsive, and high-performance websites
                  that help businesses grow their online presence.
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
                  src={webDevImage}
                  alt="Web Development"
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
              Our Web Development Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Custom Website Development
                </h3>
                <p className="text-primary-gray-600">
                  Tailored websites built with modern technologies and best
                  practices to meet your specific business needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">E-commerce Solutions</h3>
                <p className="text-primary-gray-600">
                  Full-featured online stores with secure payment processing,
                  inventory management, and order tracking.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Web Applications</h3>
                <p className="text-primary-gray-600">
                  Complex web applications that streamline your business
                  processes and improve efficiency.
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
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Python",
                "Django",
                "MongoDB",
                "PostgreSQL",
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
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-primary-gray-600 mb-12">
              Let&apos;s discuss your project and create a custom solution that
              meets your needs.
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
