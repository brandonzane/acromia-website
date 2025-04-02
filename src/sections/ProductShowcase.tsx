"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import productImage2 from "@/assets/product-image-2.png";
import websiteImage from "@/assets/website-1.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowIcon from "@/assets/arrow-right.svg";

export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Company Dashboards",
      description: "Customisable dashboards for your company",
      image: productImage,
      link: "/product1",
    },
    {
      id: 2,
      title: "Rent Zimbabwe",
      description: "Android and iOS app for renting properties in Zimbabwe",
      image: productImage2,
      link: "/product2",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Modern, responsive, and high-performance websites that help businesses grow their online presence",
      image: websiteImage,
      link: "/product3",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-b from-white to-primary-gray-50"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-heading mb-16"
        >
          <h2 className="section-title">Our Products</h2>
          <p className="section-description mt-4">
            Discover our advanced software solutions
          </p>
        </motion.div>

        {/* Product cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm overflow-hidden border border-primary-gray-200 hover:border-primary-black/40 transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden relative bg-primary-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-black mb-2">
                  {product.title}
                </h3>
                <p className="text-primary-gray-600 mb-4">
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className="text-primary-black flex items-center hover:text-primary-gray-600 transition-colors"
                >
                  Learn more <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
