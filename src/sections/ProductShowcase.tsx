"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import productImage2 from "@/assets/product-image-2.png";
import websiteImage from "@/assets/website-1.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowIcon from "@/assets/arrow-right.svg";
import "@/styles/glow-effects.css";

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
            Discover our innovative solutions designed to transform your
            business
          </p>
        </motion.div>

        {/* Product cards with glow effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card bg-white rounded-sm shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-primary-gray-600 mb-4">
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className="inline-flex items-center text-primary-black hover:text-primary-black/80 transition-colors"
                >
                  Learn More
                  <ArrowIcon className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
