import Cultural from '../../../assets/Vaccation/Cultural.png'
import WildLife from '../../../assets/Vaccation/WildLife.png'
import Island from '../../../assets/Vaccation/Island.png'
import HillCountry from '../../../assets/Vaccation/HillCountry.png'
import { FiArrowLeftCircle ,FiArrowRightCircle } from 'react-icons/fi';

import VaccationCard from './VaccationCard';


const VaccationList = () => {
    const VaccationLists = [
        {
          image: Cultural,
          name: "Cultural Highlights",
          rate:'5.0',
          price:'$400',
          duration:'4N/5D',
          quoted:'per person'
        },
        {
          image: WildLife,
          name: "Adventurous Escapes",
          rate:'5.0',
          price:'$400',
          duration:'3N/4D',
          quoted:'per person'
        },
        
        {
            image: Island,
            name: "Historical Marvels",
            rate:'4.0',
            price:'$800',
            duration:'6N/7D',
            quoted:'per person'
          },
          {
            image: HillCountry,
            name: "Wellness Retreats",
            rate:'4.9',
            price:'$500',
            duration:'8N/9D',
            quoted:'per person'
          },
          // {
          //   image: beach,
          //   name: "Unspoiled Beaches",
          // },
          // {
          //   image: beach,
          //   name: "Unspoiled Beaches",
          // },
    ]
    return ( 
      <div>
        <div className='flex flex-row items-center gap-[30px] justify-center mt-4'>
     
                {VaccationLists.map((item, index)=>(
                    <VaccationCard key={index} item={item}/>
                ))}
           
          
        </div>
        <div className="flex flex-row justify-center items-center gap-[40px] mt-[30px]">
            <FiArrowLeftCircle className='w-10 h-10 text-[#FFFFFF] fill-[#999999]'/>
             <FiArrowRightCircle className='w-10 h-10 text-[#FFFFFF]   fill-[#077B83]'/>
            </div>
        </div>
     );
}
 
export default VaccationList;