"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import dashboardImage from "@/assets/product-image.png";
export default function DashboardsPage() {
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
                  Customizable Dashboards
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  Transform your business data into actionable insights with our
                  fully customizable dashboard solutions.
                </p>
                <div className="flex gap-4">
                  <Link href="#contact" className="btn btn-primary">
                    Request Demo
                  </Link>
                  <Link href="#features" className="btn btn-outlined">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src={dashboardImage}
                  alt="Dashboard Preview"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-primary-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Dashboard Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Real-time Analytics</h3>
                <p className="text-primary-gray-600">
                  Monitor your business metrics in real-time with automatic data
                  updates and alerts.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Custom Widgets</h3>
                <p className="text-primary-gray-600">
                  Create and customize widgets to display the exact data you
                  need in your preferred format.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Data Integration</h3>
                <p className="text-primary-gray-600">
                  Connect with multiple data sources and APIs to centralize your
                  business intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-primary-gray-200 rounded-sm">
                <h3 className="text-2xl font-bold mb-4">Sales Analytics</h3>
                <p className="text-primary-gray-600">
                  Track sales performance, revenue trends, and customer metrics
                  in one centralized dashboard.
                </p>
              </div>
              <div className="p-8 border border-primary-gray-200 rounded-sm">
                <h3 className="text-2xl font-bold mb-4">Marketing Insights</h3>
                <p className="text-primary-gray-600">
                  Monitor campaign performance, audience engagement, and ROI
                  across all marketing channels.
                </p>
              </div>
              <div className="p-8 border border-primary-gray-200 rounded-sm">
                <h3 className="text-2xl font-bold mb-4">Financial Reports</h3>
                <p className="text-primary-gray-600">
                  Generate comprehensive financial reports and track key
                  performance indicators in real-time.
                </p>
              </div>
              <div className="p-8 border border-primary-gray-200 rounded-sm">
                <h3 className="text-2xl font-bold mb-4">
                  Operations Management
                </h3>
                <p className="text-primary-gray-600">
                  Optimize operational efficiency with real-time monitoring of
                  processes and resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary-gray-50">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-gray-600 mb-12">
              Contact us for a personalized demo and learn how our dashboard
              solutions can transform your business.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
