import { Button } from 'bootstrap'
import React from 'react'
import Header from '../components/Header/Header'

import styles from '../styles/Cadastro.module.css'

export default function Cadstro() {
    return (
        <>
            <Header />
            <div className={styles.formCadastro}>
                <form>
                    <div className={styles.formField}>
                        <label>Nome completo</label>
                        <input id="name" type="text" name="name" placeholder="Maria da Penha"></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Email</label>
                        <input id="mail" type="text" name="mail" placeholder="maria@email.com"></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Telefone</label>
                        <input id="phone" type="text" name="phone" placeholder="(DDD) 99999-0000"></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Data de nascimento</label>
                        <input id="birth" type="text" name="bith" placeholder="01/01/1990"></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Nome de usuário</label>
                        <input id="username" type="text" name="username" placeholder="MariaPenha123"></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Senha</label>
                        <input id="password" type="text" name="password" placeholder="************"></input>
                    </div>
                    <button id="cadastroSubmit" type="submit" className={styles.submit}>Cadastrar-se</button>
                </form>
            </div>
        </>
    )
}