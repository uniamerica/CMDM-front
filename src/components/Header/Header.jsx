import React from 'react';
import Nav from './components/Nav'
import Logo from './components/Logo.jsx'

import '../Header/Header.css'


function Header() {
  return (
  	<div className="mainheader">
        <Logo/>
        <Nav/>
    </div>
  );
}

export default Header;
