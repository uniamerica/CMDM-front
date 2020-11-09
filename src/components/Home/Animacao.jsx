import React from 'react'
import './Animacao.css'

function Animacao (){
    return(
        <div>
            <ul className="slider">
                <li>
                    <input type="radio" id="slide1" name="slide" checked></input>
                    <label for="slide1"></label>
                    <img src={require("../../img/img1.jpg")} alt="Home page imagem"></img>
                </li>
                <li>
                    <input type="radio" id="slide2" name="slide"></input>
                    <label for="slide2"></label>
                    <img src={require("../../img/img2.jpg")} alt="Home page imagem"></img>
                </li>
                <li>
                    <input type="radio" id="slide3" name="slide"></input>
                    <label for="slide3"></label>
                    <img src={require("../../img/img3.jpg")} alt="Home page imagem"></img>
                </li>
            </ul>
        </div>
    )
}

export default Animacao;