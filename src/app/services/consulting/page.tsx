"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import consultingImage from "@/assets/product-image-2.png";

export default function ConsultingPage() {
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
                  IT Consulting
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  Expert guidance to help your business navigate the digital
                  landscape and achieve sustainable growth.
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
                  src={consultingImage}
                  alt="IT Consulting"
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
              Our Consulting Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Digital Strategy</h3>
                <p className="text-primary-gray-600">
                  Comprehensive digital transformation strategies aligned with
                  your business goals.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Technology Assessment
                </h3>
                <p className="text-primary-gray-600">
                  In-depth analysis of your current technology stack and
                  recommendations for improvement.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Process Optimization</h3>
                <p className="text-primary-gray-600">
                  Streamline your business processes with technology-driven
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Digital Transformation",
                "Cloud Migration",
                "Security",
                "Compliance",
                "Project Management",
                "Change Management",
                "IT Strategy",
                "Risk Assessment",
              ].map((area) => (
                <div
                  key={area}
                  className="text-center p-4 bg-primary-gray-50 rounded-sm"
                >
                  <h3 className="font-bold">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary-gray-50">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-gray-600 mb-12">
              Let&apos;s discuss how our consulting services can help you
              achieve your business objectives.
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
