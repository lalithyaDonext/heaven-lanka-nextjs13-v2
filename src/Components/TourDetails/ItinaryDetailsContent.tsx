import Image from "next/image";
import image from ".././../../assets/Tour/promodhya-abeysekara-gjd-7_3Ek_w-unsplash 1.png";
import iconView from "../../../assets/Tour/Asset 4@3x.png";
import iconViewOne from "../../../assets/Tour/Asset 3@3x.png";
import bulletiocn from "../../../assets/Tour/Asset 2@3x 3.png";
import Image1 from "../../../assets/Tour/datingscout--rXNxKh35Rc-unsplash 1.png";
import image2 from "../../../assets/Tour/promodhya-abeysekara-rdrGpquZ1Hc-unsplash.png";
import image3 from "../../../assets/Tour/yves-alarie-yaGheETUSK4-unsplash.png";
import image4 from "../../../assets/Tour/Mask group.png";
import image5 from "../../../assets/Tour/daniel-klein-3EMuRsz55mk-unsplash.png";
import image6 from "../../../assets/Tour/dasith-kavin-S7c0CaxO2TI-unsplash.png";
import image7 from "../../../assets/Tour/ramesh-ranasinghe-KzUBox4l1ZM-unsplash.png";
import image8 from "../../../assets/Tour/tharoushan-kandarajah-p743KeSLQPI-unsplash.png";
import image9 from "../../../assets/Tour/Ellipse 39.png";

const ItinaryDetailsContent = () => {
  return (
    <div className="flex flex-col gap-[90px] justify-start  mt-[100PX]">
      <div className="flex flex-col justify-start items-left">
        <div className="flex flex-row gap-[30px] items-center">
          <Image src={image9} alt="item1" className="" />
          <h1 className="text-[44px] font-bold font-[volkhov] text-left">
            Day 01 - <span className="text-[#077B83]"> Kandy</span>
          </h1>
        </div>
        <div className="flex flex-row gap-[50px] mt-[40px] pl-[70px]">
          <div className="flex flex-row gap-[60px] w-[570px] font-[400] text-[20px] leading-[32px]">
            <div className="flex flex-col gap-[50px]">
              <p>
                Kandy is a city in central Sri Lanka, also known as the Hill
                Capital of Sri Lanka. It is the second largest city in the
                country with a population of around 125,000 people. The city is
                famous for its ancient Buddhist temples, including the Temple of
                the Tooth Relic (also known as Sri Dialed Maligawa), which is
                believed to hold the sacred tooth relic of the Buddha. Kandy was
                declared a UNESCO World Heritage Site in 1988 for its cultural
                significance and historical importance. The city is also home to
                the Kandy Lake, one of the most visited tourist attractions in
                Sri Lanka.
              </p>

              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row gap-[20px]">
                  <Image src={iconView} alt="item1" className="" />

                  <span className="font-semibold">
                    Cinnamon Citadel (4 Star Hotel)
                  </span>
                </div>
                <div className="flex flex-row gap-[20px]">
                  <Image src={iconViewOne} alt="item1" className="" />

                  <span className="font-semibold">Half Board Basis</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image}
              alt="item1"
              className="object-cover w-full h-full rounded-[20px]"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-[40px] pl-[70px]">
          <h1 className="text-[36px] font-bold font-[volkhov] text-left">
            Activities
          </h1>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Visit the Temple of the Tooth Relic: This temple is considered
                to be one of the most sacred Buddhist temples in the world and
                is a must-visit when in Kandy.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Explore the Royal Botanic Gardens: With over 4000 species of
                plants and trees, this garden is a piece of paradise on earth.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Watch a cultural performance: Kandy is home to traditional dance
                and music performances that showcase the rich culture of Sri
                Lanka.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Walk around the Kandy Lake: This scenic lake is a peaceful spot
                to relax, take in the views, and watch the locals go about their
                day.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Browse the markets: Kandy has many markets selling fresh fruits,
                vegetables, spices, and handicrafts.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Visit tea plantations: Kandy is surrounded by lush tea
                plantations that produce some of Sri Lanka&apos;s best teas. Take a
                tour of one of these plantations to learn about the tea making
                process and sample some of the local blends{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] pl-[70px]">
        <h1 className="text-[36px] font-bold font-[volkhov] text-left">
          Kandy Highlights
        </h1>
        <div className="flex flex-row gap-[30px]">
          <Image src={Image1} alt="item1" className="" />
          <Image src={image2} alt="item1" className="" />
          <Image src={image3} alt="item1" className="" />
        </div>
      </div>

      <div className="flex flex-col justify-start items-left mt-[30px] ">
        <div className="flex flex-row gap-[30px] items-center">
          <Image src={image9} alt="item1" className="" />
          <h1 className="text-[44px] font-bold font-[volkhov] text-left">
            Day 02 - <span className="text-[#077B83]"> Colombo</span>
          </h1>
        </div>
        <div className="flex flex-row gap-[50px] mt-[40px] pl-[70px]">
          <div className="flex flex-row gap-[60px] w-[570px] font-[400] text-[20px] leading-[32px]">
            <div className="flex flex-col gap-[50px]">
              <p>
                Colombo, the commercial capital of Sri Lanka is a vibrant city
                with a rich history and cultural heritage. It is a popular
                tourist destination, known for its beautiful beaches, historic
                landmarks, and vibrant nightlife.
              </p>

              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row gap-[20px]">
                  <Image src={iconView} alt="item1" className="" />

                  <span className="font-semibold">
                    Kingsbury Colombo (5 Star Hotel)
                  </span>
                </div>
                <div className="flex flex-row gap-[20px]">
                  <Image src={iconViewOne} alt="item1" className="" />

                  <span className="font-semibold">Half Board Basis</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image4}
              alt="item1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-[40px] pl-[70px]">
          <h1 className="text-[36px] font-bold font-[volkhov] text-left">
            Activities
          </h1>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Gangaramaya Temple is a beautiful Buddhist temple located in the
                heart of Colombo. The temple attracts thousands of worshippers
                and tourists every year. Visitors can admire the stunning
                architecture and learn about Buddhist practices and teachings.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Pettah Market is a bustling market located in the heart of
                Colombo. It is a great place to experience the local culture and
                people. Visitors can buy a variety of items, including spices,
                fruits, and vegetables at reasonable prices.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[25px] h-[25px]"
              />

              <span className="w-[1200px] font-[400] text-[20px] leading-[32px]">
                Visitation of Independence Square ( Optional)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] pl-[70px]">
        <h1 className="text-[36px] font-bold font-[volkhov] text-left">
          Colombo Highlights
        </h1>
        <div className="flex flex-row gap-[30px]">
          <Image src={image5} alt="item1" className="" />
          <Image src={image6} alt="item1" className="" />
          <Image src={image7} alt="item1" className="" />
          <Image src={image8} alt="item1" className="" />
        </div>
      </div>
      <div className="flex flex-row gap-[30px] items-center">
        <Image src={image9} alt="item1" className="" />
        <h1 className="text-[44px] font-bold font-[volkhov] text-left">End</h1>
      </div>
    </div>
  );
};

export default ItinaryDetailsContent;
