import React from 'react';
import '../styles/Contatos.css';
import Header from '../components/Header/Header.jsx';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import Checkbox from '../components/Checkbox/checkbox.js';


function Contatos() {
return (
    <div >
        <Header/>
       
            <h1 className="h1">Contato</h1>
            <div className="principal">
                <div className="containerContato">
                    <p className="pContato">
                        Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.<br/>
                        Não se preocupe seus dados não serão divulgados junto com o seu depoimento.<br/>
                        Envie seu depoimento.
                    </p>
                    <form action="Mensagem">
                        
                        <div className="formulario">
                            
                            <div className="form1">
                                <input type="text" name="name" placeholder="Maria da Silva"/>
                                <label className="labelContato" for="name">Nome</label>
                            </div>
                            <div className="form1">
                                <input type="email" name="email" placeholder="mariadasilva@email.com"/>
                                <label className="labelContato" for="email" >E-mail</label>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <div className="form2">
                                <input type="text" name="subject" placeholder="Assunto"/>
                                <label className="labelContato" for="subject">Assunto</label>
                            </div>                            
                        </div>
                        <div>
                            <div className="form2">
                                <textarea className="mensagem" type="text" name="message" rows="2"/>
                                <label className="labelContato" for="message">Mensagem</label>
                            </div>
                        </div>
                        <input type="submit" value="Enviar "/>
                        <div>
                            <div className="formulario">
                                <Checkbox className="check"/>
                                <label className="check"for="checkbox">Aceito publicar meu depoimento</label>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div className="telefones">
                    <ul className="ulContato">
                        <li>                       
                            <i className="fa fa-phone"></i>   
                            <p className="pContato"> CRAS NORTE    – (45) 3901-3268 </p>
                        </li>
                        <li>
                            <i className="fa fa-phone"> </i>
                            <p className="pContato">CRAS NORDESTE – (45) 3901-3271</p>
                        </li>
                        <li>
                            <i className="fa fa-phone"></i>
                            <p className="pContato"> CRAS LESTE    – (45) 3901-3273  </p>
                                                      
                        </li>
                        <li>
                            <i className="fa fa-phone"></i> 
                            <p className="pContato">CRAS OESTE    – (45) 3527-7206</p>
                                                       
                        </li>
                        <li>
                            <i className="fa fa-phone"> </i>
                            <p className="pContato">CRAS SUL      – (45) 3901-3260</p>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
);

}
export default Contatos;