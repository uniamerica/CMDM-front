import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Ajuda from './pages/Ajuda.jsx';
import Home from './pages/Home.jsx';
import Social from './pages/Social.jsx';
import Contatos from './pages/Contatos.jsx';
import Relatos from './pages/Relatos.jsx';
import Relatar from './pages/Relatar.jsx'
import Definition from './pages/Definition.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './pages/Login.jsx';

import Provider from './components/store/Provider'
import RoutesPrivate from './components/Routes/Private/Private';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/social"  component={Social}/>
            <Route path="/Ajuda" component={Ajuda}/>
            <Route path="/Relatos"  component={Relatos}/>
            <RoutesPrivate path="/Relatar" component={Relatar}/>
            <Route path="/Contatos"  component={Contatos}/>
            <Route path="/Definition"  component={Definition}/>
            <Route path="/Login" component={Login}/>
          </Switch>
        </Provider>
      </BrowserRouter>
     <Footer/>
    </div>
  );
} 

export default App;
