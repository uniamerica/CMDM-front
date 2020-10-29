import React from 'react';
import './App.css';
import './styles.css';
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import Social from './pages/Social.jsx';

  function App() {
    return (
      <div>
        <Nav />
        <Footer />
        <Social />
        <Header />      
      </div>  
    );
  } 

export default App;
