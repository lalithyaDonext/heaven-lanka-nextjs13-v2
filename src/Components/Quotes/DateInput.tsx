const DateInput = () => {
    return ( 

       
        <div>
        <div className=" mb-[20px] font-bold text-[#E5E5E5] text-[20px]">
        <label >Travelling Date</label>
        </div>
       <div className="flex flex-row">
       <input type="date" className="h-[38px] w-[144.9px]  rounded-[10px] rounded-e-[0px] border solid border-[#E5E5E5] border-[3px] outline-none border-e-[0px] bg-white bg-opacity-[0%] text-[14px] p-[10px] text-white" >
        </input>
        <input type="date"  className="h-[38px] w-[144.9px]  rounded-[10px] rounded-s-[0px]  border solid border-[#E5E5E5] outline-none border-[3px] border-s-[0px] bg-white bg-opacity-[0%] text-[14px] p-[10px] text-[#FFFFFF] " >
        </input>
       </div>
       {/* <style>
        {`
          input[type="date"]::-webkit-calendar-picker-indicator {
            background-color: #E9B4A5;
            color: white;
            font-size: 14px;
            padding: 4px;
            border-radius: 50%;
            cursor: pointer;
            position: relative;
          }
       
        `}
      </style> */}
        
        </div>
       
     );
}
 
export default DateInput;