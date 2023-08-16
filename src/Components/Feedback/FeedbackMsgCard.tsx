// import Image from "next/image";

// const FeedbackMsgCard = ({message}:any) => {
//     return (
//         <div className="relative">
//         <div className="absolute -left-10 top-1/5 transform -translate-y-1/2 w-[80px] h-[80px] bg-black rounded-full">
//             <Image
//                     src={message?.image}
//                     alt="adventure1"
//                     style={{
//                         objectFit: "contain",
//                         backgroundColor: "white",
//                         width: "100%",
//                         height: "100%",
//                     }}
//                     width={80}
//                     height={80}
//                     className="rounded-full"
//                 />
//         </div>
//         <div className='w-[518px] h-[276px] p-[40px]  shadow-lg flex flex-col bg-[#ffffff]  border border-gray-100 rounded-md  my-2'>
//             <div className=" text-left  text-[#E9B4A5] font-medium ">
//             {message.content}
//             </div>
//             <div className=" mt-[30px] text-[14px] text-[#077B83] text-left font-medium ">
//             {message.name}
//             </div>
//             <div className=" mt-[5px] text-[12px] text-[#222222] text-left font-normal ">
//             {message.location}
//             </div>


//         </div>
//         </div>
//     )
// }

// export default FeedbackMsgCard



import React from 'react';
import Image from 'next/image';

const FeedbackMsgCard = ({ message }: any) => {
  return (
    <div className="relative">
      <div className="absolute  top-1/5  transform -translate-y-1/2 -translate-x-1/2 w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-black rounded-full">
        <Image
          src={message?.image}
          alt="adventure1"
          style={{
            objectFit: 'contain',
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          }}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="w-full md:w-[400px] h-[175px] md:h-[200px] p-4 md:p-5 shadow-md flex flex-col bg-[#ffffff] border border-gray-100 rounded-md my-2">
        <div className="text-left text-[#E9B4A5] font-medium text-xs md:text-sm">
          {message.content}
        </div>
        <div className="mt-1 md:mt-2 text-[12px] text-[#077B83] text-left font-medium text-xs md:text-sm">
          {message.name}
        </div>
        <div className="mt-1 text-[10px] text-[#222222] text-left font-normal text-xxs md:text-xs">
          {message.location}
        </div>
      </div>
    </div>
  );
};

export default FeedbackMsgCard;
