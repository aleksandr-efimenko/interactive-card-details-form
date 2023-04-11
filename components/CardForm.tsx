import { cardProps } from "@/pages";
import React from "react";
import SpinnerIcon from "./SpinnerIcon";

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
  toggleCardSubmitted,
}: cardProps) {
  const [cardNumberError, setCardNumberError] = React.useState(false);
  const [cardHolderError, setCardHolderError] = React.useState(false);
  const [cardExpiryMMError, setCardExpiryMMError] = React.useState(false);
  const [cardExpiryYYError, setCardExpiryYYError] = React.useState(false);
  const [cardCvvError, setCardCvvError] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toggleCardSubmitted();
    }, 1000);
  };

  const creditCardNumberValidation = (cardNumber: string) => {
    // remove spaces
    cardNumber = cardNumber.replace(/\s/g, "");
    // check if card number is 16 digits
    if (cardNumber.length !== 16) {
      return false;
    }
    // check if card number contains only digits
    if (cardNumber.match(/\D/g)) {
      return false;
    }
    // check if card number is valid
    if (!luhnCheck(cardNumber)) {
      return false;
    }
    return true;
  };

  // This function is used to check if the card number is valid
  function luhnCheck(cardNumber: string): boolean {
    let sum = 0;
    let digit;
    let i;
    let addend;

    for (i = 0; i < cardNumber.length; i++) {
      digit = parseInt(cardNumber.charAt(i));
      if ((cardNumber.length - i) % 2 === 0) {
        addend = digit * 2;
        if (addend >= 10) {
          addend = (addend % 10) + 1;
        }
        sum += addend;
      } else {
        sum += digit;
      }
    }

    return sum % 10 === 0;
  }

  const handleCardNumberEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let cardNumber = value;
    setCardNumber(cardNumber);
  };

  const handleCardHolderEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardHolder = value;
    if (cardHolder.length > 20) {
      setCardHolderError(true);
    } else {
      setCardHolderError(false);
    }

    setCardHolder(cardHolder);
  };

  const handleCardExpiryEnterMM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardExpiryMM = value;
    if (cardExpiryMM.length > 2) {
      setCardExpiryMMError(true);
    }

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
    <div className="max-w-sm">
      <form onSubmit={handleSumbit}>
        <div className="flex flex-col gap-[1.625rem]">
          <label className="block  card-label" htmlFor="cardholder-name">
            Cardholder Name
            <div className="input-container-bd-gradient">
              <input
                value={cardHolder}
                onChange={handleCardHolderEnter}
                className="block w-full card-input"
                type="text"
                id="cardholder-name"
                placeholder="e.g. Jane Appleseed"
              />
            </div>
            {cardHolderError && (
              <p className="text-red-500">Cardholder name is required</p>
            )}
          </label>
          <label className="block card-label" htmlFor="card-number">
            Card Number
            <div className="input-container-bd-gradient">
              <input
                value={cardNumber}
                onChange={handleCardNumberEnter}
                className="block w-full card-input"
                type="text"
                id="card-number"
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </div>
          </label>
          <div className="flex w-full gap-[1.25rem]">
            <label className="block card-label" htmlFor="expiration-date-mm">
              Exp. Date (MM/YY)
              <div className="flex gap-[0.625rem]">
                <div className="input-container-bd-gradient">
                  <input
                    value={cardExpiryMM}
                    onChange={handleCardExpiryEnterMM}
                    className="card-input max-w-[5rem]"
                    type="text"
                    id="expiration-date-mm"
                    placeholder="MM"
                  />
                </div>
                <div className="input-container-bd-gradient">
                  <input
                    value={cardExpiryYY}
                    onChange={handleCardExpiryEnterYY}
                    className="card-input max-w-[5rem]"
                    type="text"
                    id="expiration-date-yy"
                    placeholder="YY"
                  />
                </div>
              </div>
            </label>
            <label htmlFor="cvv" className="card-label">
              CVC
              <div className="input-container-bd-gradient">
                <input
                  type="text"
                  id="cvv"
                  className="block card-input max-w-[12rem]"
                  placeholder="e.g 123"
                  value={cardCvv}
                  onChange={handleCardCvvEnter}
                />
              </div>
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="dark-button disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <SpinnerIcon />
            </div>
          ) : (
            "Confirm"
          )}
        </button>
      </form>
    </div>
  );
}
