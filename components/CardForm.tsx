import { cardProps } from "@/pages";
import React from "react";

export default function CardForm({
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
}: cardProps) {
  const [cardNumberError, setCardNumberError] = React.useState(false);
  const [cardHolderError, setCardHolderError] = React.useState(false);
  const [cardExpiryMMError, setCardExpiryMMError] = React.useState(false);
  const [cardExpiryYYError, setCardExpiryYYError] = React.useState(false);
  const [cardCvvError, setCardCvvError] = React.useState(false);

  const handleCardNumberEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let cardNumber = value;
    // enter spaces every 4 digits
    cardNumber = cardNumber.replace(/\s/g, "");
    cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
    cardNumber = cardNumber.trim();

    // set max length to 19
    if (cardNumber.length > 19) {
      cardNumber = cardNumber.slice(0, 19);
    }

    //set error if input contains non-digits
    if (cardNumber.match(/\D/g)) {
      setCardNumberError(true);
    } else {
      setCardNumberError(false);
    }
    setCardNumber(cardNumber);
  };

  const handleCardHolderEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardHolder = value;
    setCardHolder(cardHolder);
  };

  const handleCardExpiryEnterMM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardExpiryMM = value;
    setCardExpiryMM(cardExpiryMM);
  };

  const handleCardExpiryEnterYY = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardExpiryYY = value;
    setCardExpiryYY(cardExpiryYY);
  };

  const handleCardCvvEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardCvv = value;
    setCardCvv(cardCvv);
  };

  return (
    <div className="">
      <form className="">
        <label className=" block" htmlFor="cardholder-name">
          Cardholder Name
          <input
            value={cardHolder}
            onChange={handleCardHolderEnter}
            className="block"
            type="text"
            id="cardholder-name"
            placeholder="e.g. Jane Appleseed"
          />
          {cardHolderError && (
            <p className="text-red-500">Cardholder name is required</p>
          )}
        </label>
        <label className="block" htmlFor="card-number">
          Card Number
          <input
            value={cardNumber}
            onChange={handleCardNumberEnter}
            className="block"
            type="text"
            id="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </label>
        <div className="flex">
          <div className="flex-1">
            <label className="block" htmlFor="expiration-date">
              <div className="block">
                Exp. Date (MM/YY)
                <input
                  value={cardExpiryMM}
                  onChange={handleCardExpiryEnterMM}
                  className="rounded-lg"
                  type="text"
                  id="expiration-date-mm"
                  placeholder="MM"
                />
                <input
                  value={cardExpiryYY}
                  onChange={handleCardExpiryEnterYY}
                  className=""
                  type="text"
                  id="expiration-date-yy"
                  placeholder="YY"
                />
              </div>
            </label>
          </div>
        </div>
        <label htmlFor=""></label>
        <input
          type="submit"
          value="Confirm"
          className="text-white w-full cursor-pointer  py-[0.9375rem] text-lg rounded-lg bg-[#21092f] hover:bg-slate-700"
        />
      </form>
    </div>
  );
}
