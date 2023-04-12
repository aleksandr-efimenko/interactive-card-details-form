import { cardProps } from "@/pages";
import React, { useEffect } from "react";
import { SpinnerIcon } from "./SpinnerIcon";
import { CardHolderNameInput } from "./CardHolderNameInput";
import { CardNumberInput } from "./CardNumberInput";
import {
  checkCardHolder,
  checkCardNumber,
  checkCardExpiryMM,
  checkCardExpiryYY,
  checkCardExpiryDate,
  checkCardCVV,
} from "@/utils/creditCardInputCheck";
import { CardExpiryInput } from "./CardExpiryInput";
import { CardCvcInput } from "./CardCvcInput";

export default function CardForm({
  cardHolder,
  setCardHolder,
  cardNumber,
  setCardNumber,
  cardExpiryMM,
  setCardExpiryMM,
  cardExpiryYY,
  setCardExpiryYY,
  cardCvv,
  setCardCvv,
  toggleCardSubmitted,
}: cardProps) {
  const [cardHolderError, setCardHolderError] = React.useState("");
  const [cardNumberError, setCardNumberError] = React.useState("");
  const [cardExpiryMMError, setCardExpiryMMError] = React.useState("");
  const [cardExpiryYYError, setCardExpiryYYError] = React.useState("");
  const [cardExpiryResultError, setCardExpiryResultError] = React.useState("");
  const [cardCvvError, setCardCvvError] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors = false;

    // check card holder name
    const verifyCardHolder = checkCardHolder(cardHolder);
    if (verifyCardHolder) {
      setCardHolderError(verifyCardHolder);
      errors = true;
    } else {
      setCardHolderError("");
    }

    // check card number
    const verifyCardNumber = checkCardNumber(cardNumber);
    if (verifyCardNumber) {
      setCardNumberError(verifyCardNumber);
      errors = true;
    } else {
      setCardNumberError("");
    }

    // check card expiry mm
    const verifyCardExpiryMM = checkCardExpiryMM(cardExpiryMM);
    if (verifyCardExpiryMM) {
      setCardExpiryMMError(verifyCardExpiryMM);
      errors = true;
    } else {
      setCardExpiryMMError("");
    }

    // check card expiry yy
    const verifyCardExpiryYY = checkCardExpiryYY(cardExpiryYY);
    if (verifyCardExpiryYY) {
      setCardExpiryYYError(verifyCardExpiryYY);
      errors = true;
    } else {
      setCardExpiryYYError("");
    }

    //set result error message
    if (verifyCardExpiryMM) {
      setCardExpiryResultError(verifyCardExpiryMM);
    } else if (verifyCardExpiryYY) {
      setCardExpiryResultError(verifyCardExpiryYY);
    } else setCardExpiryResultError("");

    if (!verifyCardExpiryMM && !verifyCardExpiryYY) {
      //check card expiry
      const verifyCardExpiryDate = checkCardExpiryDate(
        cardExpiryMM,
        cardExpiryYY
      );
      if (verifyCardExpiryDate) {
        setCardExpiryMMError(verifyCardExpiryDate);
        setCardExpiryYYError(verifyCardExpiryDate);
        setCardExpiryResultError(verifyCardExpiryDate);
        errors = true;
      } else {
        setCardExpiryResultError("");
      }
    }

    // check card cvv
    const verifyCardCvv = checkCardCVV(cardCvv);
    if (verifyCardCvv) {
      setCardCvvError(verifyCardCvv);
      errors = true;
    } else {
      setCardCvvError("");
    }

    if (errors) {
      return;
    }
    setIsLoading(true);
    resetForm();
    setTimeout(() => {
      setIsLoading(false);
      toggleCardSubmitted();
    }, 1000);
  };

  const resetForm = () => {
    setCardHolder("");
    setCardNumber("");
    setCardExpiryMM("");
    setCardExpiryYY("");
    setCardCvv("");
  };

  return (
    <div className="max-w-sm">
      <form onSubmit={handleSumbit}>
        <div className="flex flex-col gap-[1.625rem]">
          <CardHolderNameInput
            cardHolder={cardHolder}
            setCardHolder={setCardHolder}
            cardHolderError={cardHolderError}
          />
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            cardNumberError={cardNumberError}
          />
          <div className="flex w-full gap-[1.25rem]">
            <CardExpiryInput
              cardExpiryMM={cardExpiryMM}
              setCardExpiryMM={setCardExpiryMM}
              cardExpiryMMError={cardExpiryMMError}
              cardExpiryYY={cardExpiryYY}
              setCardExpiryYY={setCardExpiryYY}
              cardExpiryYYError={cardExpiryYYError}
              cardExpiryResultError={cardExpiryResultError}
            />
            <CardCvcInput
              cardCvv={cardCvv}
              setCardCvv={setCardCvv}
              cardCvvError={cardCvvError}
            />
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
