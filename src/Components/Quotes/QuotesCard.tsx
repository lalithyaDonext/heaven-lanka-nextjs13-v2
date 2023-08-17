import DateInput from "./DateInput";
import DurationInput from "./Duration";
import GuestInput from "./GuestInput";
import LocationInput from "./LocationInput";
import QuoteButton from "./QuoteButton";

const QuotesCard = () => {
  return (
    <div className='md:w-[1170px] w-full mx-auto px-4 md:px-0 py-8 md:py-8 space-y-4 bg-[gostwhite]  md:bg-white md:rounded-[20px] md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] md:drop-shadow-lg md:backdrop-blur-sm  md:bg-opacity-[15%] pl-[30px]  rounded-md shadow-lg  md:bg-opacity-15'>
      <div className="flex flex-col md:flex-row md:gap-x-4 md:px-8">
        <LocationInput />
        <DateInput />
        <DurationInput />
        <GuestInput />
        <QuoteButton />
      </div>
    </div>
  );
}

export default QuotesCard;
