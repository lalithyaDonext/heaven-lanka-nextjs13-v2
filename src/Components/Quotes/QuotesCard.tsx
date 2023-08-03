import DateInput from "./DateInput";
import DurationInput from "./Duration";
import GuestInput from "./GuestInput";
import LocationInput from "./LocationInput";
import QuoteButton from "./QuoteButton";

const QuotesCard = () => {
    return ( 
      
            <div className='h-[176px] w-[1170px] space-y-4  flex flex-col justify-center bg-white rounded-[20px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] drop-shadow-lg backdrop-blur-sm  bg-opacity-[15%] pl-[30px]'>
              <div className="flex flex-row gap-[25px]"> 
              <LocationInput/>
              <DateInput/>
              <DurationInput/>
              <GuestInput/>
              <QuoteButton  />
              </div>
              
             
                
        </div>
    
     );
}
 
export default QuotesCard;