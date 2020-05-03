import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonSelect, IonSelectOption, IonButton, IonContent, IonInput, IonCardTitle, IonCardHeader, IonPage, IonCard, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonIcon, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, IonGrid, IonRow, IonCol } from '@ionic/react';
import SeatContainer from './SeatContainer'
import CartContainer from './SeatCartContainer'
import '../pages/Reserve.css';

const SeatBookingApp = () => (

    <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/"/>
        </IonButtons>
          <IonTitle>Booking</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
        <SeatContainer />
        <CartContainer />
    </IonContent>
    </IonPage>
)
export default SeatBookingApp;