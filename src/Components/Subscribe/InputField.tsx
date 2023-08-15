import SubButton from "./button";

const InputField = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:w-[625px] md:bg-white md:rounded-[10px]">
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="w-full md:w-[400px] h-[68px] bg-[#FFFFFF] rounded-[10px] p-[20px] mb-4 md:mb-0 md:mr-4"
      />

      <div>
        <SubButton />
      </div>
    </div>
  );
};

export default InputField;
