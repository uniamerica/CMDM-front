import React from 'react';
import '../styles/Menu.css';




function Nav() {
  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3">
    <div class="container">
        <a class="navbar-brand text-primary" href="index.html">Juntos contra a Violência Doméstica</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home <span class="sr-only">(Página atual)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Relatos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Prucurar Ajuda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contato</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">O que é violência doméstica?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">(HOME)</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Social</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  </div>

  );
}

export default Nav;
