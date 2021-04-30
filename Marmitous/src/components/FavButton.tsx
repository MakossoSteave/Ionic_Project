import { IonButton, IonIcon, useIonViewWillEnter } from "@ionic/react";
import { useEffect, useState } from "react";
import React from "react";
import { heart, heartOutline } from "ionicons/icons";
import { setUncaughtExceptionCaptureCallback } from "process";

import styled from "styled-components";
interface IButton {
  libelle: string;
}

const FavButton: React.FC<IButton> = ({ libelle }) => {
  const [state, setState] = useState(-1);
  const [faved, setFaved] = useState(false);
  //const [name, setName] = useState(libelle);
  const [icon, setIcon] = useState(heartOutline);

  let name = libelle;

  useIonViewWillEnter(() => {
    let fav = localStorage.getItem("favorie");
    let actv = localStorage.getItem("active");
    if (actv !== null) {
      //setName(actv);
      name = actv;
    }
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
  useEffect(() => {
    setIcon(faved ? heart : heartOutline);
  }, [faved]);

  const FavButtonS = styled.div`
    .buttonFav {
      background-color: white;
    }

    ion-icon {
      height: 25px;
      width: 25px;
      color: deeppink;
    }
  `;
  return (
    <FavButtonS>
      <button className="buttonFav" onClick={() => handleClick()}>
        <IonIcon slot="start" icon={icon}></IonIcon>
      </button>
    </FavButtonS>
  );
};

export default FavButton;
