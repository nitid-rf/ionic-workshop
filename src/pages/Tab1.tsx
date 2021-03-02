import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Album from "../components/Album";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grid</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Album />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
