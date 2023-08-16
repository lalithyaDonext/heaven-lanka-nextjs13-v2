
import Image from "next/image";
import image from '.././../../assets/Tour/4N5D.png'
import Navbar from "../Navbar/Navbar";
import NavbarOne from "../Navbar/Navbar1";

const Singl4N5DPageImage = () => {
    return (
       
        <div className="relative">
        <div className="w-full">
            <Image
                src={image}
                alt="item1"
                className="object-cover w-full"
            />
        </div>
        <div className="absolute w-full top-0">
            <NavbarOne/>
        </div>
       
        <div className="absolute flex items-center justify-center text-xs md:text-sm font-bold text-white bg-blue-500 bg-opacity-50 w-16  md:w-[180px] md:h-[64px] md:rounded-[25px] md:text-[32px] md:font-[700] md:top-[680px]  rounded-xl bottom-2 left-1/2 transform -translate-x-1/2 ">
            4N/5D
        </div>
    

    </div>
        
    );
}

export default Singl4N5DPageImage;