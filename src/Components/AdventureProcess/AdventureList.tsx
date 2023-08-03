import { FiChevronRight } from 'react-icons/fi';
import phone from '../../../assets/Adventure/call.png'
import Chat from '../../../assets/Adventure/Chat.png'
import Choice from '../../../assets/Adventure/Choice.png'
import Confirmed from '../../../assets/Adventure/Confirmed.png'
import AdventureCard from './AdventureCard';

const AdventureList = () => {
   const adventure1=[
      {
        image: phone,
        name: "Dream On, Inquire Away!",
      },
      {
        image: Chat,
        name: "Let's Chat and Make Magic Happen!",
      },
      {
        image: Choice,
        name: "Choice Galore: Your Customized Trip!",
      },
      {
        image: Confirmed,
        name: "Sealed with Wanderlust: Trip Confirmed!",
      },
    ]
    return ( 
      <div className="flex flex-row items-center gap-8 justify-center mt-4">
      {adventure1.map((item, index) => (
        <>
          <AdventureCard key={index} adventure={item} />
          {index !== adventure1.length - 1 && (
            <FiChevronRight className="text-[#077B83] h-8 w-8 -mt-[25px]" />
          )}
        </>
      ))}
    </div>
     );
}
 
export default AdventureList;