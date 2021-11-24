import React, {useState} from 'react';
import '../styles/Contatos.module.css';
import Header from '../components/Header/Header.jsx';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import Checkbox from '../components/Checkbox/checkbox.js';
import Titulo from '../components/Relatos/Titulo';
import api from '../api/api';

function Contatos() {
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [message, setMessage] = useState("")
        const [subject, setSubject] = useState("")
    
        function handleSubmit(e){
    
            const envioEmail = {
                name: name,
                email: email,
                message: message,
                subject: subject
            }
    
            api.post('/mail', envioEmail)
    
            
        } 
    
        const handleChangeName = (e) => {
            setName(e.target.value);
        }
        
        const handleChangeEmail = (e) => {
            setEmail(e.target.value);
        } 
    
        const handleChangeMessage = (e) => {
            setMessage(e.target.value);
        }
        const handleChangeSubject = (e) => {
            setSubject(e.target.value);
        }
return (
    <div >
        <Header/>

            <div className={'{$styles.ajuste-titulo}'}><Titulo titulo="CONTATO" text="Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.
            Não se preocupe seus dados não serão divulgados junto com o seu depoimento. Envie seu depoimento."/></div>

            <div className={'{$styles.principal}'}>
                <div className={'{$styles.containerContato}'}>
                    
                    <form onSubmit={handleSubmit} action="Mensagem" className={'{$styles.form-contato}'}>
                        
                        <div className={'{$styles.formulario}'}>
                            
                            <div className={'{$styles.form1}'}>
                                <label className={'{$styles.labelConntato}'} for="name">Nome</label>
                                <input type="text" name="name"  placeholder="Maria da Silva" id="name" data-idtest={'nameEmailTest'} onChange={handleChangeName}/>
                            </div>
                            <div className={'{$styles.form1-email}'}>
                                <label className={'{$styles.labelContato}'} for="email" >E-mail</label>
                                <input type="email" name="email" placeholder="mariadasilva@email.com" id="email" data-idtest={'emailEmailTest'} onChange={handleChangeEmail}/>
                            </div>
                        </div>
                        <br/>
                        <div  className={'{$styles.form2-margem}'}>
                            <div className={'{$styles.form2}'}>
                                <label className={'{$styles.labelContato}'} for="subject">Assunto</label>
                                <input type="text" name="subject" placeholder="Assunto" id="subject" data-idtest={'subjectEmailTest'} onChange={handleChangeSubject}/>
                            </div>                            
                        </div>
                        <div  className={'{$styles.form2-margem}'}>
                            <div className={'{$styles.form2}'}>
                                <label className={'{$styles.labelContato}'} for="message">Mensagem</label>
                                <textarea className={'{$styles.mensagem}'} type="text" name="message" rows="2" id="message" data-idtest={'messageEmailTest'} onChange={handleChangeMessage}/>
                            </div>
                        </div>
                        
                        <div>
                            <div className={'{$styles.form-check}'}>
                                <Checkbox className={'{$styles.check}'}/>
                                <label className={'{$styles.check}'} for="checkbox">Aceito publicar meu depoimento</label>
                            </div>
                            <input type="submit" value="Enviar "/>
                        </div>
                       
                    </form>
                </div>
                <div className={'{$styles.telefones}'}>
                    <ul className={'{$styles.ulContato}'}>
                        <li>                       
                            <i className="fa fa-phone"></i>   
                            <p className={'{$styles.pContato}'}> CRAS NORTE    – (45) 3901-3268 </p>
                        </li>
                        <li>
                            <i className="fa fa-phone"> </i>
                            <p className={'{$styles.pContato}'}>CRAS NORDESTE – (45) 3901-3271</p>
                        </li>
                        <li>
                            <i className="fa fa-phone"></i>
                            <p className={'{$styles.pContato}'}> CRAS LESTE    – (45) 3901-3273  </p>
                                                      
                        </li>
                        <li>
                            <i className="fa fa-phone"></i> 
                            <p className={'{$styles.pContato}'}>CRAS OESTE    – (45) 3527-7206</p>
                                                       
                        </li>
                        <li>
                            <i className="fa fa-phone"> </i>
                            <p className={'{$styles.pContato}'}>CRAS SUL      – (45) 3901-3260</p>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
);

}
export default Contatos;