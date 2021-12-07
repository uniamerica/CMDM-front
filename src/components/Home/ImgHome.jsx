import React from 'react';
import '../Home/ImgHome.css';
import Image from '../../img/HomeBackground.png'


function ImgHome(){
    return(
        <div className="home_img">
            <img src={Image} alt="Home page imagem"></img>
            <div className="effect_phase">
                <a>Defenda sua vida, lute por sua independência, busque sua felicidade e aprenda a se amar!</a>
            </div>
        </div>
    );
}

export default ImgHome;