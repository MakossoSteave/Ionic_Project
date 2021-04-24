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

const Recette: React.FC = () => {
  const image = {
    src:
      "https://www.toutlevin.com/img/1309ccef4a22d5ef95eb4c6dd6a2d60a004740003000-960.jpg",
    text: "Salade niçoise",
  };

  const [state, setState] = useState(false);
  const [name, setName] = useState("name");
  const handleClick = () => {
    setState(state ? false : true);
  };
  useEffect(() => {
    if (state) {
      localStorage.setItem("favorie", JSON.stringify(name));
    } else {
      localStorage.getItem("favorie");
    }
  }, [state]);
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
        <IonButton onClick={() => handleClick()}>favorie</IonButton>
        {state ? "o" : "n"}
        <IonToast
          isOpen={state}
          onDidDismiss={() => setState(false)}
          message="Toasty !"
          duration={200}
        ></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Recette;
