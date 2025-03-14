"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import rentZimbabweImage from "@/assets/product-image-2.png";

export default function RentZimbabwePage() {
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
                  Rent Zimbabwe
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  The leading property rental platform in Zimbabwe. Find your
                  next home or list your property with ease.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.rentzimbabwe.com"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Visit Website
                  </Link>
                  <Link href="#features" className="btn btn-outlined">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src={rentZimbabweImage}
                  alt="Rent Zimbabwe App"
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
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Property Search</h3>
                <p className="text-primary-gray-600">
                  Advanced search filters to find the perfect property based on
                  location, price, and amenities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Instant Messaging</h3>
                <p className="text-primary-gray-600">
                  Direct communication between tenants and landlords through our
                  secure messaging system.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4">Virtual Tours</h3>
                <p className="text-primary-gray-600">
                  View properties remotely with our virtual tour feature and
                  high-quality images.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Get the App</h2>
            <p className="text-xl text-primary-gray-600 mb-12 max-w-2xl mx-auto">
              Download the Rent Zimbabwe app now and start your property search
              journey.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#" className="btn btn-primary">
                App Store
              </Link>
              <Link href="#" className="btn btn-primary">
                Google Play
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
