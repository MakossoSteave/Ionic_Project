import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Recette.css";
import { Storage } from "@ionic/storage";
import FavButton from "../components/FavButton";

const Salade: React.FC = () => {
  const image = {
    src:
      "https://www.toutlevin.com/img/1309ccef4a22d5ef95eb4c6dd6a2d60a004740003000-960.jpg",
    text: "Salade niçoise",
  };

  const name = "/pizza";
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recette</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src={image.src} />
        <IonLabel>{image.text}</IonLabel>
        <FavButton libelle={name}>favorie</FavButton>
      </IonContent>
    </IonPage>
  );
};

export default Salade;
