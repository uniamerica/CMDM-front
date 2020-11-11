import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Social from '../src/pages/Social.jsx'
import Ajuda from './components/Ajuda/Ajuda';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
} 


export default App;
