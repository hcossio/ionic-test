import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Reserve.css';
import SeatList from '../components/SeatList';
import Cart from '../components/Cart';
import { getSeats } from '../api/service';
import SeatRow from '../components/SeatRow';

class Reserve extends Component {
  constructor() {
    super();
    this.state = {
      seatrows: [],
    }
  }

  componentDidMount() {
    let _this = this;
    getSeats().then(function (list) {
      console.log(list);
      _this.setState({
        seatrows: list,
      });
    });

  }

  render() {
    return (

      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Booking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
          <IonItem>
          <SeatList title="Seats">
          {this.state.seatrows.map((row, index) =>
          
            <SeatRow
              seats={row.seats}
              key={index}
            />
          )}
        </SeatList>
        </IonItem>
        </IonCard>
        <IonCard>
        <IonItem>
        <Cart />
        </IonItem>
        
          
        </IonCard>
      </IonContent>
    </IonPage>
    

      
    )


  }
}

export default Reserve;