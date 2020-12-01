import React from 'react';
import {Link} from 'react-router-dom'
import '../Home/ImgHome.css';


function ImgHome(){
    return(
        <div className="home_img">
            <img src={require("../../img/img1.jpg")} alt="Home page imagem"></img>
            <div className="link_definition">
                <Link className="text-link" to="/Definition"><strong>O que é violência doméstica?</strong></Link>
            </div>
            <div className="effect_phase">
                <a>Defenda sua vida, lute por sua independência, busque sua felicidade e aprenda a se amar!</a>
            </div>
        </div>
    );
}

export default ImgHome;