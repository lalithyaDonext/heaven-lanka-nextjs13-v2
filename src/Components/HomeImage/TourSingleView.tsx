
import Image from "next/image";
import image from '.././../../assets/Tour/SingleView.png'
import Navbar from "../Navbar/Navbar";
import NavbarOne from "../Navbar/Navbar1";

const TourSingleViewImage = () => {
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
         
          
        </div>
        
    );
}

export default TourSingleViewImage;