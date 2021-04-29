import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { Redirect, useHistory } from "react-router-dom";
interface Iquick {
  path?: string;
}

const QuickAcces: React.FC = () => {
  const history = useHistory();
  useIonViewWillEnter(() => {
    const link = localStorage.getItem("path");
    if (link !== null) {
      history.replace(link);
    } else {
      history.replace("/tab1");
    }
  });
  return <IonPage></IonPage>;
};

export default QuickAcces;
