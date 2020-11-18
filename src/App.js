import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Ajuda from './components/Ajuda/Ajuda.jsx';
import Home from './pages/Home.jsx';
import Social from './pages/Social.jsx';
import Contato from './pages/Contato.jsx'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Ajuda" exact={true} component={Ajuda}/>
          <Route path="/Social" exact component={Social}/>
          <Route path="/Contato" exact component={Contato}/>
       </Switch>
      </BrowserRouter>
  
    </div>
  );
} 


export default App;
