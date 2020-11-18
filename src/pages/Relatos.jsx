import React from 'react'
import Header from '../components/Header/Header'
import '../components/Relatos/Relatos.css'

function Relatos(){
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="titulo">
                    <h1>Reconhecendo a Violência</h1>
                    <p>A agressão física nunca é o primeiro sinal no ciclo da violência
                    doméstica, abaixo segue alguns depoimentos de pessoas alvo de 
                    agressões. Visando que motive as vítimas a denunciarem seus 
                    agressores.</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2>Relato 1</h2>
                    </div>
                    <div className="card-body">
                        <p>Nunca tive problemas financeiros antes de 
                        me envolver com um parasita sociopata.</p>
                        <button>Ler mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relatos;