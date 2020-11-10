import React from 'react'
import './Animacao.css'
import './Animacao.js'

function Animacao (){
    return(
        <div id="items-wrapper">
            <div id="items">
                <div className="item"><img src={require("../../img/img1.jpg")}></img></div>
                <div className="item"><img src={require("../../img/img2.jpg")}></img></div>
                <div className="item"><img src={require("../../img/img3.jpg")}></img></div>
            </div>
        </div>
    )
}

export default Animacao;