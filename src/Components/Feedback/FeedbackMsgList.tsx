// import FeedbackMsgCard from "./FeedbackMsgCard"
// import UserProfile from '../../../assets/Feedback/user5.jpeg'
// import { FiArrowLeftCircle ,FiArrowRightCircle } from 'react-icons/fi';

// const FeedbackMsgList = () => {
//     const Feedback =[
//     {
//         image: UserProfile ,
//         content: "“I had the most incredible experience with Heaven Lanka! From the moment I booked my tour package until the very last day of my trip, everything was seamless. The personalized attention, knowledgeable guides, and attention to detail exceeded my expectations..”",
//         name :'Mike taylor',
//         location :'Lahore, Pakistan'
//     }

//     ]

//     return (
//         <div className="flex flex-row ">
//             <div className="flex flex-row gap-[40px] mt-[60px]">
//             <FiArrowLeftCircle className='w-10 h-10 text-[#FFFFFF] text-opacity-[50%] opacity-[50%] fill-[#999999]'/>
//              <FiArrowRightCircle className='w-10 h-10 text-[#FFFFFF] text-opacity-[50%]  fill-[#FA7436]'/>
//             </div>
            
//              <div className=" ml-[320px] -mt-[50px]">
//              {Feedback.map((message ,index) => (
//                  <FeedbackMsgCard key={index} message={message}  />
//              ))}
//              </div>
            
            

//         </div>
//     )

// }

// export default FeedbackMsgList

import React from 'react';
import FeedbackMsgCard from './FeedbackMsgCard';
import UserProfile from '../../../assets/Feedback/user5.jpeg';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const FeedbackMsgList = () => {
  const Feedback = [
    {
      image: UserProfile,
      content:
        '“I had the most incredible experience with Heaven Lanka! From the moment I booked my tour package until the very last day of my trip, everything was seamless. The personalized attention, knowledgeable guides, and attention to detail exceeded my expectations..”',
      name: 'Mike Taylor',
      location: 'Lahore, Pakistan',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:gap-[400px] items-center mt-4">
      <div className="flex gap-4 mt-4">
        <FiArrowLeftCircle className="w-8 h-8 text-[#FFFFFF] text-opacity-50 fill-[#999999]" />
        <FiArrowRightCircle className="w-8 h-8 text-[#FFFFFF] text-opacity-50 fill-[#FA7436]" />
      </div>

      <div className="mt-4">
        {Feedback.map((message, index) => (
          <FeedbackMsgCard key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackMsgList;
