import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import CardForm from "@/components/CardForm";
import bgMain from "@/public/images/bg-main-desktop.png";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  return (
    <main style={inter.style} className="min-h-full ">
      <div className="grid grid-cols-6">
        <div className="col-start-1 col-end-3 relative min-h-screen">
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
        <div className="flex absolute center">
            
        </div>
        <div className="col-start-3 col-end-7 flex justify-center items-center">
          <CardForm />
        </div>
      </div>
    </main>
  );
}
