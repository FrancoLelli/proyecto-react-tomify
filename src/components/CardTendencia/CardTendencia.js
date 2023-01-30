import React from "react";
import "./CardTendencia.css";
import axios from "axios";
import { useState, useEffect } from "react";

function CardTendencia() {
  const [temaTendencia, setTendencia] = useState([]);

  const [img, setImg] = useState([]);

  const [artist, setArtist] = useState([]);

  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: "ahoraque" },
    headers: {
      "X-RapidAPI-Key": "2277e5086cmsha9a24ecda9890ffp112ffajsn2349929f59be",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((resp) => {
        const tend = resp.data.data[0];
        setArtist(tend.artist.name);
        setImg(tend.album.cover_xl);
        setTendencia(tend);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    // <div className="card" style={{
    //     backgroundImage: `url(${img})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat'
    //   }}>
    //   <p>{temaTendencia.title}</p>
    // </div>
    <div class="container d-flex justify-content-center">
      <div id="mobile-box">
        <div class="card">
          <div
            class="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img class="card-img-top" src={img} alt={temaTendencia.title} />
              <div
                class="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
          </div>
          <div class="card-body text-center">
            <h5 class="h5 font-weight-bold">
              <p>{temaTendencia.title} - {artist}</p>
            </h5>
            <audio controls
              id="music"
              src={temaTendencia.preview}
              type="audio/mp3"
            ></audio>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTendencia;
