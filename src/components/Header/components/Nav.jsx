import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Nav.css'


function Nav() {
  return (
    <nav>
        <ul>
            <li className="links">
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Relatos">Relatos</Link>
            </li>
            <li>
                <Link to="/Ajuda">Ajuda</Link>
            </li>
            <li>
                <Link to="/Contatos">Contato</Link>
            </li>
            <li>
                <Link to="/Social">Social</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
