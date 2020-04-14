import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import FriendItem from '../components/FriendItem';
import { Friend } from '../models/Friend';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import './FriendList.scss';

interface OwnProps { };

interface StateProps {
  friends: Friend;
};

interface DispatchProps { };

interface FriendListProps extends OwnProps, StateProps, DispatchProps { };

const FriendList: React.FC<FriendListProps> = ({ friends }) => {

  return (
    <IonPage id="friend-list">
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
              {friends.map(friend => (
                <IonCol size="12" size-md="6" key={friend.id}>
                  <FriendItem
                    key={friend.id}
                    friend={friend}
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
    friends: selectors.getFriends(state)
  }),
  component: React.memo(FriendList)
});