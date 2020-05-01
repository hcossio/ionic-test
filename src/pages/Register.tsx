import React, { useState, useEffect } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react'
import { Link } from 'react-router-dom'
import { setIsLoggedIn, setUsername } from '../data/user/user.actions';
import { toast } from '../toast'
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import { registerUser } from '../firebaseConfig'

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface RegisterProps extends OwnProps,  DispatchProps { }

const Register: React.FC<RegisterProps> = ({setIsLoggedIn, history, setUsername: setUsernameAction}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function register() {
        // validation
        if(password !== cpassword) {
            return toast('Passwords do not match')
        }
        if(username.trim() === '' || password.trim() === '') {
            return toast('Username and password are required',4000)
        }

        const res = await registerUser(username, password)
        if (res) {
            toast('Registration successful')
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
          <IonTitle>Register</IonTitle>
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

            <IonItem>
              <IonLabel position="stacked" color="primary">Confirm Password</IonLabel>
              <IonInput type="password" onIonChange={(e: any) => setCPassword(e.target.value)}/>
            </IonItem>

        </IonList>

        <IonRow>
            <IonCol>
            <IonButton expand="block" onClick={register}>Register</IonButton>
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
  component: Register
})