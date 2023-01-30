import React from "react";
import "./css/Home.css";
import CardTendencia from "../CardTendencia/CardTendencia";

function Home() {
  return (
    <div className="body">
      <h2 className="texto">Today Hit</h2>
      <div className="content">
        <div className="tendencia">
          <CardTendencia />
        </div>
      </div>
    </div>
  );
}

export default Home;
