import React, { useState, useEffect } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react'
import { Link } from 'react-router-dom'
import './LoginPage.scss';
import { loginUser } from '../firebaseConfig';
import { setIsLoggedIn, setUsername } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import { toast } from '../toast';

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface LoginProps extends OwnProps,  DispatchProps { }

const Home: React.FC<LoginProps> = ({setIsLoggedIn, history, setUsername: setUsernameAction}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        const res = await loginUser(username, password)
        if(res) {
            toast('You have logged in!')
            await setIsLoggedIn(true);
            await setUsernameAction(username);
            history.push('/tabs/schedule', {direction: 'none'});
        }
    }

    return (
        <IonPage>
            <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Ionic logo" />
        </div>
        <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Username</IonLabel>
              <IonInput onIonChange={(e: any) => setUsername(e.target.value)}/>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Password</IonLabel>
              <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)}/>
            </IonItem>
        </IonList>

        <IonRow>
            <IonCol>
                <IonButton expand="block" onClick={login}>Login</IonButton>
            </IonCol>
            <IonCol>
                <IonButton routerLink="/register" color="light" expand="block">Signup</IonButton>
            </IonCol>
        </IonRow>
          
            </IonContent>
            </IonPage>
    )
}

export default connect<OwnProps, {}, DispatchProps>({
    mapDispatchToProps: {
      setIsLoggedIn,
      setUsername
    },
    component: Home
  })