import React from "react";

export function CardExpiryInput({
  cardExpiryMM,
  setCardExpiryMM,
  cardExpiryMMError,
  cardExpiryYY,
  setCardExpiryYY,
  cardExpiryYYError,
  cardExpiryResultError,
}: {
  cardExpiryMM: string;
  setCardExpiryMM: Function;
  cardExpiryMMError: string;
  cardExpiryYY: string;
  setCardExpiryYY: Function;
  cardExpiryYYError: string;
  cardExpiryResultError: string;
}) {
  const handleCardExpiryEnterMM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardExpiryMM = parseInt(value, 10);
    //Make input only 2 characters long with leading 0
    let month = String(cardExpiryMM).padStart(2, "0");
    // limit to 2 digits
    month = month.slice(0, 2);
    // limit to 12
    if (Number(month) > 12) {
      month = "12";
    }
    setCardExpiryMM(month);
  };

  const handleCardExpiryEnterYY = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cardExpiryYY = parseInt(value, 10);
    //Make input only 2 characters long with leading 0
    let year = String(cardExpiryYY).padStart(2, "0");
    // limit to 2 digits
    year = year.slice(0, 2);
    setCardExpiryYY(year);
  };
  return (
    <div>
      <label className="block card-label" htmlFor="expiration-date-mm">
        Exp. Date (MM/YY)
      </label>
      <div className="flex gap-[0.625rem]">
        <div
          className={`input-container-bd-gradient ${
            cardExpiryMMError ? "wrong-input" : ""
          }`}
        >
          <input
            value={cardExpiryMM}
            onChange={handleCardExpiryEnterMM}
            className="card-input max-w-[5rem]"
            type="text"
            id="expiration-date-mm"
            placeholder="MM"
          />
        </div>

        <div
          className={`input-container-bd-gradient ${
            cardExpiryYYError ? "wrong-input" : ""
          }`}
        >
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
      {cardExpiryResultError && (
        <p className="mt-2 text-xs text-red" role="alert" aria-live="assertive">
          {cardExpiryResultError}
        </p>
      )}
    </div>
  );
}
