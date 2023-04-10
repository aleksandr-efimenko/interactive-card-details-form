import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import CardForm from "@/components/CardForm";
import bgMain from "@/public/images/bg-main-desktop.png";
import cardFront from "@/public/images/bg-card-front.png";
import cardBack from "@/public/images/bg-card-back.png";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  return (
    <main style={inter.style} className="min-h-full">
      <div className=" top-0 left-0 absolute w-1/3 min-h-full z-0">
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
      <div className=" min-h-full grid grid-cols-6 z-10 relative">
        <div className="flex flex-col col-start-2 col-end-3">
          <div className="">
            <Image src={cardFront} alt="card front" />
          </div>
          <div>
            <Image src={cardBack} alt="card back" />
          </div>
        </div>
        <div className="col-start-3 col-end-7 flex justify-center items-center">
          <CardForm />
        </div>
      </div>
    </main>
  );
}
