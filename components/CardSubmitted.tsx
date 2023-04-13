import React from "react";
import iconCompete from "@/public/images/icon-complete.svg";
import Image from "next/image";

export default function CardSubmitted({
  toggleCardSubmitted,
}: {
  toggleCardSubmitted: Function;
}) {
  return (
    <div className="mx-6 max-w-[20.5rem] w-full lg:min-w-[24rem] lg:mx-0">
      <Image src={iconCompete} alt="icon complete" className=" mb-9 mx-auto" />
      <h1
        className="uppercase text-center text-very-dark-violet text-[1.75rem] leading-9 
        tracking-[0.21rem] mb-4"
      >
        Thank you!
      </h1>
      <p className="text-center text-dark-grayish-violet text-[1.125rem] leading-6">
        We’ve added your card details
      </p>
      <button
        autoFocus
        className="dark-button w-full mt-12"
        onClick={() => toggleCardSubmitted()}
      >
        Continue
      </button>
    </div>
  );
}
