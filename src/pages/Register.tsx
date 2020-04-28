import React, { useState, useEffect } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react'
import { Link } from 'react-router-dom'
import { toast } from '../toast'
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function register() {
        // validation
        if(password !== cpassword) {
            return toast('Passwords do not match')
        }
        if(username.trim() === '' || password.trim() === '') {
            return toast('Username and password are required')
        }

        const res = await registerUser(username, password)
        if (res) {
            toast('Registration successful')
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

export default Register