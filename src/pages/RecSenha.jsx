import React from 'react';
import Header from '../components/Header/Header';
import Titulo from '../components/Relatos/Titulo';
import '../styles/RecSenha.css';

function Login(){
    return(
        <div className="recuperar">
            <Header />
            <center><Titulo titulo="Recuperar Senha"/></center>
            <div className="recSenha">
                <form method="post">
                    <input name="usuario" type="email" placeholder="email@email.com" required/>
                    <br/>
                    <span className="span"><i> *Um email com sua nova senha será enviado</i></span>
                    <button type="submit">Enviar</button>
                </form>
            </div>

        </div>
    )}
export default Login;