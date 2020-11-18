import React from 'react';
import '../styles/Contato.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';


function Contato() {
return (
    <div>
        <Header/>
        <div>
            <h1>Contato</h1>
                <div>
                    <p>
                        Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.<br/>
                        Não se preocupe seus dados não serão divulgados junto com o seu depoimento.<br/>
                        Envie seu depoimento.
                    </p>
                    <form>
                        <div>
                            <div>
                                <input type="text" name="name" />
                                <label for="name">Nome</label>
                            </div>
                            <div>
                                <input type="mail" name="email" />
                                <label for="email" >E-mail</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="text" name="subject" />
                                <label for="subject">Assunto</label>
                            </div>                            
                        </div>
                        <div>
                            <div>
                                <textarea type="text" name="message" rows="2"/>
                                <label for="message">Mensagem</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" name="aceito" />
                                <label for="checkbox">Aceito publicar meu depoimento</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <ul>
                        <li>
                            <i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class="mb-0">CRAS NORTE – (45) 3901-3268</p>
                        </li>
                        <li>
                            <i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class="mb-0">CRAS NORDESTE – (45) 3901-3271</p>
                        </li>
                        <li>
                            <i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class="mb-0">CRAS LESTE – (45) 3901-3273</p>
                        </li>
                        <li>
                            <i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class="mb-0">CRAS OESTE – (45) 3527-7206</p>
                        </li>
                        <li>
                            <i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class="mb-0">CRAS SUL – (45) 3901-3260</p>
                        </li>
                    </ul>
                </div>
        </div>
        <Footer/>
    </div>
);

}
export default Contato;