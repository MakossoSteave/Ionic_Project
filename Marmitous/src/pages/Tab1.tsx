import ExploreContainer from "../components/ExploreContainer";
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonList,
  IonListHeader,
  IonThumbnail,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import "./Tab1.css";
import { Route } from "react-router-dom";

const Tab1: React.FC = () => {
  type Item = {
    src: string;
    text: string;
  };
  const itemsRecent: Item[] = [];
  const itemsBrowse: Item[] = [];

  const img = {
    src:
      "https://www.toutlevin.com/img/1309ccef4a22d5ef95eb4c6dd6a2d60a004740003000-960.jpg",
    text: "Salade niçoise",
  };

  for (let i = 0; i < 3; i++) {
    itemsRecent.push(img);
  }
  for (let i = 0; i < 10; i++) {
    itemsBrowse.push(img);
  }

  return (
    <IonPage>
      <IonContent>
        <IonListHeader>
          <IonLabel>Marmitous</IonLabel>
        </IonListHeader>

        <iframe
          src="https://www.youtube.com/embed/Gvzfwuw1PZE"
          width="200"
          height="150"
        ></iframe>

        <IonList>
          <IonListHeader lines="inset">
            <IonLabel>Recent</IonLabel>
          </IonListHeader>
          <IonItem lines="none">
            <IonList>
              {itemsRecent.map((image, i) => (
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
            <IonLabel>Liste des plats</IonLabel>
          </IonListHeader>
        </IonList>
        <IonGrid>
          <IonRow>
            {itemsBrowse.map((image, i) => (
              <IonItem key={i}>
                <IonCol>
                  {" "}
                  <IonImg src={image.src} />
                  <IonLabel>{image.text}</IonLabel>
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
