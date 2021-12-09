import React from 'react';
import Header from '../components/Header/Header';
import Titulo from '../components/Relatos/Titulo';
import styles from '../styles/RecSenha.module.css';
import emailjs from'emailjs-com';

function Login(){
    function handleSubmit(event) {
        const USER_ID = 'user_R6Fr3hkp10QVd9Hyrl9OP';
        const TEMPLATE_ID= 'template_g3ezq59';
        const SERVICE_ID= 'cmdmProjeto';
        event.preventDefault(); 
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
        .then((result) => {
            alert("Mensagem enviada a Central CMDM!", result.text);
            window.location.reload();
        },
        (error) => {
            alert("ERRO! ", error.text);
        });
    }
    return(
        <div className="recuperar">
            <Header />
            <center><Titulo titulo="Recuperar Senha"/></center>
            <div className="recSenha">
                <form onSubmit={handleSubmit()}>
                    <input name="usuario" type="email" placeholder="email@email.com" required/>
                    <br/>
                    <span className="span"><i> *Um email com sua nova senha será enviado</i></span>
                    <input className={styles.InputRec} type="submit">Enviar</input>
                </form>
            </div>

        </div>
    )}
export default Login;