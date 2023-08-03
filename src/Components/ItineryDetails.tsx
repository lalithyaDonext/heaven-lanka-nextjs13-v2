import Image from "next/image";
import image from '../../assets/Tour/Vector 4863.png'

const ItineryDetails = () => {
  return (
    <div>
        
         <Image
                    src={image}
                    alt="item1"
                    className="mt-[250px]"
                />
        <div className="flex flex-row "></div>

        
    </div>
  )
}

export default ItineryDetails