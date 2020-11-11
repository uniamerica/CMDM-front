import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header.jsx';
import Social from './pages/Social';
import Footer from './components/Footer/Footer.jsx';
import Ajuda from './components/Ajuda/Ajuda';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Switch>
            <Route path= "/" exact component= {Home} />
            <Route path= "/Social" exact component= {Social} />
      </Switch>
      </BrowserRouter>
      <Footer />
      </div>
  );
} 


export default App;
