import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Social from '../src/pages/Social.jsx'
import Relatos from './pages/Relatos'
import Ajuda from './pages/Ajuda';
import Home from './pages/Home';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Home" exact={true} component={Home}/>
          <Route path="/social" exact component={Social}/>
          <Route path="/Ajuda" exact component={Ajuda}/>
          <Route path="/Relatos" exact component={Relatos}/>
        </Switch>
      </BrowserRouter>
  
    </div>
  );
} 


export default App;
