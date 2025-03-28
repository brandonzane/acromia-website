"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import dataAnalysisImage from "@/assets/product-image-2.png";

export default function DataAnalysisPage() {
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
                  Data Analysis
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  Transform your raw data into actionable insights with our
                  comprehensive data analysis services.
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
                  src={dataAnalysisImage}
                  alt="Data Analysis"
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
              Our Data Analysis Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Business Intelligence
                </h3>
                <p className="text-primary-gray-600">
                  Comprehensive analysis of your business data to identify
                  trends, opportunities, and areas for improvement.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
                <p className="text-primary-gray-600">
                  Advanced statistical models and machine learning to forecast
                  future trends and make data-driven decisions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Data Visualization</h3>
                <p className="text-primary-gray-600">
                  Clear and intuitive visualizations that make complex data easy
                  to understand and act upon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Our Analysis Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Python",
                "R",
                "SQL",
                "Tableau",
                "Power BI",
                "Machine Learning",
                "Statistical Analysis",
                "Data Mining",
              ].map((tool) => (
                <div
                  key={tool}
                  className="text-center p-4 bg-primary-gray-50 rounded-sm"
                >
                  <h3 className="font-bold">{tool}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary-gray-50">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-primary-gray-600 mb-12">
              Let&apos;s analyze your data and uncover valuable insights for
              your business.
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
