import React from 'react';
import '../components/Nav.css'




function Nav() {
  return (
    <nav>
        <ul>
            <li className="active-link">
                <button href="#">Home</button>
            </li>
            <li>
                <button href="#">Relatos</button>
            </li>
            <li>
                <button href="#">Procurar Ajuda</button>
            </li>
            <li>
                <button href="#">Contato</button>
            </li>
            <li>
                <button href="#">Social</button>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
