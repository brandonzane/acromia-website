"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import atomImage from "@/assets/atom-shadow.png";
import blockMatrix from "@/assets/blockMatrix.png";
import { motion } from "framer-motion";
import website1 from "@/assets/web-dev-1.png";
import website2 from "@/assets/web-dev-2.png";
import website3 from "@/assets/data-1.png";
import website4 from "@/assets/data-2.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">
              Elevate Your Digital Presence with Acromia
            </div>
          </div>
          <h2 className="section-title mt-5">Cutting-Edge Technology:</h2>
          <p className="section-description mt-5">
            {" "}
            Data is everything. We use the latest technologies to provide a more
            informed decision-making framework. We build websites, dashboards
            and visuals backed by data.
          </p>
        </div>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{ translateX: "-80%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex flex-none gap-14 pr-14"
          >
            <Image
              src={productImage}
              alt="Product Image"
              className="mt-10 product-ticker"
            />
            <Image
              src={website1}
              alt="Product Image-1"
              className="mt-10 product-ticker"
            />
            <Image
              src={website2}
              alt="Product Image-2"
              className="mt-10 product-ticker"
            />
            <Image
              src={website3}
              alt="Product Image-2"
              className="mt-10 product-ticker"
            />
            <Image
              src={website4}
              alt="Product Image-2"
              className="mt-10 product-ticker"
            />
          </motion.div>
          <Image
            src={atomImage}
            alt="Atom Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-20 -top-28"
          />
          <Image
            src={blockMatrix}
            alt="Block Image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
