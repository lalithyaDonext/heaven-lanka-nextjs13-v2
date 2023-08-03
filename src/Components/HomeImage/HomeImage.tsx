'use client'; 
import Image from "next/image";
import image from '.././../../assets/MainImage/mainimage.png'
import Navbar from "../Navbar/Navbar";

const HomeImage = () => {
    return (
       
        <div className="relative flex flex-col items-center">
            <div className="h-[800px] w-full ">
                <Image
                    src={image}
                    alt="item1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className=" absolute w-full h-[114px]">
                    <Navbar />
            </div>

            <div className="absolute container mx-auto px-20 top-48">
                <h1 className="text-[64px] leading-[70px] font-bold w-[490px] text-white font-[volkhov]">Get started your exciting journey with us.</h1>
                <h5 className="text-[20px] font-normal w-[560px] text-white">A team of experienced toruism professionals will provide you with the besr advice and tips for your desire place</h5>
            </div>
        </div>
        
    );
}

export default HomeImage;