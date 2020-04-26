import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonSelect, IonSelectOption, IonButton, IonContent, IonInput, IonCardTitle, IonCardHeader, IonPage, IonCard, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonIcon, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Booking.scss';
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

interface BookingProps extends OwnProps, StateProps, DispatchProps { }

const Booking: React.FC<BookingProps> = ({ setUsername, username }) => {

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
    <IonPage id="booking-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/"/>
        </IonButtons>
          <IonTitle>Booking</IonTitle>
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
            <IonCol className="card-col">
            <IonLabel>
              <h2>Nombre de Liga</h2>
            </IonLabel>
            <IonInput value={liga} placeholder="Los Tigres" onIonChange={e => setLiga(e.detail.value!)}></IonInput>
            </IonCol>
          </IonRow>
          </IonCard>
          <IonCard className="card">
          <IonRow>
            <IonCol className="card-col">
            <IonLabel>
              <h2>Nota</h2>
            </IonLabel>
            <IonInput value={nota} placeholder="Guardar bola dura." onIonChange={e => setNota(e.detail.value!)}></IonInput>
            </IonCol>
          </IonRow>
          </IonCard>
          <IonCard className="card">
          <IonRow>
            <IonCol className="booking-cardm">
            <IonLabel>
              <h2>Tipo</h2>
            <IonSelect value={tipo} placeholder="Abierto" interface="action-sheet" onIonChange={e => setTipo(e.detail.value)}>
              <IonSelectOption value="privado">Privado</IonSelectOption>
              <IonSelectOption value="abierto">Abierto</IonSelectOption>
            </IonSelect>
            </IonLabel>
            </IonCol>
            <IonCol className="booking-cardm">
            <IonLabel>
              <h2>Maximo</h2>
              <IonSelect value={maximo} placeholder="10" onIonChange={e => setMaximo(e.detail.value)}>
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="2">2</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
              <IonSelectOption value="4">4</IonSelectOption>
              <IonSelectOption value="5">5</IonSelectOption>
              <IonSelectOption value="6">6</IonSelectOption>
              <IonSelectOption value="7">7</IonSelectOption>
              <IonSelectOption value="8">8</IonSelectOption>
              <IonSelectOption value="9">9</IonSelectOption>
              <IonSelectOption value="10">10</IonSelectOption>
              <IonSelectOption value="11">11></IonSelectOption>
              <IonSelectOption value="12">12</IonSelectOption>
              <IonSelectOption value="13">13</IonSelectOption>
              <IonSelectOption value="14">14</IonSelectOption>
              <IonSelectOption value="15">15</IonSelectOption>
              <IonSelectOption value="16">16</IonSelectOption>
              <IonSelectOption value="17">17</IonSelectOption>
              <IonSelectOption value="18">18</IonSelectOption>
              <IonSelectOption value="19">19</IonSelectOption>
              <IonSelectOption value="20">20</IonSelectOption>
              <IonSelectOption value="21">21</IonSelectOption>
              <IonSelectOption value="22">22</IonSelectOption>
            </IonSelect>
            </IonLabel>
            </IonCol>
            <IonCol className="booking-cardm">
            <IonLabel>
              <h2>Clave</h2>
              <IonInput value={clave} placeholder="1234" onIonChange={e => setClave(e.detail.value!)}></IonInput>
            </IonLabel>
            </IonCol>
          </IonRow>
          </IonCard>
        </IonGrid>
        <IonButton className="button" expand="block" routerLink="/payment" routerDirection="none">Enviar</IonButton>
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