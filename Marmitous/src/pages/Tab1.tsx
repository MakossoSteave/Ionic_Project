import ExploreContainer from '../components/ExploreContainer';
import { IonButton, IonContent, IonItem, IonLabel,IonPage, IonList, IonListHeader, IonThumbnail, IonImg, IonGrid, IonRow, IonCol} from '@ionic/react';


import './Tab1.css';


const Tab1: React.FC = () => {
  type Item = {
    src: string;
    text: string;
  };
  const items: Item[] = [{ src: "https://www.toutlevin.com/img/1309ccef4a22d5ef95eb4c6dd6a2d60a004740003000-960.jpg", text: 'Salade niçoise' }];
  
  return (
    <IonPage>

    <IonContent>
 
    <IonListHeader>
      <IonLabel>Marmitous</IonLabel>
    </IonListHeader>

   
   
    <IonList>
      <IonListHeader lines="inset">
        <IonLabel>Recent</IonLabel>
      </IonListHeader>
      <IonItem lines="none">
        
        <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
      </IonItem>
    </IonList>

    <IonList>
      <IonListHeader lines="inset">
        <IonLabel>Liste des recettes</IonLabel>
      </IonListHeader>
   
     
    </IonList>
    <IonGrid>
      <IonRow>
      {items.map((image, i) => (
        <IonItem key={i}>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>

        </IonCol>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
      
        </IonItem>
        ))}

      </IonRow>
      <IonRow>
      {items.map((image, i) => (
        <IonItem key={i}>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
      
        </IonItem>
        ))}

      </IonRow>
      <IonRow>
      {items.map((image, i) => (
        <IonItem key={i}>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
      
        </IonItem>
        ))}

      </IonRow>
      <IonRow>
      {items.map((image, i) => (
        <IonItem key={i}>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
      
        </IonItem>
        ))}

      </IonRow>
      <IonRow>
      {items.map((image, i) => (
        <IonItem key={i}>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
      
        </IonItem>
        ))}

      </IonRow>
      <IonRow>
      {items.map((image, i) => (
        <IonItem key={i}>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>

        </IonCol>
        <IonCol> <IonImg src={image.src} />
        <IonLabel>interessant</IonLabel>
</IonCol>
      
        </IonItem>
        ))}

      </IonRow>
    </IonGrid>
  </IonContent>
  </IonPage>

  
  );
};

export default Tab1;
