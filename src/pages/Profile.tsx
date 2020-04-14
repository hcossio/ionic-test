import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonItem, IonAlert, IonLabel, IonNote, IonIcon, IonSelect, IonSelectOption, IonDatetime } from '@ionic/react';
import './Profile.scss';
import { setUsername } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import { star } from 'ionicons/icons';

interface OwnProps extends RouteComponentProps { }

interface StateProps {
  username?: string;
}

interface DispatchProps {
  setUsername: typeof setUsername;
}

interface ProfileProps extends OwnProps, StateProps, DispatchProps { }

const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

const customDayShortNames = [
  's\u00f8n',
  'man',
  'tir',
  'ons',
  'tor',
  'fre',
  'l\u00f8r'
];

const Profile: React.FC<ProfileProps> = ({ setUsername, username }) => {

  const [showAlert, setShowAlert] = useState(false);
  const [gender, setGender] = useState<string>();
  const [level, setLevel] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  }

  

  return (
    <IonPage id="profile-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/account" />
            </IonButtons>
          <IonTitle>Profile</IonTitle>
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
              <IonItem onClick={() => clicked('Update Picture')}>Update Picture</IonItem>
              <IonItem onClick={() => setShowAlert(true)}>Change Username</IonItem>
              <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
          <IonLabel>Test</IonLabel>
          <IonDatetime
            min="1900"
            max="2014"
            dayShortNames={customDayShortNames}
            displayFormat="MMM DD, YYYY"
            monthShortNames="Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"
            value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
          <IonItem>
            <IonLabel>Level</IonLabel>
            <IonSelect value={level} placeholder="Select One" onIonChange={e => setLevel(e.detail.value)}>
              <IonSelectOption value="Beginner">Beginner</IonSelectOption>
              <IonSelectOption value="Advanced">Advanced</IonSelectOption>
              <IonSelectOption value="Expert">Expert</IonSelectOption>
            </IonSelect>
          </IonItem>
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
  component: Profile
})