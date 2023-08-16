import Image from "next/image";
import image from '../../../assets/Tour/4N/4Nmap.png'
import flightImage from '../../../assets/Tour/Asset 8@3x 1.png'

const TourPageMap4N = () => {
  return (
    <div>
       
         <Image
                    src={image}
                    alt="item1"
                    className="object-cover w-full h-full"
                />       
        
    </div>
  )
}

export default TourPageMap4N