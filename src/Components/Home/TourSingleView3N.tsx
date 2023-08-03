"use client";
import { useState } from "react";
import "./single.css";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import Inclusions from "../Inclusions/Inclusions";
import ItinaryDetailsContent from "../TourDetails/ItinaryDetailsContent";
import TourPageMap from "../MapView/TourPageMap";
import SimpleChatbot from "../ChatBot/Chatbot";
import ItinaryDetails3NContent from "../ItineraryDetails/ItineraryDetails3D";
import QuoteForm from "../Quotes/QuateForm";

const TourSingleViewContent3N = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <div className=" mt-8 ">
        <TourPageMap />
      </div>

      <div className="container mx-auto px-20 mt-[40px] flex flex-col justify-center items-center pb-[60px]"></div>
      <div className="container mx-auto px-40 mt-[200px]">
        <div className="flex  justify-end">
          <nav className="flex flex-row">
            <div className="w-[650px] border-b-[2px] border-[black] "></div>
            <button
              type="button"
              className={`w-[286px] h-[65px] text-[32px] text-[black] font-[volkhov] font-[400] border-b-[2px] border-[black]  ${
                activeTab === 1 ? "active   border-[2px] border-[black]  border-b-[0px] border-b-[white] rounded-t-[30px] " : ""
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
              className={`w-[286px] h-[65px] text-[32px] text-[black] font-[volkhov] font-[400] border-b-[2px] border-[black] ${
                activeTab === 2 ? "active border-[2px] border-[black] border-b-[0px] border-b-[white] rounded-t-[30px] " : ""
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
            <ItinaryDetails3NContent />
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

      <div className="container mx-auto px-20 mt-[60px] w-[1900px] pt-[20px]  ml-[280px] pb-[280px]">
        <QuoteForm/>
      </div>

      <div className="container mx-auto  px-20 absolute -mt-[220px] ml-[180px] flex flex-col justify-center items-center">
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

export default TourSingleViewContent3N;
