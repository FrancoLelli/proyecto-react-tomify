import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function BusquedaCanciones(props) {
  const resultado = props.resultado;
  return (
    <div className="d-flex flex-wrap">
      {resultado.map((oneSong, key) => {
        return (
          <div className="card m-3" key={key} style={{ width: "20rem" }}>
            <img
              className="card-img-top"
              src={oneSong.album.cover_xl}
              alt="Card image cap"
            />
            <div class="card-body text-center">
              <h5 class="font-weight-bold">
                <p>{oneSong.title}</p>
              </h5>
              <audio controls src={oneSong.preview} type="audio/mp3"></audio>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BusquedaCanciones;
