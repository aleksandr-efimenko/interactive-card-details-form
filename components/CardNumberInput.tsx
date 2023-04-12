import React from "react";

export function CardNumberInput({
  cardNumber,
  setCardNumber,
  cardNumberError,
}: {
  cardNumber: string;
  setCardNumber: Function;
  cardNumberError: string;
}) {
  const handleCardNumberEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let cardNumber = value;
    // remove spaces
    cardNumber = cardNumber.replace(/\s/g, "");
    // add spaces
    cardNumber = cardNumber.replace(/(.{4})/g, "$1 ");
    // remove last space
    cardNumber = cardNumber.trim();
    // limit to 16 digits
    cardNumber = cardNumber.slice(0, 19);
    setCardNumber(cardNumber);
  };

  return (
    <div>
      <label className="block card-label" htmlFor="card-number">
        Card Number
        <div
          className={`input-container-bd-gradient ${
            cardNumberError ? "wrong-input" : ""
          }`}
        >
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
      {cardNumberError && (
        <p className="mt-2 text-xs text-red" role="alert" aria-live="assertive">
          {cardNumberError}
        </p>
      )}
    </div>
  );
}
