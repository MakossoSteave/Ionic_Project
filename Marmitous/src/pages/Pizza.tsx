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
import styles from "./Recette.module.css";
import { Storage } from "@ionic/storage";
import FavButton from "../components/FavButton";

const Pizza: React.FC = () => {
  const image = {
    src:
      "https://www.toutlevin.com/img/1309ccef4a22d5ef95eb4c6dd6a2d60a004740003000-960.jpg",
    text: "Salade niçoise",
  };

  const name = "/pizza";
  const title = "Pate à pizza";
  const video = "https://www.youtube.com/embed/SF2F1xKTrdE";
  const ingredients = "ingredients";
  const preparation = "preparation";
  const temps = "temps";
  const vote = "vote";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <iframe
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.flex}>
          <FavButton libelle={name}>favorie</FavButton>
          <div className={styles.vote}>{vote}</div>
        </div>
        <div className={styles.libelle}>{temps}</div>
        <div className={styles.libelle}>ingredients</div>
        <div className={styles.contenue}>{ingredients}</div>
        <div className={styles.libelle}>preparation</div>
        <div className={styles.contenue}>
          <div className={styles.etape}>etape 1</div>
          {preparation}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Pizza;
