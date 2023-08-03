import SubButton from "./button";

const InputField = () => {
    return ( 

       
        <div>
        <input type="email" name="email"
         placeholder="Enter Your Email " 
         className="h-[68px] w-[674px] bg-[#FFFFFF] rounded-[10px] p-[20px]" ></input>
        
        <div className="-mt-[61px] ml-[525px]">
        <SubButton/>
        </div>
        </div>
       
     );
}
 
export default InputField;