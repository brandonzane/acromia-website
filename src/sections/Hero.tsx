import ArrowIcon from "@/assets/arrow-right.svg";
// import cogImage from "@/assets/cog.png";
// import cylinderImage from "@/assets/cylinder.png";
import blackGloss from "@/assets/black-gloss.png";
import laptopImage from "@/assets/laptop.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#313232,#EAEEFE_40%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              <Link href={"/"}>Computer Help ver 1.0</Link>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#808080] text-transparent bg-clip-text mt-6">
              Elevate your brand with Acromia Design and Software
            </h1>
            <p className="text-xl text-[#0B0B0B] tracking-tight mt-6">
              Elevate your brand with Acromia Web design
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Book a Call</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={blackGloss}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={laptopImage}
              width={320}
              height={320}
              alt="Cog Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              height={220}
              alt="Noodle Image"
              className=" lg-block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
