import React from 'react'
import Animacao from '../components/Home/Animacao.jsx'
import ImgHome from '../components/Home/ImgHome.jsx'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer.jsx'

function Home(){
    return(
        <div>
          <Header/>
          <ImgHome/>
          <Footer/>
        </div>
    );
}

export default Home;