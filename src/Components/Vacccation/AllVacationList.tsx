import Cultural from '../../../assets/Vaccation/Cultural.png'
import WildLife from '../../../assets/Vaccation/WildLife.png'
import Island from '../../../assets/Vaccation/Island.png'
import HillCountry from '../../../assets/Vaccation/HillCountry.png'
import { FiArrowLeftCircle ,FiArrowRightCircle } from 'react-icons/fi';

import VaccationCard from './VaccationCard';


const AllVaccationList = () => {
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
              name: "Customize a trip?",
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

    const firstRow = VaccationLists.slice(0, 4);
    const secondRow = VaccationLists.slice(4);
    return ( 
      <div>
       <div className='flex flex-row items-center gap-[30px] justify-center mt-4'>
        {firstRow.map((item, index) => (
          <VaccationCard key={index} item={item} />
        ))}
      </div>
      <div className='flex flex-row items-center gap-[30px] justify-center mt-4'>
        {secondRow.map((item, index) => (
          <VaccationCard key={index} item={item} />
        ))}
      </div>
     
        </div>
     );
}
 
export default AllVaccationList;