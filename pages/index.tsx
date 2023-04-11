import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import CardForm from "@/components/CardForm";
import bgMain from "@/public/images/bg-main-desktop.png";
import cardFront from "@/public/images/bg-card-front.png";
import cardBack from "@/public/images/bg-card-back.png";
import cardLogo from "@/public/images/card-logo.svg";
import { useState } from "react";

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
}

export default function Home() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiryMM, setCardExpiryMM] = useState("");
  const [cardExpiryYY, setCardExpiryYY] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  return (
    <main style={inter.style} className="min-h-full">
      {/* Background container */}
      <div className=" top-0 left-0 absolute w-1/3 min-h-full z-0 ">
        <Image
          src={bgMain}
          alt="background"
          fill
          style={{
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div
        className=" min-h-screen grid grid-cols-5 z-10 relative"
        style={{ gridTemplateColumns: "11.4% 33.8rem 8.8% auto 10%" }}
      >
        <div className="flex flex-col justify-center gap-9 col-start-2 col-end-3">
          <div className="mr-[17%] relative">
            <div className="absolute py-7 px-8">
              <Image src={cardLogo} alt="card logo" />
            </div>
            <p className="absolute px-8 bottom-[4.4rem] text-[1.75rem] leading-9 text-white tracking-[0.21rem]">
              {cardNumber ? cardNumber : "0000 0000 0000 0000"}
            </p>
            <div className="absolute flex justify-between bottom-0 p-8 w-full uppercase">
              <p className="text-sm leading-[1.125rem]  text-white tracking-[0.125rem]">
                {cardHolder ? cardHolder : "Jane Appleseed"}
              </p>
              <p className=" text-sm leading-[1.125rem] text-white tracking-[0.125rem]">
                {cardExpiryMM ? cardExpiryMM : "00"}/
                {cardExpiryYY ? cardExpiryYY : "00"}
              </p>
            </div>
            <Image src={cardFront} alt="card front" width={447} height={245} />
          </div>
          <div className="ml-[17%] relative">
            <p className="absolute text-white top-[6.9rem] right-[3.5rem] text-sm leading-[1.125rem] trackiing-[0.125rem]">
              {cardCvv ? cardCvv : "000"}
            </p>
            <Image src={cardBack} alt="card back" width={447} height={245} />
          </div>
        </div>
        <div className="col-start-4 col-end-5 flex justify-center items-center">
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
            }}
          />
        </div>
      </div>
    </main>
  );
}
