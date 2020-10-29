import React from 'react';
import '../Home/Img_home.css';


function Img_home(){
    return(
        <div className="home_img">
            <img src={require("../../img/img1.jpg")} alt="Home page imagem"></img>
            <button href="/" className="link_definition"><h1><strong>O QUE É VIOLÊNCIA DOMÉSTICA?</strong></h1></button>
            <div className="effect_phase">
                <h3>Defenda sua vida, lute por sua independência, busque sua felicidade e aprenda a se amar!</h3>
            </div>
        </div>
    );
}

export default Img_home;