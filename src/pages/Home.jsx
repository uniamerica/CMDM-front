import React from 'react';
import Animacao from '../components/Home/Animacao.jsx';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <Animacao />
            <Link to= '/Social'>Social</Link>
        </div>
    );
}

export default Home;