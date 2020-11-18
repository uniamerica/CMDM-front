import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Ajuda from './components/Ajuda/Ajuda.jsx';
import Home from './pages/Home.jsx';
import Social from './pages/Social.jsx';
import Contato from './pages/Contato.jsx'


=======
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Ajuda from './pages/Ajuda';
import Social from './pages/Social';
import Relatos from './pages/Relatos';
import Contatos from './pages/Contatos';
import Footer from './components/Footer/Footer.jsx';
>>>>>>> 6905c0bea31f8f5a5ba298a563a58cf01c687f9c

function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Ajuda" exact={true} component={Ajuda}/>
          <Route path="/Social" exact component={Social}/>
          <Route path="/Contato" exact component={Contato}/>
       </Switch>
=======
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/social"  component={Social}/>
          <Route path="/Ajuda" component={Ajuda}/>
          <Route path="/Relatos"  component={Relatos}/>
          <Route path="/Contatos"  component={Contatos}/>
        </Switch>
>>>>>>> 6905c0bea31f8f5a5ba298a563a58cf01c687f9c
      </BrowserRouter>
      <Footer />
    </div>
  );
} 

export default App;
