import React from 'react'
import Header from '../components/Header/Header'

import '../components/Definition/Definition.css'

function Definition(){
    return(
        <div>
            <Header/>
            <div className="container">
                <h1>O QUE É VIOLÊNCIA DOMÉSTICA?</h1>
                <p className="p">De acordo com o art. 5º da Lei Maria da Penha, violência doméstica e familiar contra a mulher
                é “qualquer ação ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual 
                ou psicológico e dano moral ou patrimonial”.</p>
            </div>
        </div>
    )
}

export default Definition;