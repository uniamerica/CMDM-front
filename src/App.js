import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Social from '../src/pages/Social.jsx'
import Home from '../src/pages/Home.jsx'
import Ajuda from './components/Ajuda/Ajuda';

function App() {
  return (
    <div>
      <Header />
      <Social />
      <Footer />
    </div>
  );
} 


export default App;
