'use client'; 
import Image from "next/image";
import Bg from '.././../../assets/Feedback/Asset 2@3x 2.png'

import AdventureList from "../AdventureProcess/AdventureList";
import DetailsList from "../DetailsCard/Detailslist";
import TreasuresList from "../Treasures/TreasuresList";
import FeedbackMsgList from "../Feedback/FeedbackMsgList";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import VaccationList from "../Vacccation/VaccationList";
import SimpleChatbot from "../ChatBot/Chatbot";


const HomeContent = () => {
  return (
    <div className="">
      <div className=" -mt-[185px] flex flex-row justify-center">
        <QuotesCard />
      </div>

      <div className="">
      <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px]  space-y-4">
        <h1 className="text-[48px] font-bold font-[volkhov]">
          Why <span className="text-[#077B83]">Heaven Lanka</span>
        </h1>
        <p className="w-[600px] text-center text-[20px] text-[#222222]">
          At Heaven Lanka, we are passionate about providing our clients with an
          exceptional travel experience
        </p>
      </div>

      <div className="container mx-auto px-20 mt-8">
        <DetailsList />
      </div>
      </div>

      <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
        <h1 className="text-[48px] font-bold font-[volkhov]">
          <span className="text-[#077B83]">Best</span> vacation plans
        </h1>
        <p className="w-[850px]  text-[20px] text-center leading-[8px] text-[#222222]">
          Embark on an unforgettable adventure with our &apos;Ultimate Sri Lanka&apos;
          tour package.
        </p>
        <p className="w-[1000px]  text-[20px] text-center leading-[20px] text-[#222222]">
          Discover the country&apos;s stunning landscapes, ancient temples, and
          wildlife on this comprehensive tour.
        </p>
      </div>

      <div className=" container mx-auto px-20 mt-[55px]">
        <VaccationList />
      </div>

      <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
        <h1 className="text-[48px] font-bold font-[volkhov]">
          <span className="text-[#077B83]">Sri Lanks&apos;s</span> Tresasures
        </h1>
        <p className="w-[790px]  text-[20px] text-[#222222] text-center">
          Discover the highlights of Sri Lanka, where natural wonders, cultural
          marvels, and unforgettable experiences await.
        </p>
      </div>

      <div className=" container mx-auto px-20 mt-8">
        <TreasuresList />
      </div>

      <div className=" flex flex-col mt-[90px] pb-[40px]  bg-[#077B83] bg-opacity-[12%] ">
        <div className=" items-left flex justify-start">
        <Image
                    src={Bg}
                    alt="item1"
                    className=""
                />

        </div>
        <div className="items-center gap-[20px] justify-centers">
        <div className="container mx-auto pl-[250px] flex flex-col  space-y-4">
          <h1 className="text-[48px] font-bold font-[volkhov] -ml-[60px] text-left">
            Voices <span className="text-[#077B83]">of Delight :</span>
          </h1>
          <p className="w-[500px] text-[20px] text-left -ml-[60px] ">
            Hear What Our Customers Have to Say!
          </p>
        </div>
        <div className="container mx-auto px-60 mt-[-8px] ">
          <FeedbackMsgList />
        </div>
        </div>
        
      </div>

      <div className="container mx-auto px-20 p-10 mb-[250px]  flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center mt-8 space-y-4">
          <h1 className="text-[48px] font-bold font-[volkhov]">
            How It Works -{" "}
            <span className="text-[#077B83]">From Inquiry to Adventure!</span>
          </h1>
          <p className="w-[820px]  text-center text-[20px]">
            Ready to embark on your dream journey to Sri Lanka? Making an
            inquiry with Heaven Lanka is simple and hassle-free. Follow these
            easy steps to kickstart your personalized travel experience
          </p>
        </div>

        <div className="mt-[80px]">
          <AdventureList />
        </div>
      </div>

      <div className="container mx-auto px-20 absolute -mt-[220px] ml-[180px] flex flex-col justify-center items-center">
        <SubscriptionCard />
      </div>

      <div className="mt-[0px] pt-[250px] pb-[60px] pl-[150px] pr-[150px] bg-[#077B83] bg-opacity-[10%]">
        <div className="container mx-auto px-60">
          <FooterView />
        </div>
      </div>
      <SimpleChatbot/>
    </div>
  );
};

export default HomeContent;
