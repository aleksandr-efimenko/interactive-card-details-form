import Image from "next/image";
import { Inter } from "next/font/google";
import CardForm from "@/components/CardForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-height-full">
      <div className=""></div>
      <CardForm />
    </main>
  );
}
