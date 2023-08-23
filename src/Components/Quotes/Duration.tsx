const DurationInput = () => {
    return (
      <div className="mb-4">
        <div className="mb-2 font-bold text-gray-300 text-lg">
          <label htmlFor="tourDuration">Tour Duration</label>
        </div>
        <select
          id="tourDuration"
          className="w-full md:w-[150px] bg-transparent h-10 rounded-md border border-gray-300 bg-opacity-0 text-sm text-black md:text-white pl-3"
        >
          <option value="1">1 Day</option>
          <option value="2">2 Days</option>
          <option value="3">3 Days</option>
          <option value="4">4 Days</option>
          <option value="5">5 Days</option>
          <option value="6">6 Days</option>
          <option value="7">7 Days</option>
          <option value="8">8 Days</option>
          <option value="9">9 Days</option>
          <option value="10">10 Days</option>
        </select>
      </div>
    );
  }
  
  export default DurationInput;
  