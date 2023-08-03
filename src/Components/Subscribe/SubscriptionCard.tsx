'use client'; 
import Image from "next/image";
import Bg from '.././../../assets/Subscribe/subscribeBg.png'
import InputField from "./InputField";



const SubscriptionCard = () => {
    return ( 
      
            <div className='h-[416px] w-[1170px] space-y-4  flex flex-col bg-[#FA7436] rounded-[20px] pt-[60px]'>
               <div className="flex flex-row-reverse ">
                  
                  <div className="flex-col">
                  <Image
                    src={Bg}
                    alt="item1"
                    className="object-cover w-full h-full"
                />


                  </div>
                  <div className="flex-col pr-[100px]">
                  <h1 className="text-[48px] w-[500px] font-bold font-[volkhov] text-[#ffffff] text-center leading-[64px]">Subscribe and get exclusive deals & offer</h1>

                  </div>

               </div>
               <div className="pt-[5px] flex flex-row justify-center items-center">
               <InputField/>
               </div>
                
        </div>
    
     );
}
 
export default SubscriptionCard;