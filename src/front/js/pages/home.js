import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="d-flex flex-wrap w-100">
        <h2 className="text-warning">characters</h2>
        <div className="d-flex overflow-scroll">
          {store.people.map((item) => {
            return <Card key={item.uid} item={item} resource={"people"} />;
          })}
        </div>
      </div>
    </div>
  );
};
