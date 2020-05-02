import React from 'react'
import PropTypes from 'prop-types'

const Seat = ({ number, price, status }) => (
  <li className={'seatobj ' + status} key={number.toString()}>
   <input type="checkbox" disabled={status === "booked" ? true : false} id={number.toString()} onClick={handleClick}/>
   <label htmlFor={number.toString()}>{number}</label>
  </li>
)
const handleClick = (event) => {
  console.log("seat selected " + event.target.checked);
}

Seat.propTypes = {
   number:PropTypes.number,
   price:PropTypes.number,
   status:PropTypes.string
}

export default Seat;