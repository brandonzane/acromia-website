"use client";

import gdiLogo from "@/assets/gdi-gray.png";
import zimsoLogo from "@/assets/gray-zimso.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import zusammenLogo from "@/assets/gray-zusammen.png";
import dustyRoadLogo from "@/assets/gray-dusty-road.png";
import planetLogo from "@/assets/gray-planet-inc.png";
import rentZimbabweLogo from "@/assets/rent-logo.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex flex-none gap-14 pr-14"
          >
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker" />
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker" />
            <Image
              src={rentZimbabweLogo}
              alt="Rent Zimbabwe Logo"
              className="logo-ticker"
            />

            <Image
              src={dustyRoadLogo}
              alt="Dusty Road Logo"
              className="logo-ticker"
            />
            <Image
              src={zusammenLogo}
              alt="Zusammen Logo"
              className="logo-ticker"
            />
            <Image src={gdiLogo} alt="GDI Logo" className="logo-ticker" />

            <Image src={zimsoLogo} alt="Zimso Logo" className="logo-ticker" />
            <Image
              src={planetLogo}
              alt="Planet Inc Logo"
              className="logo-ticker"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
