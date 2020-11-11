import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Ajuda from './components/Ajuda/Ajuda';
import Home from './pages/Home';
import Social from './pages/Social'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Home" exact={true} component={Home}/>
          <Route path="/social" exact component={Social}/>
        </Switch>
      </BrowserRouter>
  
    </div>
  );
} 


export default App;
