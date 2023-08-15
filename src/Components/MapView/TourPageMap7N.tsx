import Image from "next/image";
import image from '../../../assets/Tour/7N/7N.png'
import flightImage from '../../../assets/Tour/Asset 8@3x 1.png'

const TourPageMap7N = () => {
  return (
    <div>
        {/* <div className=" mx-[40px] flex flex-row gap-[20px]  items-center">
            <Image

            src={flightImage}
            alt="flight"
            className=" w-[71px] h-[68px] "
            
            />
            <div className="font-[black] text-[40px] leading-[32px] font-[700]">
            Airport Pickup
            </div>

        </div> */}
         <Image
                    src={image}
                    alt="item1"
                    className="object-cover w-full h-full mt-[-40px]"
                />

            {/* <div className=" mx-[40px] flex flex-row justify-end gap-[20px] mt-[-250px]  items-center">

            <Image

            src={flightImage}
            alt="flight"
            className=" w-[71px] h-[68px] "
            
            />
            <div className=" font-[black] text-[40px] leading-[32px] font-[700] ">
            Airport Drop off
            </div>
            */}

        {/* </div> */}
        
    </div>
  )
}

export default TourPageMap7N