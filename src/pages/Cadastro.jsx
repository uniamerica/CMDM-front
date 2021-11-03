import React, { useState } from 'react'
import Header from '../components/Header/Header'

import styles from '../styles/Cadastro.module.css'
import api from '../api/api'

export default function Cadstro() {
    const [newUser, setNewUser] = useState({})

    function handleChangeNome(props) {
        setNewUser({...newUser,
            name: props.target.value
        })
    }
    
    function handleChangeEmail(props) {
        setNewUser({...newUser,
            email: props.target.value
        })
    }
    
    function handleChangePhone(props) {
        setNewUser({...newUser,
            phone: props.target.value
        })
    }
    
    function handleChangeBirth(props) {
        setNewUser({...newUser,
            birth: props.target.value
        })
    }
    
    function handleChangeUsername(props) {
        setNewUser({...newUser,
            username: props.target.value
        })
    }
    
    function handleChangePassword(props) {
        setNewUser({...newUser,
            password: props.target.value
        })
    }

    function handleSubmit(event) {
        api.post('/users', newUser)
    }

    return (
        <>
            {/* <Header /> */}
            <div className={styles.formCadastro}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label>Nome completo</label>
                        <input id="name" type="text" name="name" placeholder="Maria da Penha" value={newUser.name} onChange={handleChangeNome}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Email</label>
                        <input id="mail" type="text" name="mail" placeholder="maria@email.com" value={newUser.email} onChange={handleChangeEmail}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Telefone</label>
                        <input id="phone" type="text" name="phone" placeholder="(DDD) 99999-0000" value={newUser.phone} onChange={handleChangePhone}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Data de nascimento</label>
                        <input id="birth" type="date" name="birth" placeholder="01/01/1990" value={newUser.birth} onChange={handleChangeBirth}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Nome de usuário</label>
                        <input id="username" type="text" name="username" placeholder="MariaPenha123" value={newUser.username} onChange={handleChangeUsername}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Senha</label>
                        <input id="password" type="text" name="password" placeholder="************" value={newUser.password} onChange={handleChangePassword}></input>
                    </div>
                    <button name="submitButton" id="cadastroSubmit" type="submit" className={styles.submit}>Cadastrar-se</button>
                    <a href="/login">
                        Já tem cadastro?
                    </a>
                </form>
            </div>
        </>
    )
}