import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/ondas-sonoras.png";
import Buscador from "../Buscador/Buscador";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-light bg-secondary">
        <div className="container-fluid">
          <div>
            <Link to='/'><img src={logo} style={{ height: "40px", width: "50px"}} /></Link>
            <a className="navbar-brand m-2" style={{ color: "white" }}>
              TomiFy
            </a>
          </div>
          <Buscador />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
