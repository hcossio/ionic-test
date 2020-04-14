import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonList, IonItem, IonAlert, IonLabel, IonNote, IonIcon } from '@ionic/react';
import './Account.scss';
import { setUsername } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import { Speaker } from '../models/Speaker';
import { star } from 'ionicons/icons';

interface OwnProps extends RouteComponentProps { }

interface StateProps {
  username?: string;
}

interface DispatchProps {
  setUsername: typeof setUsername;
}

interface AccountProps extends OwnProps, StateProps, DispatchProps { }

const Account: React.FC<AccountProps> = ({ setUsername, username }) => {

  const [showAlert, setShowAlert] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  }

  return (
    <IonPage id="account-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {username &&
          (<div className="ion-padding-top ion-text-center">
            <img src="/assets/img/speakers/humbis.jpg" alt="avatar" />
            <h2>{ username }</h2>
            <IonIcon slot="start" icon={star}/>
            <IonIcon slot="start" icon={star}/>
            <IonIcon slot="start" icon={star}/>
            <IonIcon slot="start" icon={star}/>
            <IonIcon slot="start" icon={star}/>
            <IonList inset>
            <IonItem>
          <IonLabel>Yo Juego Coins:</IonLabel>
          <IonNote slot="end" color="primary">RD$2,500.00</IonNote>
        </IonItem>
              <IonItem routerLink="/profile" routerDirection="none">Profile</IonItem>
              <IonItem routerLink="/tabs/schedule" routerDirection="none">Reservations</IonItem>
              <IonItem routerLink="/friends" routerDirection="none">Friend List</IonItem>
              <IonItem routerLink="/paymentMethods" routerDirection="none">Payment Methods</IonItem>
              <IonItem routerLink="/support" routerDirection="none">Support</IonItem>
              <IonItem routerLink="/logout" routerDirection="none">Logout</IonItem>
            </IonList>
          </div>)
        }
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        header="Change Username"
        buttons={[
          'Cancel',
          {
            text: 'Ok',
            handler: (data) => {
              setUsername(data.username);
            }
          }
        ]}
        inputs={[
          {
            type: 'text',
            name: 'username',
            value: username,
            placeholder: 'username'
          }
        ]}
        onDidDismiss={() => setShowAlert(false)}
      />
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
  component: Account
})