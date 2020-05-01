import React from 'react';
import { Speaker } from '../models/Speaker';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';


interface SpeakerItemProps {
  speaker: Speaker;
}

const SpeakerItem: React.FC<SpeakerItemProps> = ({ speaker }) => {
  return (
    <>
      <IonCard className="speaker-card">
        <IonCardHeader>
          <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/tabs/speakers/${speaker.id}`}>
            <IonAvatar slot="start">
              <img src={process.env.PUBLIC_URL + speaker.profilePic} alt="Speaker profile pic" />
            </IonAvatar>
            <IonLabel>
              <h2>{speaker.name}</h2>
              <p>{speaker.title}</p>
            </IonLabel>
          </IonItem>
        </IonCardHeader>
      </IonCard>
    </>
  );
};

export default SpeakerItem;