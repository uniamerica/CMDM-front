import React from 'react';
import '../styles/Contatos.css';
import Header from '../components/Header/Header.jsx';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Titulo from '../components/Relatos/Titulo'

function Contatos() {
return (
    <div >
        <Header/>

            <div className="ajuste-titulo"><Titulo titulo="CONTATO" text="Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.
            Não se preocupe seus dados não serão divulgados junto com o seu depoimento. Envie seu depoimento."/></div>

            <div className="principal">
                <div className="containerContato">
                    
                    <form action="Mensagem" className="form-contato">
                        
                        <div className="formulario">

                            <div className="form1">
                                <label className="labelContato" for="name">Nome</label>
                                <input type="text" name="name" placeholder="Maria da Silva"/>
                            </div>
                            <div className="form1-email">
                                <label className="labelContato" for="email" >E-mail</label>
                                <input type="email" name="email" placeholder="mariadasilva@email.com"/>
                            </div>
                        </div>
                        <br/>
                        <div  className="form2-margem">
                            <div className="form2">
                                <label className="labelContato" for="subject">Assunto</label>
                                <input type="text" name="subject" placeholder="Assunto"/>
                            </div>                            
                        </div>
                        <div  className="form2-margem">
                            <div className="form2">
                                <label className="labelContato" for="message">Mensagem</label>
                                <textarea className="mensagem" type="text" name="message" rows="2"/>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );

}

export default Contatos;