import Image from "next/image";
import productImage from "@/assets/product-image.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Elevate Your Digital Presence with Acromia</div>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#714891] text-transparent bg-clip-text mt-5">
          Cutting-Edge Technology:
        </h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#2E1343]">
          {" "}
          Our developers use the latest technologies and frameworks to ensure
          your website performs optimally and scales effortlessly with your
          growth.
        </p>
        <Image src={productImage} alt="Product Image" className="" />
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#2E1343]">
          Custom built platforms and tools for analytics productivity and
          payments.
        </p>
      </div>
    </section>
  );
};
