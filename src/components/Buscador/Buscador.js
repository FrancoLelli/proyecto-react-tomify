import React from "react";
import { useNavigate } from "react-router-dom";

function Buscador() {
  const navigate = useNavigate();

  const submitFormulario = (e) => {
    e.preventDefault();
    const palabraClave = e.currentTarget.keyword.value.trim();

    if (palabraClave.length === 0) {
      console.log("Por favor, ingresar datos al campo");
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultado?q=${palabraClave}`);
    }
  };
  return (
    <form onSubmit={submitFormulario} className="d-flex">
      <input
        class="form-control"
        placeholder="Musica, Artista, Album..."
        name="keyword"
      />
      <button class="btn btn-dark" type="submit" data-mdb-ripple-color="dark">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
