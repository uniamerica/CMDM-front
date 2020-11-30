import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Ajuda from './pages/Ajuda.jsx';
import Home from './pages/Home.jsx';
import Social from './pages/Social.jsx';
import Contatos from './pages/Contatos.jsx';
import Relatos from './pages/Relatos'
import Definition from './pages/Definition'
import Footer from './components/Footer/Footer.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/social"  component={Social}/>
          <Route path="/Ajuda" component={Ajuda}/>
          <Route path="/Relatos"  component={Relatos}/>
          <Route path="/Contatos"  component={Contatos}/>
          <Route path="/Definition"  component={Definition}/>
        </Switch>
      </BrowserRouter>
     <Footer/>
    </div>
  );
} 

export default App;
