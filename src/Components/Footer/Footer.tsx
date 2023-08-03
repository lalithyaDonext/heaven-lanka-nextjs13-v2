import Image from "next/image";
import { FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa";
import logo from ".././../../assets/Logo/logo1.png";

const FooterView = () => {
  return (
    <div className="pb-[40px]">
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-2">
        <div className="w-[150px] h-[72px]">
          <Image
            src={logo}
            alt="item1"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="w-[250px] mt-[20px] text-left text-sm text-[#666666]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex flex-row gap-5 mt-[20px] ">
            <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center">
                <FaFacebookF className="text-[#E9B4A5]"/>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#FA7436] flex justify-center items-center">
                <FaInstagram className="text-[#FFFFFF]"/>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center">
                <FaTwitter className="text-[#E9B4A5]"/>
            </div>
            

        </div>
      </div>

      <div className="col-span-1 text-sm">
        <div className="font-semibold text-[#077B83] mt-[20px] mt-[25px] leading-[26px]">
          Company
        </div>
        <div className="mt-[20px]">About</div>
        <div className="mt-[20px]">Career</div>
        <div className="mt-[20px]">Logistic</div>
        <div className="mt-[20px]">Privacy & Policy</div>
      </div>

      <div className="col-span-1 text-sm">
        <div className="font-semibold text-[#077B83] mt-[20px] mt-[25px] leading-[26px]">
          Contact
        </div>
        <div className="mt-[20px]">Help/FAQ</div>
        <div className="mt-[20px]">Press</div>
        <div className="mt-[20px]">Affilates</div>
      </div>

      <div className="col-span-1 text-sm">
        <div className="font-semibold text-[#077B83] mt-[20px] mt-[25px] leading-[26px]">
          More
        </div>
        <div className="mt-[20px]">Press Centre</div>
        <div className="mt-[20px]">Our Blog</div>
        <div className="mt-[20px]">Low fare tips</div>
      </div>

    </div>
    <div className=" mt-[20px] border border-[1px] bg-[#999999] bg-opacity-[56%]">
        <hr/>
    </div>
    <div className="grid grid-cols-2 ">
        <div className="font-normal text-[#222222] mt-[20px] mt-[25px] leading-[26px] text-[12px] text-left">
        Copyright, Heaven Lanka 2023. All rights reserved.
        </div>
        <div className="font-normal text-[#222222] mt-[20px] mt-[25px] leading-[26px] text-[12px] text-right">
        Terms & Conditions
        </div>

    </div>
    </div>
  );
};

export default FooterView;
