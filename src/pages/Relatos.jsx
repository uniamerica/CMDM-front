import React from 'react'
import Header from '../components/Header/Header'
import Titulo from '../components/Relatos/Titulo'
import '../components/Relatos/Relatos.css'
import Card from '../components/Relatos/Card'

function Relatos(){
    return(
        <div>
            <Header/>
            <div className="container1">
                <Titulo/>
                <div className="cards">
                    <Card text="Relato 1" phase="Nunca tive problemas financeiros antes de me envolver com um parasita sociopata."/>
                    <Card text="Relato 2" phase="Tudo começou quando eu tinha 15 anos, aaa que saudade."/>
                    <Card text="Relato 3" phase="Depois de 1 ano de divorcio do meu primeiro casamento, conheci um homem pelo qual me apaixonei."/>
                </div>
            </div>
        </div>
    )
}

export default Relatos;