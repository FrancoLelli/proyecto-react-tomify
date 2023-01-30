import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//CSS
import "./BusquedaArtista.css";

function BusquedaArtista() {
  const query = new URLSearchParams(window.location.search);

  let result = query.get("q");

  const [resultado, setResult] = useState([]);

  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: result },
    headers: {
      "X-RapidAPI-Key": "2277e5086cmsha9a24ecda9890ffp112ffajsn2349929f59be",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((resp) => {
        const result = resp.data.data;
        const artista = result[0].artist;
        setResult(artista)
      })
      .catch((err) => {
        console.log("Hubo un error. Intenta mas tarde");
      });
  }, [resultado]);

  return (
    <div className="card m-3" style={{width: '20rem'}}>
      <img className="card-img-top" src={resultado.picture_xl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{resultado.name}</h5>
      </div>
    </div>
  );
}

export default BusquedaArtista;
