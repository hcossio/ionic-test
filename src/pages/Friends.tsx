import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet } from '@ionic/react';
import './Friends.scss';
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
            <h2>Maximus Decimus</h2>
            <h3>maxdec</h3>
          </IonLabel>
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
        <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
          text: 'Message',
          handler: () => {
            console.log('Message clicked');
          }
        }, {
          text: 'Invite',
          handler: () => {
            console.log('Invite clicked');
          }
        }, {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        header="Add Friend"
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
  component: Friends
})