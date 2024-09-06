"use client";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image from "next/image";
import teamImage from "@/assets/acromia-team.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-[#EAEEFE] min-h-screen">
        <section className="py-20 md:py-32">
          <div className="container">
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#808080] text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Acromia
            </motion.h1>
            <div className="md:flex items-start gap-12">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-xl text-[#0B0B0B] tracking-tight mb-6">
                  Acromia is a cutting-edge design and development agency
                  dedicated to elevating brands through innovative web solutions
                  and state-of-the-art software. Founded with a vision to bridge
                  the gap between creativity and technology, we&apos;ve quickly
                  established ourselves as industry leaders in delivering
                  exceptional digital experiences.
                </p>
                <p className="text-xl text-[#0B0B0B] tracking-tight mb-6">
                  At Acromia, our mission is to empower businesses with
                  transformative digital solutions that drive growth, enhance
                  user engagement, and push the boundaries of what&apos;s
                  possible in the digital realm. We believe that great design
                  and robust development are not just services, but essential
                  components of a successful digital strategy.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src={teamImage}
                  alt="Acromia Team"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-black text-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly push the boundaries of what's possible in web design and development.",
                },
                {
                  title: "Quality",
                  description:
                    "We're committed to delivering the highest quality products and services to our clients.",
                },
                {
                  title: "Client Success",
                  description:
                    "Our clients' success is our success. We're dedicated to helping them achieve their goals.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1A1A1A] p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
