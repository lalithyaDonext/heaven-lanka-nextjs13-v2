'use client'; 
import FeedbackMsgList from "../Feedback/FeedbackMsgList";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import AllVaccationList from "../Vacccation/AllVacationList";
import SpecialVacationaList from "../Vacccation/SpecialVacationList";
import QuoteForm from "../Quotes/QuateForm";
import SimpleChatbot from "../ChatBot/Chatbot";


const TourContent = () => {
  
    return (
        <div className="">
            <div className="  -mt-[185px] flex flex-row justify-center ">
                <QuotesCard/>
            </div>
            <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
                <h1 className="text-[48px] font-bold font-[volkhov]">vacation <span className="text-[#077B83]">plans</span></h1>
                <p className="w-[850px]  text-[20px] text-center leading-[8px] text-[#222222]">"Embark on an unforgettable adventure with our 'Ultimate Sri Lanka' tour package.</p>
                <p className="w-[1000px]  text-[20px] text-center leading-[20px] text-[#222222]">Discover the country's stunning landscapes, ancient temples, and wildlife on this comprehensive tour.</p>

            </div>

            <div className="container mx-auto px-20 mt-8">

                <AllVaccationList />
            </div>
            <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
                <h1 className="text-[48px] font-bold font-[volkhov] ">Special vacation <span className='text-[#077B83]' >plans</span></h1>
                <p className="w-[850px]  text-[20px] text-center leading-[8px] text-[#222222]">Unforgettable Experiences for Honeymoons and Luxury Getaways</p> 
             

            </div>

            
            <div className=" container mx-auto px-20 mt-[55px]">
                <SpecialVacationaList />
            </div>

           

            
            <div className="mt-[90px] pt-[40px] pb-[40px] pl-[250px] pr-[150px] bg-[#077B83] bg-opacity-[12%] items-center justify-center">
            <div className="container mx-auto px-60  flex flex-col  mt-10 space-y-4">
                    <h1 className="text-[48px] font-bold font-[volkhov] -ml-[60px] text-left">Voices <span className="text-[#077B83]">of Delight :</span></h1>
                    <p className="w-[500px] text-[20px] text-left -ml-[60px] ">Hear What Our Customers Have to Say!</p>

                   
            </div >
            <div className="container mx-auto px-60 mt-[-8px] ">
            <FeedbackMsgList/>
            </div>

                
            </div>


            <div className="container mx-auto px-20 p-10 mb-[250px]  flex flex-col justify-center items-center">
                <div className=" flex flex-col justify-center items-center mt-8 space-y-4">
                    <h1 className="text-[48px] font-bold font-[volkhov]">Yes!  <span className="text-[#077B83]">Sri Lanka Your Ideal Vacation Destination</span></h1>
                    <p className="w-[980px]  text-center text-[20px]">Escape to Sri Lanka and unlock a world of wonders. With its pristine beaches, lush landscapes, vibrant culture, and rich heritage, Sri Lanka offers an unparalleled vacation experience. Discover a land where ancient temples stand alongside modern cities, where wildlife roams freely in national parks, and where warm hospitality embraces every visitor. Whether you seek relaxation on golden shores, thrilling adventures in the wilderness, or cultural immersion in historical treasures, Sri Lanka promises an unforgettable vacation that will captivate your heart and leave you yearning for more.</p>
                </div>

                <div className="mt-[60px] ml-[250px] mr-[250px]">
                <p className="text-[18px] leading-[32px] ">1. <span className="text-[#077B83]">Breathtaking Beaches:</span>Sink your toes into soft sands, soak up the sun, and swim in crystal-clear waters along Sri Lanka's stunning coastline. From lively beach towns to secluded coves, there's a beach for every mood.</p>
                <p className="text-[18px] leading-[32px]">2. <span className="text-[#077B83]">Lush Landscapes:</span>Explore the enchanting landscapes of Sri Lanka, from rolling tea plantations to mist-covered mountains and cascading waterfalls. Trek through verdant forests and marvel at the diversity of flora and fauna that thrive here.</p>
                <p className="text-[18px] leading-[32px]">3. <span className="text-[#077B83]">Rich Cultural Heritage:</span>Immerse yourself in Sri Lanka's rich cultural heritage, with ancient cities, UNESCO World Heritage sites, and religious landmarks. Witness traditional ceremonies, explore intricate temples, and delve into centuries-old history.</p>
                <p className="text-[18px] leading-[32px]">4. <span className="text-[#077B83]">Wildlife Encounters:</span>Embark on thrilling wildlife safaris and witness elephants, leopards, birds, and other exotic creatures in their natural habitats. Sri Lanka's national parks and reserves offer incredible opportunities for wildlife enthusiasts.</p>
                <p className="text-[18px] leading-[32px]">5. <span className="text-[#077B83]">Adventure Awaits:</span>From thrilling water sports and exhilarating hikes to scenic train rides and hot air balloon flights, Sri Lanka presents endless opportunities for adventure seekers.</p>
                <p className="text-[18px] leading-[32px]">6. <span className="text-[#077B83]">Warm Hospitality:</span> Experience the genuine warmth and hospitality of the Sri Lankan people, who will make you feel right at home and ensure your vacation is filled with unforgettable moments.</p>
                <p className="text-[18px] leading-[32px]">7. <span className="text-[#077B83]">Mouthwatering Cuisine:</span>Indulge in the flavors of Sri Lanka, where aromatic spices, fresh seafood, and exotic fruits come together to create a culinary paradise. Sample delicious curries, street food delicacies, and traditional sweets.</p>
                <p className="text-[18px] leading-[32px]">8. <span className="text-[#077B83]">Serene Wellness Retreats:</span>Find tranquility and rejuvenation at wellness retreats in Sri Lanka, offering yoga, meditation, Ayurvedic treatments, and spa experiences to revitalize your mind, body, and soul.</p>
                <p className="text-[18px] leading-[32px]">9. <span className="text-[#077B83]">Festivals and Celebrations:</span>Immerse yourself in the vibrant festivals and cultural celebrations of Sri Lanka, where colorful processions, traditional dance performances, and music fill the streets with joy and excitement.</p>
                <p className="text-[18px] leading-[32px]">10. <span className="text-[#077B83]">Safe and Welcoming:</span>Sri Lanka is known for being a safe and welcoming destination, where travelers can explore with peace of mind and create beautiful memories.</p>
                </div>
                <div className="mt-20 mb-5" >
                <QuoteForm/>
            </div>
            </div>
         


            <div className="container mx-auto px-20 absolute -mt-[220px] ml-[180px] flex flex-col justify-center items-center">
                <SubscriptionCard/>
            </div>


            <div className="mt-[0px] pt-[250px] pb-[60px] pl-[150px] pr-[150px] bg-[#077B83] bg-opacity-[10%]">
                <div className="container mx-auto px-60">
                <FooterView/>
                </div>
               
            </div>
            
           
            <SimpleChatbot/>
        </div>
    );
}

export default TourContent;