import Image from "next/image";
import rectangle from '../../../assets/DetailsIcon/Rectangle.png'

const DetailsCard = ({item}:any) => {
    return ( 
        <div className="mt-5 w-[371px] h-[401px]  shadow-xl p-8 border border-gray-100 rounded-md ">
            <div >
               {item.icon}
            </div>
            <h1 className="font-bold text-[24px] leading-[30px] w-[250px] pt-8 pb-4"> {item.name}</h1>
            <p>{item.details}</p>
        </div>
     );
}
 
export default DetailsCard;