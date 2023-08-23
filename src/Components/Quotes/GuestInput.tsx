const DurationInput = () => {
    return (
      <div className="mb-4">
        <div className="mb-2 font-bold text-gray-300 text-lg">
          <label htmlFor="guests">Guests</label>
        </div>
        <select
          id="guests"
          className="w-full md:w-[150px] bg-transparent h-10 rounded-md border border-gray-300 bg-opacity-0 text-sm cursor-pointer text-black md:text-white pl-3"
        >
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
        </select>
      </div>
    );
  }
  
  export default DurationInput;
  