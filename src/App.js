import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Ajuda from './pages/Ajuda';
import Social from './pages/Social';
import Relatos from './pages/Relatos';
import Contatos from './pages/Contatos';
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
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
} 

export default App;
