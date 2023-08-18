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
          <option value="6">6 Days</option>
        </select>
      </div>
    );
  }
  
  export default DurationInput;
  