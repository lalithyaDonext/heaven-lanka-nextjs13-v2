const DateInput = () => {
  return (
    <div className="mb-4">
      <div className="mb-2 font-bold text-gray-300 text-lg">
        <label htmlFor="travellingDate">Travelling Date</label>
      </div>
      <div className="flex gap-2">
        <input
          type="date"
          id="travellingDate"
          className="w-[50%] md:w-[180px] bg-transparent h-10 rounded-md border border-gray-300 bg-opacity-0 text-sm cursor-pointer text-black md:text-white pl-3"
        />
        <input
          type="date"
          id="returnDate"
          className="w-[50%] md:w-[180px] bg-transparent h-10 rounded-md border border-gray-300 bg-opacity-0 text-sm cursor-pointer text-black md:text-white pl-3"
        />
      </div>
    </div>
  );
}

export default DateInput;
