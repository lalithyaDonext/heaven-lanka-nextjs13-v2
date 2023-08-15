const LocationInput = () => {
    return (
      <div className="mb-4">
        <div className="mb-2 font-bold text-gray-300 text-lg">
          <label htmlFor="location">Location</label>
        </div>
        <select
          id="location"
          className="w-full md:w-[200px] bg-transparent h-10 rounded-md outline-none border border-white-300 bg-opacity-0 text-sm text-white md:px-4 pl-3"
        >
          <option value="sri lanka">Sri Lanka</option>
        </select>
      </div>
    );
  }
  
  export default LocationInput;
  