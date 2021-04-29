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
  useIonViewWillEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import styles from "./Recette.module.css";
import { Storage } from "@ionic/storage";
import FavButton from "../components/FavButton";

const Recette: React.FC = () => {
  let name = "";
  const temps = "temps";
  const vote = "vote";

  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [preparation, setPrep] = useState<Array<String[]>>([]);
  const [ingredient, setIngre] = useState<String[]>([]);
  //const video = "https://www.youtube.com/embed/LUXanyYTcXI";

  const extractPage = () => {
    const p = localStorage.getItem("page");
    if (p !== null) {
      const page = JSON.parse(p, (key, value) => {
        return value;
      });
      console.log("page", page);
      const v = page.video;
      setTitle(page.text);
      setVideo(v.toString());
      setPrep(page.preparation);
      setIngre(page.ingredient);
    }
  };

  useIonViewWillEnter(() => {
    extractPage();
  });

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
          {/*<div className={styles.vote}>{vote}</div>*/}
        </div>
        <div className={styles.libelle}>{temps}</div>
        <div className={styles.libelle}>ingredients</div>
        {ingredient.map((ing) => (
          <div className={styles.contenue}>{ing}</div>
        ))}
        <div className={styles.libelle}>preparation</div>
        {preparation.map((pre, i) => (
          <div className={styles.contenue}>
            <div className={styles.etape}>etape {i + 1}</div>
            {pre.map((p, i) => (
              <p>{p}</p>
            ))}
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Recette;
