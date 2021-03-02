import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ExploreContainer.css";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";

const Album: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    callBackendAPI();
  }, []);

  const callBackendAPI = async () => {
    await axios
      .get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
      //   .then((res) => console.log("TestLog", res.data));
      //   .then(res => setData(res.data.feed.entry));
      .then((res) => {
        console.log("TestLog", res.data);
        setData(res.data.feed.entry);
        // setPicCover(res.data.feed.entry);
      });
  };

  let albumCard =
    data &&
    data.map((val) => (
      <IonCol sizeSm="6" sizeMd="4" sizeLg="3">
        <IonCard>
          <img src={val["im:image"][2]["label"]} />
          <IonCardHeader>
            <IonCardSubtitle>
              <a href={val["link"]["attributes"]["href"]}>Destination</a>
            </IonCardSubtitle>
            <IonCardTitle>
              <h3>{val["title"]["label"]}</h3>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Price
              {val["im:price"]["attributes"]["amount"]}
              {val["im:price"]["attributes"]["currency"]}
            </p>
          </IonCardContent>
        </IonCard>
      </IonCol>
    ));

  return (
    <div className="container">
      <IonGrid>
        <IonRow>{albumCard} </IonRow>
      </IonGrid>
    </div>
  );
};

export default Album;
