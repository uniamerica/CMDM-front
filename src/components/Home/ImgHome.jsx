import React from 'react';
import '../Home/ImgHome.css';
import Footer from '../Footer/Footer.jsx';


function ImgHome(){
    return(
        <div className="home_img">
            <img src={require("../../img/img1.jpg")} alt="Home page imagem"></img>
            <button href="/" className="link_definition"><h1><strong>O QUE É VIOLÊNCIA DOMÉSTICA?</strong></h1></button>
            <div className="effect_phase">
                <h3>Defenda sua vida, lute por sua independência, busque sua felicidade e aprenda a se amar!</h3>
            </div>
            <Footer />
        </div>
    );
}

export default ImgHome;