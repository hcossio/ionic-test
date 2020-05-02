import React from 'react'
import PropTypes from 'prop-types'
import Seat from './Seat';
const SeatRow = ({ seats, rowNumber }) => (
   <div>
      <li className="row">
        <ol className="seatrow">
           {seats.map(seat =>
             <Seat key={seat.number} number={seat.number}
                   price={seat.price}
                   status={seat.status}
             />
           )}
        </ol>
      </li>
    </div>
)
SeatRow.propTypes = {
   seats: PropTypes.arrayOf(PropTypes.shape({
      number: PropTypes.number,
      price: PropTypes.number,
      status: PropTypes.string
   }))
}
export default SeatRow;