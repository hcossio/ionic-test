import React from 'react'
import SeatContainer from './SeatContainer'
import CartContainer from './SeatCartContainer'
import '../pages/Reserve.css';

const SeatBookingApp = () => (
    <div className="layout">
        <h2>Ticket Booking App</h2>
        <hr />
        <SeatContainer />
        <hr />
        <CartContainer />
    </div>
)
export default SeatBookingApp; 