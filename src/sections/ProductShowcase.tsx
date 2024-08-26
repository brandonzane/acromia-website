import Image from "next/image";
import productImage from "@/assets/product-image.png";
import atomImage from "@/assets/atom-shadow.png";
import blockMatrix from "@/assets/blockMatrix.png";

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
            Our developers use the latest technologies and frameworks to ensure
            your website performs optimally and scales effortlessly with your
            growth.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image
            src={atomImage}
            alt="Atom Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={blockMatrix}
            alt="Block Image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#2E1343]">
          Custom built platforms and tools for analytics productivity and
          payments.
        </p>
      </div>
    </section>
  );
};
