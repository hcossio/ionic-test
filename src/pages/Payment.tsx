import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonSelect, IonSelectOption, IonButton, IonContent, IonInput, IonCardTitle, IonCardHeader, IonPage, IonCard, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonIcon, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Payment.scss';
import { setUsername } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import { body, time } from 'ionicons/icons';


interface OwnProps extends RouteComponentProps { }

interface StateProps {
  username?: string;
}

interface DispatchProps {
  setUsername: typeof setUsername;
}

interface PaymentProps extends OwnProps, StateProps, DispatchProps { }

const Payment: React.FC<PaymentProps> = ({ setUsername, username }) => {

  const [showAlert, setShowAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [liga, setLiga] = useState<string>();
  const [nota, setNota] = useState<string>();
  const [tipo, setTipo] = useState<string>();
  const [maximo, setMaximo] = useState<string>();
  const [clave, setClave] = useState<string>();

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  }

  return (
    <IonPage id="payment-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/"/>
        </IonButtons>
          <IonTitle>Payment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
      <IonCard className="card-header">
        <img src="https://res.cloudinary.com/yojuego/image/upload/v1535173617/brazuka-4.png" />
        <IonCardHeader>
          <IonCardTitle className="card-title">Brazuka, F.C.</IonCardTitle>
        </IonCardHeader>
        </IonCard>
        <IonGrid>
          <IonCard className="card">
          <IonRow>
            <IonCol className="booking-cardl">
            <IonIcon icon={body} />
            <IonLabel>
              <h2>Tamaño</h2>
              <p>5x5</p>
            </IonLabel>
            </IonCol>
            <IonCol className="booking-cardr">
            <IonIcon icon={time} />
            <IonLabel>
              <h2>Horario</h2>
              <p>10:00 A.M. - 11:00 A.M.</p>
            </IonLabel>
            </IonCol>
          </IonRow>
          </IonCard>
          <IonCard className="card">
          <IonRow>
            <IonCol className="booking-cardl">
            <IonIcon icon={body} />
            <IonLabel>
              <h2>Nombre de Liga</h2>
              <p>Los Tigres</p>
            </IonLabel>
            </IonCol>
            <IonCol className="booking-cardr">
            <IonIcon icon={time} />
            <IonLabel>
              <h2>Fecha</h2>
              <p>12/04/2020</p>
            </IonLabel>
            </IonCol>
          </IonRow>
          </IonCard>
        </IonGrid>
        <IonButton className="button" expand="block" href="/payment/">Enviar</IonButton>
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
  component: Payment
})