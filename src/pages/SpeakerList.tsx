import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import SpeakerItem from '../components/SpeakerItem';
import { Speaker } from '../models/Speaker';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import './SpeakerList.scss';

interface OwnProps { };

interface StateProps {
  speakers: Speaker[];
};

interface DispatchProps { };

interface SpeakerListProps extends OwnProps, StateProps, DispatchProps { };

const SpeakerList: React.FC<SpeakerListProps> = ({ speakers }) => {

  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Clubs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Clubs</IonTitle>
          </IonToolbar>
        </IonHeader>

          <IonGrid fixed>
            <IonRow>
              {speakers.map(speaker => (
                <IonCol size="12" size-md="6" key={speaker.id}>
                  <SpeakerItem
                    key={speaker.id}
                    speaker={speaker}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    speakers: selectors.getSpeakers(state)
  }),
  component: React.memo(SpeakerList)
});