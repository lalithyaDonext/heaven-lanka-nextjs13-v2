
import Image from "next/image";
import image from '.././../../assets/Tour/Tour.png'
import Navbar from "../Navbar/Navbar";

const TourImage = () => {
    return (
       
        <div className="relative flex flex-col items-center">
            <div className="h-[800px] w-full ">
                <Image
                    src={image}
                    alt="item1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute w-full h-[114px]">
                    <Navbar />
            </div>

            <div className="absolute container mx-auto px-20 top-48">
                <h1 className="text-[64px] leading-[70px] font-bold w-[490px] text-white font-[volkhov]">Embark on an Extraordinary Journey.</h1>
                <h5 className="text-[20px] font-normal w-[560px] text-white">Discover the Treasures of Sri Lanka with Heaven Lanka Tours!</h5>
            </div>
        </div>
        
    );
}

export default TourImage;