// NavBar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./navBar.css";
import SearchBar from "../searchBar/searchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="logo">
        <Link to="/">
          <img src="/src/icons/LogoDS.png" alt="DevShop" />
        </Link>
      </section>
      <section>
        <ul className="categories-menu">
          <li>
            <Link to="/categoria1">T-Shirts</Link>
          </li>
          <li>
            <Link to="/categoria2">Accesorios</Link>
          </li>
          <li>
            <Link to="/categoria2">Tecnologia</Link>
          </li>
          <li className="best-sellers">
            <Link to="/best-sellers">Lo más vendido</Link>
          </li>
        </ul>
      </section>

      <SearchBar />

      <section className="user">
        <Link to="/perfil">
          <i className="material-icons">account_circle</i>
          <span>Inicia sesion</span>
        </Link>
      </section>

      <div className="like">
        <Link to="/perfil">
          <i className="material-icons">favorites</i>
          <span>Favoritos</span>
        </Link>
      </div>

      <div className="cart">
        <Link to="/carrito">
          <i className="material-icons">shopping_cart</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
