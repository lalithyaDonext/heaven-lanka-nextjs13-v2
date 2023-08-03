import Image from "next/image";

const AdventureCard = ({adventure}:any) => {
    return ( 
        <div>
        <div className='h-[160px] w-[160px]   space-y-2 shadow-lg flex flex-col items-center justify-center bg-[#077B83] rounded-md  my-2'>
            <div className="h-[80px] w-full ">
                <Image
                    src={adventure?.image}
                    alt="item1"
                    style={{
                        objectFit: "contain",
                      
                        width: "100%",
                        height: "100%",
                    }}
                    width={450}
                    height={400}
                />
            </div>
           
        </div>
         <h1 className='text-[#077B83] text-sm w-[120px] h-[70px] text-center ml-5 mt-2 font-bold'>{adventure.name}</h1>
         </div>
     );
}
 
export default AdventureCard;