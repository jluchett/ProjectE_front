// Navbar.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="ruta/al/logo.png" alt="Logo" />
        </Link>
      </div>

      <ul className="categories-menu">
        {/* Usa Link en lugar de <a> */}
        <li><Link to="/categoria1">Categoría 1</Link></li>
        <li><Link to="/categoria2">Categoría 2</Link></li>
        {/* Agrega más categorías según tu necesidad */}
      </ul>

      <div className="best-sellers">
        <Link to="/best-sellers">Lo más vendido</Link>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>

      <div className="user">
        <Link to="/perfil">Usuario</Link>
      </div>

      <div className="language">
        <select>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          {/* Agrega más opciones de idioma según tu necesidad */}
        </select>
      </div>

      <div className="cart">
        <Link to="/carrito">Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;
