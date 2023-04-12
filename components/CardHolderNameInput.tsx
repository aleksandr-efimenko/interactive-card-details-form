import React from "react";

export function CardHolderNameInput({
  cardHolder,
  setCardHolder,
  cardHolderError,
}: {
  cardHolder: string;
  setCardHolder: Function;
  cardHolderError: string;
}) {
  const handleCardHolderEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardHolder = value;
    // limit to 30 characters
    setCardHolder(cardHolder.slice(0, 30));
  };

  return (
    <div>
      <label className="block card-label" htmlFor="cardholder-name">
        Cardholder Name
        <div
          className={`input-container-bd-gradient ${
            cardHolderError ? "wrong-input" : ""
          }`}
        >
          <input
            value={cardHolder}
            onChange={handleCardHolderEnter}
            className="block w-full card-input"
            type="text"
            id="cardholder-name"
            placeholder="e.g. Jane Appleseed"
          />
        </div>
      </label>
      {cardHolderError && (
        <p className="mt-2 text-xs text-red" role="alert" aria-live="assertive">{cardHolderError}</p>
      )}
    </div>
  );
}
