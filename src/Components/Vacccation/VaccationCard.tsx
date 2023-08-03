import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/navigation';



const VaccationCard = ({item}:any) => {

    const router =useRouter();


    return ( 
        <div className='h-[340px] w-52   shadow-lg flex flex-col   border border-gray-100 rounded-md  my-2'>
            <div className='absolute  pt-[10px] pl-[120px]  '>
            <button className=" w-[72px] h-[20px] bg-[#077B83] rounded-[10px] text-[#FFFFFF] text-[12px]">{item.duration}</button>
            </div>
            <div  >
                <Image
                className=" border rounded-[10px] pt-[-10px]"
                    src={item?.image}
                    alt="item1"
                    style={{
                        objectFit: "contain",
                        backgroundColor: "white",
                        width: "100%",
                        height: "100%",
                    }}
                  
                />
            </div>
            <h1 className='text-[#077B83] text-sm font-semibold text-left pl-[10px] pt-[10px]' onClick={() => router.push('/singlePage')} >{item.name}</h1>
            <div className='flex flex-row  gap-[6px]'>
                
                <div className='text-[#fbbc05] pl-[10px] mt-[3px]'><FaStar/></div>
                <div>{item.rate}</div>
            </div>
            <div className='flex flex-row  gap-[8px] '>
                
                <div className='pl-[95px]'>From</div>
                <div >
                <button className=" w-[52px] h-[28px] bg-[#FA7436] rounded-[10px] text-[#FFFFFF] text-sm">{item.price}</button>
                    <span className='text-[10px] text-[#444444]'>{item.quoted}</span>
                </div>
                
            </div>
        </div>
     );
}
 
export default VaccationCard;