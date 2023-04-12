import { cardProps } from "@/pages";
import React, { useEffect } from "react";
import { SpinnerIcon } from "./SpinnerIcon";
import { CardHolderNameInput } from "./CardHolderNameInput";
import { CardNumberInput } from "./CardNumberInput";
import { luhnCheck } from "@/utils/creditCardInputCheck";
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
    switch (true) {
      case !cardHolder.trim(): {
        setCardHolderError("Can’t be blank");
        errors = true;
        break;
      }
      case cardHolder.replace(/\s/g, "").length < 3: {
        setCardHolderError("Card holder name must be at least 3 characters");
        errors = true;
        break;
      }
      case cardHolder.length > 30: {
        setCardHolderError("Card holder name must be less than 30 characters");
        errors = true;
        break;
      }
      default: {
        setCardHolderError("");
        break;
      }
    }
    console.log(cardNumber.length);
    // check card number
    switch (true) {
      case !cardNumber: {
        setCardNumberError("Can’t be blank");
        errors = true;
        break;
      }
      // check if 16 digits without spaces
      case cardNumber.replace(/\s/g, "").length < 16: {
        setCardNumberError("Card number must be 16 digits");
        errors = true;
        break;
      }
      // check if numbers only and spaces
      case !/^[0-9\s]+$/.test(cardNumber): {
        setCardNumberError("Wrong format, numbers only");
        errors = true;
        break;
      }
      //remove spaces
      case !luhnCheck(cardNumber.replace(/\s/g, "")): {
        setCardNumberError(
          "Card number is not valid, try for test 4539670073707590"
        );
        errors = true;
        break;
      }
      default: {
        setCardNumberError("");
        break;
      }
    }

    // check card expiry mm
    switch (true) {
      case !cardExpiryMM: {
        setCardExpiryMMError("Can’t be blank");
        errors = true;
        break;
      }
      case cardExpiryMM.length < 2: {
        setCardExpiryMMError("MM must be 2 digits");
        errors = true;
        break;
      }
      // check if numbers only
      case !/^[0-9]+$/.test(cardExpiryMM): {
        setCardExpiryMMError("Wrong format, numbers only");
        errors = true;
        break;
      }
      case parseInt(cardExpiryMM) > 12: {
        setCardExpiryMMError("Month must be less than 12");
        errors = true;
        break;
      }
      default: {
        setCardExpiryMMError("");
        break;
      }
    }

    // check card expiry yy
    switch (true) {
      case !cardExpiryYY: {
        setCardExpiryYYError("Can’t be blank");
        errors = true;
        break;
      }
      case cardExpiryYY.length < 2: {
        setCardExpiryYYError("YY must be 2 digits");
        errors = true;
        break;
      }
      // check if numbers only
      case !/^[0-9]+$/.test(cardExpiryYY): {
        setCardExpiryYYError("Wrong format, numbers only");
        errors = true;
        break;
      }
      default: {
        setCardExpiryYYError("");
        break;
      }
    }

    //check card expiry
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const expiryYear = parseInt(`20${cardExpiryYY}`);
    const expiryMonth = parseInt(cardExpiryMM);
    if (expiryYear < currentYear) {
      setCardExpiryMMError("Card is expired");
      setCardExpiryYYError("Card is expired");
      errors = true;
    }
    if (expiryYear === currentYear && expiryMonth < currentMonth) {
      setCardExpiryMMError("Card is expired");
      setCardExpiryYYError("Card is expired");
      errors = true;
    }

    // check card cvv
    switch (true) {
      case !cardCvv: {
        setCardCvvError("Can’t be blank");
        errors = true;
        break;
      }
      case cardCvv.length < 3: {
        setCardCvvError("CVV must be 3 digits");
        errors = true;
        break;
      }
      // check if numbers only
      case !/^[0-9]+$/.test(cardCvv): {
        setCardCvvError("Wrong format, numbers only");
        errors = true;
        break;
      }
      default: {
        setCardCvvError("");
        break;
      }
    }

    if (errors) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toggleCardSubmitted();
    }, 1000);
  };

  // set result error for card expiry
  useEffect(() => {
    if (cardExpiryMMError) {
      setCardExpiryResultError(cardExpiryMMError);
      return;
    }
    if (cardExpiryYYError) {
      setCardExpiryResultError(cardExpiryYYError);
      return;
    }

    setCardExpiryResultError("");
  }, [cardExpiryMMError, cardExpiryYYError]);

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
