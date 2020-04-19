import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonIcon, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Booking.scss';
import { setUsername } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps { }

interface StateProps {
  username?: string;
}

interface DispatchProps {
  setUsername: typeof setUsername;
}

interface BookingProps extends OwnProps, StateProps, DispatchProps { }

const Booking: React.FC<BookingProps> = ({ setUsername, username }) => {

  const [showAlert, setShowAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  }

  return (
    <IonPage id="booking-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/account" />
            </IonButtons>
          <IonTitle>Booking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol className="booking">
            <IonIcon icon="body" />
            <IonLabel>
              <h2>Tamaño</h2>
              <p>5x5</p>
            </IonLabel>
            </IonCol>
            <IonCol className="booking">
            <IonLabel>
              <h2>Horario</h2>
              <p>10:00 A.M. - 11:00 A.M.</p>
            </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonIcon name="heart" size="small"></IonIcon>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    username: state.user.username
  }),
  mapDispatchToProps: {
    setUsername,
  },
  component: Booking
})