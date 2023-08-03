import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Google from '../../../../assets/Tour/google.png';
import TripAdvisor from '../../../../assets/Tour/tripadvisor.png'

const Ratings = () => {
  const starCount = 5; // Number of stars to display

  return (
    <div className="flex flex-row justify-center gap-[80px]">
      <div className="flex flex-row gap-5 items-center">
        <div>
          <Image src={Google} alt="Google" className="w-[70px] h-[70px]" />
        </div>
        <div className='flex flex-row gap-1 '>
          {[...Array(starCount)].map((_, index) => (
            <FaStar className='w-6 h-6 text-[#fbbc05]' key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div>
          <Image src={TripAdvisor} alt="Google" className="w-[70px] h-[70px]" />
        </div>
        <div className='flex flex-row gap-1 '>
          {[...Array(starCount)].map((_, index) => (
            <FaStar className='w-6 h-6 text-[#fbbc05]' key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;
