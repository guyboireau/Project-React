import React from 'react';
import './Header.module.css';

function Header() {
  return (
    <header >
      <nav>
        <ul>
          <li>Accueil</li>
          <li>À propos</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <input type="text" placeholder="Recherche" />
        <button>Rechercher</button>
      </div>
    </header>
  );
}

export default Header;
