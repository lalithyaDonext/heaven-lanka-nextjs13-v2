// import Image from "next/image";
// import image from '../../../assets/Tour/9N/9Nmap.png'
// import flightImage from '../../../assets/Tour/Asset 8@3x 1.png'

// const TourPageMap9N = () => {
//   return (
//     <div>
       
//          <Image
//                     src={image}
//                     alt="item1"
//                     className="object-cover w-full h-full mt-[-40px] pt-10"
//                 />

        
//     </div>
//   )
// }

// export default TourPageMap9N


import Image from "next/image";
import image from '../../../assets/Tour/9N/9Nmap.png'
import flightImage from '../../../assets/Tour/Asset 8@3x 1.png'

const TourPageMap9N = () => {
  return (
    <div className="flex justify-center">
      {/* <div className="max-w-full md:max-w-lg lg:max-w-xl"> */}
        <Image
          src={image}
          alt="item1"
          className="object-cover w-full h-full  pt-10"
        />
      {/* </div> */}
    </div>
  );
}

export default TourPageMap9N;
