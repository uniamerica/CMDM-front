import React from 'react';
import '../styles/Nav.css';




function Nav() {
  return (
    <nav>
        <ul>
            <li className="active-link">
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">Relatos</a>
            </li>
            <li>
                <a href="/">Prucurar Ajuda</a>
            </li>
            <li>
                <a href="/">Contato</a>
            </li>
            <li>
                <a href="/">O que é violência doméstica?</a>
            </li>
            <li>
                <a href="/">Social</a>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
