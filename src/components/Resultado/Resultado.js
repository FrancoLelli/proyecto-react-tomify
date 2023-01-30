import axios from "axios";
import React, { useEffect, useState } from "react";
import BusquedaArtista from "../BusquedaArtista/BusquedaArtista";
import BusquedaCanciones from "../BusquedaCanciones/BusquedaCanciones";

function Resultado() {
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
        setResult(result);
        console.log(result);
      })
      .catch((err) => {
        console.log("Hubo un error. Intenta mas tarde");
      });
  }, [resultado]);

  return (
        <div>
          <h4 style={{ margin: "20px" }} align="start">
            Relacionado a: {result}
          </h4>
          <BusquedaArtista/>
          <h4 style={{ marginLeft: "20px" }} align="start">
            Canciones:
          </h4>
          <BusquedaCanciones resultado={resultado} />
        </div>
      )
}


export default Resultado;
