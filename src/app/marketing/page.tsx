"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import marketingImage from "@/assets/marketing-hero.jpg";

export default function MarketingPage() {
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
                  Digital Marketing
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  We help businesses grow their online presence through
                  strategic digital marketing solutions that drive results.
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
                  src={marketingImage}
                  alt="Digital Marketing"
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
              Our Marketing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Search Engine Optimization
                </h3>
                <p className="text-primary-gray-600">
                  Improve your website&apos;s visibility in search results and
                  attract more organic traffic through strategic SEO techniques.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Social Media Marketing
                </h3>
                <p className="text-primary-gray-600">
                  Build brand awareness and engage with your audience through
                  targeted social media campaigns and content strategy.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Content Marketing</h3>
                <p className="text-primary-gray-600">
                  Create valuable, engaging content that attracts and converts
                  your target audience into loyal customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Marketing Strategies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "SEO",
                "Social Media",
                "Content Creation",
                "Email Marketing",
                "PPC Advertising",
                "Analytics",
                "Brand Strategy",
                "Lead Generation",
              ].map((strategy) => (
                <div
                  key={strategy}
                  className="text-center p-4 bg-primary-gray-50 rounded-sm"
                >
                  <h3 className="font-bold">{strategy}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary-gray-50">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-primary-gray-600 mb-12">
              Let&apos;s discuss your marketing goals and create a strategy that
              drives results.
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
