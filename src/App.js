import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Ajuda from './pages/Ajuda.jsx';
import Home from './pages/Home.jsx';
import Social from './pages/Social.jsx';
import Contatos from './pages/Contatos.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Ajuda" exact={true} component={Ajuda}/>
          <Route path="/Social" exact component={Social}/>
          <Route path="/Contatos" exact component={Contatos}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
} 

export default App;
