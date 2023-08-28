"use client";
import { useState } from "react";
import "./single.css";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import Inclusions from "../Inclusions/Inclusions";
import TourPageMap from "../MapView/TourPageMap";
import SimpleChatbot from "../ChatBot/Chatbot";
import ItinaryDetails3NContent from "../ItineraryDetails/ItineraryDetails3D";
import TourPageMap4N from "../MapView/TourPageMap4N";
import ItinaryDetails4NContent from "../ItineraryDetails/ItinaryDetails4NContent";
import ItinaryDetails6NContent from "../ItineraryDetails/ItinaryDetails6NContent";
import QuoteForm from "../Quotes/QuateForm";
import ItinaryDetails7NContent from "../ItineraryDetails/ItinararyDetails7NContent";
import TourPageMap7N from "../MapView/TourPageMap7N";

const TourSingleViewContent7N = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <div className=" mt-8 ">
        <TourPageMap7N />
      </div>

      <div className="container md:mx-auto md:px-40 mt-10 md:mt-[200px]">
        <div className="flex items-center justify-center ">
          <nav className="flex flex-row justify-end ">
            <div className="w-[200px]  2xl:w-[650px] md:w-[400px] sm:w-[300px] border-b-[2px] border-[black] "></div>
            <button
              type="button"
              className={`w-[80px]  2xl:w-[286px] 2xl:h-[65px]  2xl:text-[32px] md:w-[180px] md:h-[45px]  md:text-[24px] text-[black] font-[volkhov] font-[400] border-b-[2px] border-[black]  ${
                activeTab === 1 ? "active   border-[2px] border-[black]  border-b-[0px] border-b-[white] md:rounded-t-[30px] rounded-t-[10px]" : ""
              }`}
              id="card-type-tab-item-1"
              data-hs-tab="#card-type-tab-1"
              aria-controls="card-type-tab-1"
              role="tab"
              onClick={() => handleTabClick(1)}
            >
              Itinerary
            </button>
            <button
              type="button"
              className={`w-[80px] h-[40px] 2xl:w-[286px] 2xl:h-[65px]  2xl:text-[32px] md:w-[180px] md:h-[45px]  md:text-[24px] text-[black] font-[volkhov] font-[400] border-b-[2px] border-[black] ${
                activeTab === 2 ? "active border-[2px] border-[black] border-b-[0px] border-b-[white] md:rounded-t-[30px] rounded-t-[10px] " : ""
              }`}
              id="card-type-tab-item-2"
              data-hs-tab="#card-type-tab-2"
              aria-controls="card-type-tab-2"
              role="tab"
              onClick={() => handleTabClick(2)}
            >
              Inclusions
            </button>
          </nav>
        </div>

        <div className="mt-3">
          <div
            id="card-type-tab-1"
            role="tabpanel"
            aria-labelledby="card-type-tab-item-1"
            className={activeTab === 1 ? "" : "hidden"}
          >
            <ItinaryDetails7NContent />
          </div>
          <div
            id="card-type-tab-2"
            role="tabpanel"
            aria-labelledby="card-type-tab-item-2"
            className={activeTab === 2 ? "" : "hidden"}
          >
            <Inclusions />
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-20 mt-[60px]  ml-[280px]  w-[1900px] pt-[20px] pb-[280px]">
        <QuoteForm/>
      </div> */}

<div className="container mx-auto px-4 md:px-20 mt-8">
        <SubscriptionCard />
      </div>

      <div className="bg-[#077B83] bg-opacity-10 md:mt-[-100px] -z-50 relative">
        <div className="container mx-auto px-4 md:px-20 py-8 md:pt-[160px]">
          <FooterView />
        </div>
      </div>
      <SimpleChatbot/>
    </div>
  );
};

export default TourSingleViewContent7N;
