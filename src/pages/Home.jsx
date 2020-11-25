import React from 'react'
import Animacao from '../components/Home/Animacao.jsx'
import ImgHome from '../components/Home/ImgHome.jsx'
import Header from '../components/Header/Header'
import ViolenceTips from '../components/Home/ViolenceTips'


function Home(){
    return(
        <div>
          <Header/>
          <ImgHome/>  
          <ViolenceTips/>    
        </div>
    );
}

export default Home;