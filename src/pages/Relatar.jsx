import React from 'react'
import Header from '../components/Header/Header'
import Titulo from '../components/Relatos/Titulo'
import { useState } from 'react'
import '../components/Relatar/Relatar.css'

import api from '../api/api'


function Relatar(){

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [relato, setRelato] = useState("")

    function handleSubmit(e){

        const novoRelato = {
            title: titulo,
            description: descricao,
            depoiment: relato,
            userId: 1
            // pendente: true
        }

        api.post('/reports', novoRelato)

        e.preventDefault()
        
    } 

    const handleChangeTitulo = (e) => {
        setTitulo(e.target.value);
    }
    
    const handleChangeDescricao = (e) => {
        setDescricao(e.target.value);
    } 

    const handleChangeRelato = (e) => {
        setRelato(e.target.value);
    }


    return(
        <div>
            <Header/>
            <Titulo titulo="COMPARTILHE SUA EXPERIÊNCIA" text="Compartilhe sua experiência para que,
            por meio de seu relato, outras mulheres se intiguem a procurar ajuda para sair dessa situação.
            Seu relato pode ser publicado anonimante, seu colocar sua identidade em risco."/>
            <form onSubmit={handleSubmit}>
                <div className="relatar-page">
                    <div className="form-relato">
                        <label className="form-nome inpt">
                            Titulo:
                            <input id="titulo" type="text" onChange={handleChangeTitulo} value={titulo}/>
                        </label>
                        <label className="form-email inpt">
                            Descrição:
                            <input id="descricao" type="text" onChange={handleChangeDescricao} value={descricao}/>
                        </label>
                        <label className="form-relatar">
                            Relato:
                            <textarea cols="96" rows="10" type="text" onChange={handleChangeRelato} value={relato}/>
                        </label>
                        <div className="chbox-form">
                            <input type="checkbox"/>
                            <p>Publicar relato anonimamente (Se essa opção estiver marcada, seus dados pessoais não serão publicados junto ao relato).</p>
                        </div>
                        <input id="sumbit" className="submit-btn" type="submit"/>
                    </div>
                </div>    
            </form>

        </div>
    )
}

export default Relatar;