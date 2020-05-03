import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonSelect, IonSelectOption, IonButton, IonContent, IonInput, IonCardTitle, IonCardHeader, IonPage, IonCard, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonIcon, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, IonGrid, IonRow, IonCol } from '@ionic/react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addSeatToCart } from '../actions'
import SeatRow from '../components/SeatRow'
import SeatList from '../components/SeatList'
import { getAllSeats } from '../reducers/seats';
import '../pages/Reserve.css';

const SeatContainer = ({ seatrows, addSeatToCart }) => {
    return (

      <IonGrid>
          <IonCard>
          <IonRow>
              <IonCol>
              <IonCardTitle className="title">
                Seats
              </IonCardTitle>
        {seatrows.map((row, index) =>
            <SeatRow key={index}
                seats={row.seats}
                rowNumber={index}
                onAddToCartClicked={addSeatToCart} />
        )}
              </IonCol>
          </IonRow>
          </IonCard>
        </IonGrid>

    

)
}
SeatContainer.propTypes = {
    seatrows: PropTypes.arrayOf(PropTypes.shape({
        number: PropTypes.number,
        price: PropTypes.number,
        status: PropTypes.string,
        rowNo: PropTypes.number
    })).isRequired,
    addSeatToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    seatrows: getAllSeats(state.seats)
})

export default connect(mapStateToProps,  { addSeatToCart })(SeatContainer)