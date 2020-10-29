import React from 'react';
import Nav from './Nav.jsx'
import Logo from './Logo.jsx'

import '../styles/Header.css'


function Header() {
  return (
  	<div className="mainheader">
        <Logo/>
        <Nav/>
    </div>

  );
}

export default Header;
