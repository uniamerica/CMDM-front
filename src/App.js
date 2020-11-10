import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Ajuda from './components/Ajuda/Ajuda';
import Home from './components/Home/Animacao';


function App() {
  return (
    <div>
      <Header />
      <Ajuda />
      <Footer />
    </div>
  );
} 


export default App;
