import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonThumbnail, IonLabel } from '@ionic/react';
import './PaymentMethods.scss';
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

interface PaymentMethodsProps extends OwnProps, StateProps, DispatchProps { }

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ setUsername, username }) => {

  const [showAlert, setShowAlert] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  }

  return (
    <IonPage id="paymentMethods-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/account" />
            </IonButtons>
          <IonTitle>Payment Methods</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
        <IonItem>
          <IonThumbnail slot="start">
            <img src="/assets/icon/visa.svg"/>
          </IonThumbnail>
          <IonLabel>
            <h2>Visa ending in 7777</h2>
            <h3>Expires: 9/21</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonThumbnail slot="start">
            <img src="/assets/icon/visa.svg"/>
          </IonThumbnail>
          <IonLabel>
            <h2>Visa ending in 8888</h2>
            <h3>Expires: 9/21</h3>
          </IonLabel>
        </IonItem>
        <IonItem routerLink="/tabs/speakers/1" routerDirection="none">Add New Method</IonItem>
        </IonList>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        header="Information"
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
  component: PaymentMethods
})