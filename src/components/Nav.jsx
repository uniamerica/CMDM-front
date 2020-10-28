import React from 'react';
import '../styles/Menu.css';




function Nav() {
  return (
    <div>
 <nav>
    <div>
        <a href="index.html">Juntos contra a Violência Doméstica</a>
        <div>
            <ul>
                <li>
                    <a href="#">Home <span>(Página atual)</span></a>
                </li>
                <li>
                    <a href="#">Relatos</a>
                </li>
                <li>
                    <a href="#">Prucurar Ajuda</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
                <li>
                    <a href="#">O que é violência doméstica?</a>
                </li>
                <li>
                    <a href="#">(HOME)</a>
                </li>
                <li>
                    <a href="#">Social</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  </div>

  );
}

export default Nav;
