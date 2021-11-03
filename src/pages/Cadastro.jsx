import React, { useState } from 'react'
import Header from '../components/Header/Header'

import styles from '../styles/Cadastro.module.css'

export default function Cadstro() {
    const [user, setUser] = useState({})

    function handleChangeNome(props) {
        setUser({...user,
            name: props.target.value
        })
    }
    
    function handleChangeEmail(props) {
        setUser({...user,
            email: props.target.value
        })
    }
    
    function handleChangePhone(props) {
        setUser({...user,
            phone: props.target.value
        })
    }
    
    function handleChangeBirth(props) {
        setUser({...user,
            birth: props.target.value
        })
    }
    
    function handleChangeUsername(props) {
        setUser({...user,
            username: props.target.value
        })
    }
    
    function handleChangePassword(props) {
        setUser({...user,
            password: props.target.value
        })
    }

    function handleSubmit(event) {
        console.log(user)

        event.preventDefault();
    }

    return (
        <>
            <Header />
            <div className={styles.formCadastro}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label>Nome completo</label>
                        <input id="name" type="text" name="name" placeholder="Maria da Penha" value={user.name} onChange={handleChangeNome}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Email</label>
                        <input id="mail" type="text" name="mail" placeholder="maria@email.com" value={user.email} onChange={handleChangeEmail}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Telefone</label>
                        <input id="phone" type="text" name="phone" placeholder="(DDD) 99999-0000" value={user.phone} onChange={handleChangePhone}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Data de nascimento</label>
                        <input id="birth" type="text" name="bith" placeholder="01/01/1990" value={user.birth} onChange={handleChangeBirth}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Nome de usuário</label>
                        <input id="username" type="text" name="username" placeholder="MariaPenha123" value={user.username} onChange={handleChangeUsername}></input>
                    </div>
                    <div className={styles.formField}>
                        <label>Senha</label>
                        <input id="password" type="text" name="password" placeholder="************" value={user.password} onChange={handleChangePassword}></input>
                    </div>
                    <button id="cadastroSubmit" type="submit" className={styles.submit}>Cadastrar-se</button>
                </form>
            </div>
        </>
    )
}