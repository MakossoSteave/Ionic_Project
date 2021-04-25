import { IonButton, useIonViewWillEnter } from "@ionic/react";
import { useEffect, useState } from "react";
import React from "react";

interface IButton {
  libelle: string;
}

const FavButton: React.FC<IButton> = ({ libelle }) => {
  const [state, setState] = useState(-1);
  const [faved, setFaved] = useState(false);
  const [name, setName] = useState(libelle);
  useIonViewWillEnter(() => {
    let fav = localStorage.getItem("favorie");

    if (fav !== null) {
      const t = fav.split(",");
      let gate = false;
      t.map((i) => {
        if (i === name) {
          gate = true;
          setState(1);
        }
      });
      if (gate) {
        setFaved(true);
      } else {
        setFaved(false);
      }
    }
  });

  const handleClick = () => {
    if (state !== -1) {
      setState(state === 1 ? 0 : 1);
    } else {
      setState(1);
    }
  };

  useEffect(() => {
    let fav = localStorage.getItem("favorie");
    if (state === 1) {
      if (fav !== null) {
        const t = fav.split(",");
        let gate = true;
        t.map((i) => {
          if (i === name) {
            gate = false;
          }
        });
        if (gate) {
          fav = fav + "," + name;
          localStorage.setItem("favorie", fav);
        }
      } else {
        localStorage.setItem("favorie", name);
      }
      setFaved(true);
    }
    if (state === 0) {
      if (fav !== null) {
        const t = fav.split(",");
        let str = "";
        t.map((i) => {
          if (i !== name && i !== "") {
            str += i + ",";
          }
        });

        localStorage.setItem("favorie", str);
      }
      setFaved(false);
    }
  }, [state]);
  return (
    <IonButton onClick={() => handleClick()}>
      favorie {faved && libelle}
    </IonButton>
  );
};

export default FavButton;
