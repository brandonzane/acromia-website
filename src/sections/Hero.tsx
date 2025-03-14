"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import blackGloss from "@/assets/black-gloss.png";
import laptopImage from "@/assets/laptop.png";
import fractalCube from "@/assets/fractal-cube.png";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef } from "react";
import Image from "next/image";

export const Hero = () => {
  const heroRef = useRef(null);

  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-12 pb-32 md:pt-20 md:pb-48 bg-white relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_50%)]"></div>

      {/* Diagonal line decoration */}
      <div className="absolute -bottom-36 -right-36 w-96 h-96 border-t-2 border-l-2 border-primary-black/30 transform rotate-45"></div>

      <div className="container relative z-10">
        <div className="md:flex items-center">
          <div className="md:w-[600px]">
            <Link
              href="https://rentzimbabwe.com"
              className="tag mb-5"
              target="_blank"
            >
              Rent Zimbabwe version 0.11.4
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary-black mt-4 leading-tight">
              Elevate your business with{" "}
              <span className="text-primary-black">Acromia</span> Websites and
              Software
            </h1>
            <p className="text-xl text-primary-gray-600 mt-8 leading-relaxed">
              Powerful websites and web applications designed to transform your
              business.
            </p>
            <div className="flex flex-wrap gap-4 items-center mt-10">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("booking")}
              >
                Book a Call
              </button>
              <Link href="/about" className="btn btn-outlined">
                Learn More <ArrowIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="mt-12 md:mt-0 md:flex-1 relative h-[400px] md:h-[600px]">
            {/* Hero images with animations */}
            <div className="relative w-full h-full">
              {/* Black Gloss Image with animation */}
              <motion.div
                className="absolute inset-0 z-10 flex items-center justify-center md:justify-end"
                animate={{
                  y: [-20, 20],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-full max-w-[400px] md:max-w-[600px] h-[300px] md:h-[500px]">
                  <Image
                    src={blackGloss}
                    alt="Black Gloss Image"
                    layout="fill"
                    objectFit="contain"
                    className="filter brightness-110 contrast-125 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                  />
                </div>
              </motion.div>

              {/* Laptop Image with scroll animation */}
              {/* <motion.div
                className="absolute top-10 left-10 z-20 hidden md:block"
                style={{ y: translateY }}
              >
                <div className="w-[320px] h-[320px] relative">
                  <Image
                    src={laptopImage}
                    alt="Laptop Image"
                    layout="fill"
                    objectFit="contain"
                    className="filter drop-shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                  />
                </div>
              </motion.div> */}

              {/* Fractal Cube Image with scroll animation */}
              <motion.div
                className="absolute bottom-20 right-20 z-30 hidden md:block"
                style={{ y: translateY2 }}
              >
                <div className="w-[200px] h-[200px] relative">
                  <Image
                    src={fractalCube}
                    alt="Fractal Cube Image"
                    layout="fill"
                    objectFit="contain"
                    className="rotate-[30deg] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
