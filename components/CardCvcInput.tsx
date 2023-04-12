import React from "react";

export function CardCvcInput({
  cardCvv,
  setCardCvv,
  cardCvvError,
}: {
  cardCvv: string;
  setCardCvv: Function;
  cardCvvError: string;
}) {
  const handleCardCvvEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardCvv = value;
    // limit to 3 digits
    setCardCvv(cardCvv.slice(0, 3));
  };
  return (
    <div>
      <label className="block card-label" htmlFor="cvv">
        CVC
      </label>
      <div
        className={`input-container-bd-gradient ${
          cardCvvError ? "wrong-input" : ""
        }`}
      >
        <input
          type="text"
          id="cvv"
          className="block card-input max-w-[12rem]"
          placeholder="e.g 123"
          value={cardCvv}
          onChange={handleCardCvvEnter}
        />
      </div>
      {cardCvvError && (
        <p className="mt-2 text-xs text-red" role="alert" aria-live="assertive">
          {cardCvvError}
        </p>
      )}
    </div>
  );
}
