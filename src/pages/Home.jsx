import React from 'react'
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