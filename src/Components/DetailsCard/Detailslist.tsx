import rectangle from '../../../assets/DetailsIcon/Rectangle.png'
import {HiOutlineAdjustmentsHorizontal} from 'react-icons/hi2'
import { BsPersonBoundingBox } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";
import DetailsCard from './DetailsCard';

const DetailsList = () => {
    const detailslists = [
          {
            icon: <HiOutlineAdjustmentsHorizontal className="w-[40px] h-[40px] text-[#E9B4A5]"/>,
            name: "Personlized Tour Package",
            details: "Experience Sri Lanka like never before with our personalized tour packages.Our expert travel planners will work with you to create a tailor-made itinerary that fits your interests,budget, and schedule. we'll take care of everything",
          },
          {
            icon: <BsPersonBoundingBox className="w-[40px] h-[40px] text-[#E9B4A5]"/>,
            name: "Knowledgeable guides",
            details: "Discover the beauty and history of Sri Lanka with our knowledgeable guides. Our experienced and passionate guides have in-depth knowledge of the country's culture, history, and are dedicated to providing you with travel experience",
          },
          {
            icon: <RxOpenInNewWindow className="w-[40px] h-[40px] text-[#E9B4A5]"/>,
            name: "Exclusive access to local experiences",
            details: "Explore Sri Lanka like a local with our exclusive access to unique experiences. We offer a variety of off-the-beaten-path activities that allow you to immerse yourself in the local culture and experience the country's hidden gems",
          },
    ]
    return ( 
        <div className='flex flex-row gap-8 justify-center '>
            {detailslists.map((item, index) =>(
                <DetailsCard  key={index} item={item}/>
            ))}
        </div>
     );
}
 
export default DetailsList;