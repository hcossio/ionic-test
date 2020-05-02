import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet } from '@ionic/react';
import './Friends.scss';
import { setUsername } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import Reserve from './Reserve';
import SeatList from '../components/SeatList';
import SeatRow from '../components/SeatRow';

interface OwnProps extends RouteComponentProps { }

interface StateProps {
  username?: string;
}

interface DispatchProps {
  setUsername: typeof setUsername;
}

interface FriendsProps extends OwnProps, StateProps, DispatchProps { }

const Friends: React.FC<FriendsProps> = ({ setUsername, username }) => {

  const [showAlert, setShowAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  }

  return (
    <IonPage id="friends-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/account" />
            </IonButtons>
          <IonTitle>Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
      <IonItemSliding>
        <IonItem onClick={() => setShowActionSheet(true)}>
          <IonAvatar slot="start">
            <img src="/assets/img/speakers/gladiator.jpg"/>
          </IonAvatar>
          <IonLabel>
          </IonLabel>
          <SeatList title="Seats">
        </SeatList>
        </IonItem>
        <IonItemOptions side="end">
            <IonItemOption color="danger">Delete</IonItemOption>
          </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
        <IonItem onClick={() => setShowActionSheet(true)}>
          <IonAvatar slot="start">
            <img src="/assets/img/speakers/commodus.jpg"/>
          </IonAvatar>
          <IonLabel>
            <h2>Lucius Aurelius</h2>
            <h3>lucaur</h3>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
            <IonItemOption color="danger">Delete</IonItemOption>
          </IonItemOptions>
          </IonItemSliding>
          <IonItem onClick={() => setShowAlert(true)}>Add New Friend</IonItem>
        </IonList>
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
  component: Friends
})