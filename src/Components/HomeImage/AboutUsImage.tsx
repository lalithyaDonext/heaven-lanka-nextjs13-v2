
import Image from "next/image";
import image from ".././../../assets/Tour/TourBg.png";
import Navbar from "../Navbar/Navbar";

const AboutUsImage = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="h-[800px] w-full ">
        <Image src={image} alt="item1" className="object-cover w-full h-full" />
      </div>
      <div className="absolute w-full h-[114px] ">
        <Navbar />
      </div>

      <div className="absolute container mx-auto px-20 top-48">
        <h1 className="text-[64px] leading-[70px] font-bold w-[490px] text-white font-[volkhov]">
          Embark on a Journey into Our World:
        </h1>
        <h5 className="text-[20px] font-normal w-[560px] mt-[20px] text-white">
          Unveiling the Essence and Spirit of Heaven Lanka!
        </h5>
      </div>
    </div>
  );
};

export default AboutUsImage;
