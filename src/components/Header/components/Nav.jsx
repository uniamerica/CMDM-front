import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Nav.css'


function Nav() {
  return (
    <nav>
        <ul>
            <li className="links">
                <Link className="each-link" to="/Home">Home</Link>
            </li>
            <li>
                <Link className="each-link" to="/Relatos">Relatos</Link>
            </li>
            <li>
                <Link className="each-link" to="/Ajuda">Ajuda</Link>
            </li>
            <li>
                <Link className="each-link" to="/Contato">Contato</Link>
            </li>
            <li>
                <Link className="each-link" to="/Social">Social</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
