import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonSelect, IonSelectOption, IonButton, IonContent, IonInput, IonCardTitle, IonCardHeader, IonPage, IonCard, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonIcon, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, IonGrid, IonRow, IonCol } from '@ionic/react';
import PropTypes from 'prop-types'
import '../pages/Reserve.css';

const Cart = ({seats,total, onCheckoutClicked}) => {

  const hasSeats = seats.length > 0
  const nodes = hasSeats ? (

    seats.map((seat, index) =>
      <div key={index}>
        Seat Number: {seat.number} - Price: {seat.price}
      </div>
    )

    // seats.map(seat =>
    //   <div>
    //     Seat Number: {seat.number} - Price: {seat.price}
    //   </div>
    // )

  ) : (
    <em>No seats selected</em>
  )

  return (
    <form noValidate onSubmit={onCheckoutClicked}>
          <IonGrid>
          <IonCard>
          <IonRow>
              <IonCol>
                  <div>
                  <IonCardTitle className="title">
                Selected Seats
              </IonCardTitle>
      {nodes} <br/>
    <b>Total</b> <br/>
      {total}
      <br/>
      {/* <button onClick={onCheckoutClicked}>
        Checkout
      </button> */}
    </div>
              </IonCol>
          </IonRow>
          </IonCard>
          <IonButton type="submit" expand="block">Checkout</IonButton>
        </IonGrid>
        </form>
  )
}

Cart.propTypes = {
  seats: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}
export default Cart;