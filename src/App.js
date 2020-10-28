<<<<<<< HEAD
import React, { Component } from 'react'
import './styles.css'; 
import header from './components/Header';


class App extends Component{
  render () {
    return (
      <div className="App">
        <header>JSHunt</header>
      </div>
    );
  }
}
=======
import React from 'react';
import './App.css';
import Nav from "./components/Nav.jsx";
import Footer from './components/Footer.jsx';
import Social from './pages/Social.jsx'

function App() {
  return (
    <div>
      <Nav />
    </div>

   
    
  );
} 
>>>>>>> a8f6af3fbf006bb1e6d509804b820d4d353d3e5d

export default App;
