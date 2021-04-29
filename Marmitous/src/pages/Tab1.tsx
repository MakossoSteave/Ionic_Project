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
  useIonViewWillEnter,
} from "@ionic/react";

import "./Tab1.css";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Tab1: React.FC = () => {
  type Item = {
    src: string;
    text: string;
  };
  const [link, setLink] = useState("");
  const [page, setPage] = useState(Object);
  const history = useHistory();

  const itemsRecent: Item[] = [];
  const itemsBrowse: Item[] = [];
  const listeA1: string[] = [
    "des bols séparés contiendront:",
    "-les oeufs battus",
    "-le mélange de farine avec l’oignon et le paprika",
    "-la chapelure",
  ];
  const listeA2: string[] = [
    "l’étape suivante sera à suivre dans l’ordre pour chaque morceaux de poulet",
    "-plongez le poulet dans l’oeuf",
    "-plongez dans le mélange de farine oignon paprika",
    "-replongez dans l’oeuf",
    "-plongez dans la chapelure",
  ];
  const listeA3: string[] = [
    "plongez les poulets panés dans une huile de friture à 160 degrés Celsius",
    "laissez les cuire pendant 10 à 12 min",
    "retournez les pour une cuisson plus homogène",
  ];
  const listeB1: string[] = [
    "– Mélanger la farine et le sel.",
    "– Dans un récipient, mélanger la levure, l’eau tiède et l’huile d’olive.",
    "– Mélanger à nouveau.",
    "– Incorporer la moitié de la préparation eau/levure/huile dans la farine.",
    "– Pétrir la pâte pendant 10 minutes puis verser l’autre moitié de la préparation et pétrir à nouveau.",
  ];
  const listeB2: string[] = [
    "– Filmer la pâte et laisser reposer 1h30.",
    "–La donner une forme ronde ",
    "– La déposer sur le plan de travail fariné, couvrir avec un torchon et laisser lever 1h00 dans un endroit tempéré.",
  ];
  const listeB3: string[] = [
    "– Aplatir, former un cercle et étirer.",
    "– Garnir votre pizza avec les ingrédients de votre choix.",
  ];
  const listeC1: string[] = [
    "faire fondre au bain marri ou micro-onde le chocolat",
    "mélangez avec un fouet les oeufs battus et le chocolat",
  ];
  const listeC2: string[] = [
    "ajoutez la farine et la maïzena et mélangez",
    "ajoutez le sel, la compote et mélangez",
  ];
  const listeC3: string[] = [
    "une fois le mélange homogène versez-le dans un plat beurré",
    "enfournez le tous dans un four à 180 degrés Celsius pendant 20 min",
  ];

  const listeA = [listeA1, listeA2, listeA3];
  const listeB = [listeB1, listeB2, listeB3];
  const listeC = [listeC1, listeC2, listeC3];

  const ingre1: string[] = [
    "2 blancs de poulet en morceaux",
    "farine 100 grammes",
    "2 oeufs",
    "un oignon découpé",
    "paprica",
    "chapelure (cereales nature en morceau ou biscotes broyés en poudre)",
    "huile de friture",
  ];
  const ingre2: string[] = [
    "farine 300 grammes",
    "eau tiède 180 grammes",
    "sel 6 grammes",
    "huile d’olive 3 cuilleres à soupe",
    "levure fraiche 5 gr ou levure sèche 2 grammes",
  ];
  const ingre3: string[] = [
    "-chocolat en morceau 200 grammes",
    "-farine 45 grammes",
    "-maïzena 15 grammes",
    "-compote de pomme 200 grammes",
    "-3 oeufs",
    "- sel 1 pincé",
  ];

  const recette1 = {
    src:
      "https://www.marciatack.fr/wp-content/uploads/2015/06/poulet-pane-500x500.jpg",
    text: "Poulet frie",
    video: "https://www.youtube.com/embed/LUXanyYTcXI",
    preparation: listeA,
    temps: "20 minutes",
    ingredient: ingre1,
  };
  const recette2 = {
    src: "https://www.byacb4you.com/wp-content/uploads/2020/03/pate-pizza.jpg",
    text: "Pate à pizza",
    video: "https://www.youtube.com/embed/SF2F1xKTrdE",
    preparation: listeB,
    temps: "2 heures",
    ingredient: ingre2,
  };
  const recette3 = {
    src:
      "https://fr.rc-cdn.community.thermomix.com/recipeimage/dj5xw1q5-ae599-739584-cfcd2-3jrlw9n5/fa418411-a400-4f04-a7ba-51eb6ffb99d0/main/fondant-au-chocolat.jpg",
    text: "fondant au chocolat",
    video: "https://www.youtube.com/embed/Exbdy6I-WCI",
    preparation: listeC,
    temps: "30 minutes",
    ingredient: ingre3,
  };

  itemsRecent.push(recette1);
  itemsRecent.push(recette2);
  itemsRecent.push(recette3);

  itemsBrowse.push(recette1);
  itemsBrowse.push(recette2);
  itemsBrowse.push(recette3);

  let f = localStorage.getItem("favorie");
  const [fav, setFav] = useState([""]);
  useIonViewWillEnter(() => {
    f = localStorage.getItem("favorie");
    const favo: string[] = [];
    if (f !== null) {
      const t = f.split(",");
      t.map((f, i) => {
        if (f !== "") {
          favo[i] = f;
        }
      });
    }
    setFav(favo);
  });
  /*
  const handleLink = (path: string) => {
    localStorage.setItem("path", path);
    history.replace(path);
  };*/
  const handlePage = (page: Object) => {
    localStorage.setItem("page", JSON.stringify(page));
    history.replace("/Recette");
  };
  const isEmptyObject = (obj: Object) => {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  };
  useEffect(() => {
    if (!isEmptyObject(page)) {
      handlePage(page);
    }
  }, [page]);

  return (
    <IonPage>
      <IonContent>
        <IonListHeader>
          <IonLabel>Marmitous</IonLabel>
        </IonListHeader>

        <IonListHeader lines="inset">
          <IonLabel>Favoris</IonLabel>
        </IonListHeader>
        <IonList>
          {fav.map((f, i) => (
            <IonItem key={i}>
              <IonButton onClick={() => setLink(f)}>{f}</IonButton>
            </IonItem>
          ))}
        </IonList>
        {/*
        <IonButton onClick={() => setLink("/salade")}>Salade</IonButton>
        <IonButton onClick={() => setLink("/pizza")}>Pizza</IonButton>
        <IonButton onClick={() => setLink("/pates")}>Pates</IonButton>
        */}
        <IonList>
          <IonListHeader lines="inset">
            <IonLabel>Recent</IonLabel>
          </IonListHeader>
          <IonItem lines="none">
            <IonList>
              {itemsRecent.map((p, i) => (
                <IonItem onClick={() => setPage(p)} key={i}>
                  <IonThumbnail slot="start">
                    <IonImg src={p.src} />
                  </IonThumbnail>
                  <IonLabel>{p.text}</IonLabel>
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
            {itemsRecent.map((p, i) => (
              <IonItem onClick={() => setPage(p)} key={i}>
                <IonCol>
                  <IonLabel>{p.text}</IonLabel>
                  <IonImg src={p.src} />
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
