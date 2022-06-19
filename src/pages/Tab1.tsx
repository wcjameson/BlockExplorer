import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';
// import { IonList, IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/react';

// type Item = {
//   src: string;
//   text: string;
// };
// const items: Item[] = [
//   { src: 'https://picjumbo.com/wp-content/uploads/bitcoin-coins-1570x1047.jpg', text: 'Bitcoin' },
//   { src: 'https://cdn3.vectorstock.com/i/1000x1000/63/37/colorful-cartoon-lightning-symbol-vector-24296337.jpg', text: 'Lightning' }
// ];


// interface Address {
//   Details: []
// }

// function getAddress(): Promise<Address[]> {
//   return fetch('https://mempool.space/api/address/')
//   .then(res => res.json())
//   .then(res => {
//     return res as Address[]
//   })
// }

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BlockExplorer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="container">
          {/* <strong>{name}</strong> */}
          <div className='addressInput'>
          <label htmlFor="address" id='address'>Enter Address </label>
          <input id="inputAddress" required={true} />
          <IonButton type="submit" color="tertiary" id="submit">Submit</IonButton>
          </div>

          <div className="output-on-chain"></div><br />
          <div className="output-mempool"></div>
        </div>
        {/* <IonList>
          {items.map((image, i) => (
            <IonItem key={i}>
              <IonThumbnail slot="start">
                <IonImg src={image.src} />
              </IonThumbnail>
              <IonLabel>{image.text}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
