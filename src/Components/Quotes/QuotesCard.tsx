import DateInput from "./DateInput";
import DurationInput from "./Duration";
import GuestInput from "./GuestInput";
import LocationInput from "./LocationInput";
import QuoteButton from "./QuoteButton";

const QuotesCard = () => {
  return (
    <div className='md:w-[1170px] mx-auto px-4 md:px-0 py-8 md:py-8 space-y-4 bg-[gostwhite] 2xl:bg-white-200 rounded-md md:rounded-lg shadow-lg md:backdrop-blur-sm md:bg-opacity-15'>
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
