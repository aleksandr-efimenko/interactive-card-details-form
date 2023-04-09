import React from 'react'

export default function CardForm() {
  return (
    <div className="">
        <form className="">
          <label className=" block" htmlFor="cardholder-name">
            Cardholder Name
            <input className="block" type="text" id="cardholder-name"  placeholder='e.g. Jane Appleseed' />
          </label>
          <label className="block" htmlFor="card-number">
            Card Number
            <input className='' type="text" id="card-number" />
          </label>
          <div className="flex"></div>
          <label htmlFor=""></label>
          <input type="submit" className=""/>
        </form>
      </div>
  )
}
