// import Image from "next/image";
// import rectangle from '../../../assets/DetailsIcon/Rectangle.png'

// const DetailsCard = ({item}:any) => {
//     return ( 
//         <div className="mt-5 w-[371px] h-[401px]  shadow-xl p-8 border border-gray-100 rounded-md ">
//             <div >
//                {item.icon}
//             </div>
//             <h1 className="font-bold text-[24px] leading-[30px] w-[250px] pt-8 pb-4"> {item.name}</h1>
//             <p>{item.details}</p>
//         </div>
//      );
// }
 
// export default DetailsCard;

import Image from "next/image";
import rectangle from "../../../assets/DetailsIcon/Rectangle.png";

const DetailsCard = ({ item }: any) => {
  return (
    <div className="mt-5 w-[120px] md:w-[371px] h-[auto] shadow-xl p-2 2xl:p-8 border border-gray-100 rounded-md">
      <div className="text-center md:text-left mb-4 md:mb-6">
        {item.icon}
      </div>
      <h1 className="font-bold text-[12px] md:text-2xl leading-[1.25] w-[60px] 2xl:w-[250px] pt-4 md:pt-8 pb-2 md:pb-4">
        {item.name}
      </h1>
      <p className="hidden text-sm md:flex md:text-base">{item.details}</p>
    </div>
  );
};

export default DetailsCard;
