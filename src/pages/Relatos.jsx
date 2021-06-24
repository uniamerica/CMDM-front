import React from 'react'
import Header from '../components/Header/Header'
import Titulo from '../components/Relatos/Titulo'
import '../components/Relatos/Relatos.css'
import Cards from '../components/Relatos/Cards'

function Relatos(){
    return(
        <div>
            <Header/>
            <div className="container1">
                <Titulo titulo="RECONHECENDO A VIOLÊNCIA" text="A agressão física nunca é o primeiro sinal no ciclo da violência
                doméstica, abaixo segue alguns depoimentos de pessoas alvo de 
                agressões. Visando que motive as vítimas a denunciarem seus 
                agressores."/>
                <div className="container">
                    <Cards/>
                </div>
            </div>
            
        </div>
    )
}

export default Relatos;