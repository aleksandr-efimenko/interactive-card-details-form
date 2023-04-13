import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import CardForm from "@/components/CardForm";
import bgMainDesktop from "@/public/images/bg-main-desktop.png";
import cardFront from "@/public/images/bg-card-front.png";
import cardBack from "@/public/images/bg-card-back.png";
import cardLogo from "@/public/images/card-logo.svg";
import { useState } from "react";
import CardSubmitted from "@/components/CardSubmitted";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });

export interface cardProps {
  cardNumber: string;
  setCardNumber: Function;
  cardHolder: string;
  setCardHolder: Function;
  cardExpiryMM: string;
  setCardExpiryMM: Function;
  cardExpiryYY: string;
  setCardExpiryYY: Function;
  cardCvv: string;
  setCardCvv: Function;
  toggleCardSubmitted: Function;
}

export default function Home() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiryMM, setCardExpiryMM] = useState("");
  const [cardExpiryYY, setCardExpiryYY] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isCardSubmitted, setIsCardSubmitted] = useState(false);
  const toggleCardSubmitted = () => setIsCardSubmitted(!isCardSubmitted);

  return (
    <main style={inter.style} className="min-h-full">
      {/* Background container */}
      <div className=" top-0 left-0 absolute w-full h-60 lg:w-1/3 lg:min-h-full z-0 ">
        <Image
          src={bgMainDesktop}
          alt="background"
          fill
          style={{
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="min-h-screen grid grid-cols-1 grid-rows-mobile-grid-template lg:grid-rows-1 lg:grid-cols-grid-card-template z-10 relative">
        <div
          className="flex flex-col-reverse 
        lg:mt-0 lg:flex-col lg:justify-center 
        items-center justify-end mt-8 gap-0 
        lg:gap-9 lg:col-start-2 lg:col-end-3 drop-shadow-xx"
        >
          <div className="z-20 relative mr-[57px] lg:mr-[17%] top-[-68px] lg:top-0 w-[286px] h-[157px] lg:w-[447px] lg:h-[245px]">
            <Image src={cardFront} alt="card front" fill />
            <div
              className="relative
              w-[54px] h-[30px] top-[17px] left-[19px]
              lg:w-[84px] lg:h-[47px] lg:top-7 lg:left-8 "
            >
              <Image src={cardLogo} alt="card logo" fill />
            </div>
            <p
              className="absolute w-full text-white
              lg:px-8 lg:bottom-[4.4rem] lg:text-[1.75rem] lg:leading-9 lg:tracking-[0.21rem] 
              px-[19px] bottom-12 text-lg leading-6 tracking-[0.125rem]"
            >
              {cardNumber ? cardNumber : "0000 0000 0000 0000"}
            </p>
            <div className="absolute flex justify-between w-full uppercase text-white 
            lg:bottom-0 lg:p-8 lg:text-sm lg:leading-[1.125rem] lg:tracking-[0.125rem]
             text-[9px] bottom-5 px-[19px] leading-3 tracking-[0.08rem]
            ">
              <p >
                {cardHolder ? cardHolder : "Jane Appleseed"}
              </p>
              <p >
                {cardExpiryMM ? cardExpiryMM : "00"}/
                {cardExpiryYY ? cardExpiryYY : "00"}
              </p>
            </div>
          </div>
          <div className=" z-10 ml-[57px] lg:ml-[17%] relative w-[286px] h-[157px] lg:w-[447px] lg:h-[245px]">
            <Image src={cardBack} alt="card back" fill />
            <p className="absolute text-white right-8 top-[72px] text-[9px] lg:top-[6.9rem]  lg:right-[3.5rem] lg:text-sm lg:leading-[1.125rem] lg:trackiing-[0.125rem]">
              {cardCvv ? cardCvv : "000"}
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center lg:items-center lg:col-start-4 lg:col-end-5 ">
          {isCardSubmitted ? (
            <CardSubmitted toggleCardSubmitted={toggleCardSubmitted} />
          ) : (
            <CardForm
              {...{
                cardNumber,
                setCardNumber,
                cardHolder,
                setCardHolder,
                cardExpiryMM,
                setCardExpiryMM,
                cardExpiryYY,
                setCardExpiryYY,
                cardCvv,
                setCardCvv,
                toggleCardSubmitted,
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
