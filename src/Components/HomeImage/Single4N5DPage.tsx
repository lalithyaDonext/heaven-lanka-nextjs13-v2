
import Image from "next/image";
import image from '.././../../assets/Tour/4N5D.png'
import Navbar from "../Navbar/Navbar";
import NavbarOne from "../Navbar/Navbar1";

const Singl4N5DPageImage = () => {
    return (
       
        <div className="relative flex flex-col items-center">
            <div className="h-[800px] w-full mt-[70px] ">
                <Image
                    src={image}
                    alt="item1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute  w-full h-[114px] ">
                    <NavbarOne/>
            </div>
            <div className="absolute flex items-center justify-center text-[32px] font-[700] text-[white] bg-[#077B83] bg-opacity-[50%] w-[180px] h-[64px] rounded-[25px] top-[760px]">
       4N/5D
       </div>
 
          
        </div>
        
    );
}

export default Singl4N5DPageImage;