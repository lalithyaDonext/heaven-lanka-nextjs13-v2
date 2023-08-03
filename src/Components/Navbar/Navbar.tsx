'use client'; 
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import logo from "../../../assets/Logo/logo.png";
import { log } from "console";


let navoption:number;

const Navbar = () => {
  const router = useRouter();

  const [selected, setSelected] = useState(navoption ? navoption : 1);
  console.log('selecte' , selected);
  
console.log("nav" , navoption);

  const handleChange = (id: number) => {
    navoption = id;
    setSelected(id);
    
  };



  return (
    <div className="bg-gradient-to-t from-transparent to-teal-700 h-[114px]">
      <div className="container mx-auto px-20">
        <div className="flex justify-between">
          <div className="pt-[27px] pb-[15px]">
            <Image
              src={logo}
              alt="item1"
              style={{
                objectFit: "contain",
                backgroundColor: "",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </div>
          <div className="flex items-center">
            <div className="mr-8">
              <button
                className={`px-4 py-2 border-b-2 border-transparent text-white  ${
                  selected === 1 ? "border-white" : "" ? 'border-white' : ''
                }`}
                onClick={() => {
                  handleChange(1);
                  router.push("/");
                }}
              >
                Home
              </button>
              <button
                className={`px-4 py-2 border-b-2 border-transparent text-white  ${
                  selected === 2 ? "border-white" : ""  ? 'border-white' : ''
                }`}
                onClick={() => {
                  handleChange(2);
                  router.push("/tourPage");
                }}
              >
                Tours
              </button>
              <button
                className={`px-4 py-2 border-b-2 border-transparent text-white  ${
                  selected === 3 ? "border-white" : "" ? 'border-white' : ''
                }`}
                onClick={() => {
                  handleChange(3);
                  router.push("/aboutUspage");
                }}
              >
                About
              </button>
              <button
                className={`px-4 py-2 border-b-2 border-transparent text-white  ${
                  selected === 4 ? "border-white" : ""
                }`}
                onClick={() => {
                  handleChange(4);
                  router.push("/testimonials");
                }}
              >
                Testimonials
              </button>
              <button
                className={`px-4 py-2 border-b-2 border-transparent text-white  ${
                  selected === 5 ? "border-white" : ""
                }`}
                onClick={() => {
                  handleChange(5);
                  router.push("/contact");
                }}
              >
                Contact
              </button>
              <button
                className={`px-4 py-2 border-b-2 border-transparent text-white  ${
                  selected === 6 ? "border-white" : ""
                }`}
                onClick={() => {
                  handleChange(6);
                  router.push("/explore");
                }}
              >
                Explore
              </button>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-white text-base">+971 588 781 993</h1>
              <h3 className="text-white text-sm">Call now</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
