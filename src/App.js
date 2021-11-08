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
import Admin from './pages/Admin.jsx'
import RecSenha from "./pages/RecSenha";
import Cadstro from './pages/Cadastro';
import RecSenha from "./pages/RecSenha";

import { AuthProvider } from './Context/AuthContext';



function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>     
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/social"  component={Social}/>
            <Route path="/Ajuda" component={Ajuda}/>
            <Route path="/Relatos"  component={Relatos}/>
            <Route path="/Relatar" component={Relatar}/>
            <Route path="/Contatos"  component={Contatos}/>
            <Route path="/Definition"  component={Definition}/>
            <Route path="/RecSenha" component={RecSenha}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Admin" component={Admin}/>
            <Route path="/Cadastro" component={Cadstro}/>


          </Switch>
        </AuthProvider> 
      </BrowserRouter>
     <Footer/>
    </div>
  );
} 

export default App;
