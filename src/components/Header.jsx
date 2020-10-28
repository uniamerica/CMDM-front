import React from 'react';
import '../styles/Header.css';

function Header(){
    return(
        <nav class="nav-bar">
            <ul>
                <li>
                    <a class="nav-bar item" href="Home.html">Home</a>
                </li>
                <li>
                    <a class="nav-bar item" href="relatos.html">Relatos</a>
                </li>
                <li>
                    <a class="nav-bar item" href="ajuda.html">Procurar Ajuda</a>
                </li>
                <li>
                    <a class="nav-bar item" href="contato.html">Contato</a>
                </li>
                <li>
                    <a class="nav-bar item" href="definition.html">O que é violência doméstica</a>
                </li>
                <li>
                    <a class="nav-bar item" href="social.html">Social</a>
                </li>
            </ul>
        </nav>
    );
}
export default Header;