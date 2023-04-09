import React from "react";

export default function CardForm() {
  return (
    <div className="">
      <form className="">
        <label className=" block" htmlFor="cardholder-name">
          Cardholder Name
          <input
            className="block"
            type="text"
            id="cardholder-name"
            placeholder="e.g. Jane Appleseed"
          />
        </label>
        <label className="block" htmlFor="card-number">
          Card Number
          <input
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
                  className=""
                  type="text"
                  id="expiration-date-mm"
                  placeholder="MM"
                />
                <input
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
        <input type="submit" className="" />
      </form>
    </div>
  );
}
