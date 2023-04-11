import React from "react";
import iconCompete from "@/public/images/icon-complete.svg";
import Image from "next/image";

export default function CardSubmitted({
  toggleCardSubmitted,
}: {
  toggleCardSubmitted: Function;
}) {
  return (
    <div className=" min-w-[24rem]">
      <Image src={iconCompete} alt="icon complete" className=" mb-9 mx-auto" />
      <h1
        className=" uppercase text-center text-very-dark-violet text-[1.75rem] leading-9 
        tracking-[0.21rem] mb-4"
      >
        Thank you!
      </h1>
      <p className="text-center text-dark-grayish-violet text-[1.125rem] leading-6">
        We’ve added your card details
      </p>
      <button
        className="dark-button w-full"
        onClick={() => toggleCardSubmitted()}
      >
        Continue
      </button>
    </div>
  );
}
