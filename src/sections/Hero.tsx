"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import blackGloss from "@/assets/black-gloss.png";
import laptopImage from "@/assets/laptop.png";
import fractalCube from "@/assets/fractal-cube.png";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef } from "react";

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

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#313232,#EAEEFE_40%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              <Link href={"/"}>Computer Help ver 1.0</Link>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#808080] text-transparent bg-clip-text mt-6">
              Elevate your brand with Acromia Design and Software
            </h1>
            <p className="text-xl text-[#0B0B0B] tracking-tight mt-6">
              Elevate your brand with Acromia Web design
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("booking")}
              >
                Book a Call
              </button>
              <button className="btn btn-text gap-1">
                <Link
                  href="/about"
                  className="py-2 md:py-0 hover:text-black transition-colors duration-200"
                >
                  <span>Learn More</span>
                </Link>

                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={blackGloss.src}
              alt="Black Gloss Image"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <motion.img
              src={laptopImage.src}
              width={320}
              height={320}
              style={{ translateY: translateY }}
              alt="Laptop Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <motion.img
              src={fractalCube.src}
              width={300}
              height={300}
              style={{ translateY: translateY }}
              alt="Fractal Cube Image"
              className=" lg-block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
