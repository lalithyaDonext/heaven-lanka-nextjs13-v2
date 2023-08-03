import Image from 'next/image';
import beach from '../../../assets/Treasures/beach.png'

const TreasuresCard = ({item}:any) => {
    return ( 
        <div className='h-52 w-52 p-2 space-y-2 shadow-lg flex flex-col items-center justify-center border border-gray-100 rounded-md  my-2'>
            <div className="h-36 w-full ">
                <Image
                    src={item?.image}
                    alt="item1"
                    style={{
                        objectFit: "contain",
                        backgroundColor: "white",
                        width: "100%",
                        height: "100%",
                    }}
                    width={450}
                    height={400}
                />
            </div>
            <h1 className='text-[#077B83] text-sm'>{item.name}</h1>
        </div>
     );
}
 
export default TreasuresCard;