"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import teamImage from "@/assets/acromia-team.jpg";

export default function AboutPage() {
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
                  About Acromia
                </h1>
                <p className="text-xl text-primary-gray-600 mb-8">
                  We are a team of passionate innovators dedicated to
                  transforming businesses through cutting-edge technology
                  solutions.
                </p>
                <div className="flex gap-4">
                  <Link href="#values" className="btn btn-primary">
                    Our Values
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src={teamImage}
                  alt="Acromia Team"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <section className="py-20 bg-primary-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-primary-gray-600">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and success in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary-gray-50 p-8 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-primary-gray-600">
                  We constantly push boundaries and explore new technologies to
                  deliver cutting-edge solutions.
                </p>
              </div>
              <div className="bg-primary-gray-50 p-8 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-primary-gray-600">
                  We maintain the highest standards in everything we do, from
                  code quality to client service.
                </p>
              </div>
              <div className="bg-primary-gray-50 p-8 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-primary-gray-600">
                  We believe in the power of teamwork and work closely with our
                  clients to achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
