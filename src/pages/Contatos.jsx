import React, {useState} from 'react';
import Header from '../components/Header/Header.jsx';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import Checkbox from '../components/Checkbox/checkbox.js';
import Titulo from '../components/Relatos/Titulo';
import api from '../api/api';
import axios from 'axios';
import styles from '../styles/Contatos.modules.css';

export default function Contatos() {
        const [newContato, setNewContato] = useState({})
    
        function handleChangeNome(props) {
            setNewContato({...newContato,
                name: props.target.value
            })
        }
        
        function handleChangeEmail(props) {
            setNewContato({...newContato,
                email: props.target.value
            })
        }
        
        function handleChangeMessage(props) {
            setNewContato({...newContato,
                phone: props.target.value
            })
        }
        
        function handleChangeSubject(props) {
            setNewContato({...newContato,
                birth: props.target.value
            })
        }
        
    
        function handleSubmit(event) {
            axios.post('http://localhost:8080/mail', newContato)
            .then(response =>{
                if(response.data != null){
                    console.log("Enviado");
                }else 
                console.log("Não enviado ne");
            })
            
        }
    
return (
    <div >
        <Header/>

            <div className={styles.ajusteTitulo}><Titulo titulo="CONTATO" text="Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.
            Não se preocupe seus dados não serão divulgados junto com o seu depoimento. Envie seu depoimento."/></div>
            
            <div className={styles.principal}>
                <div className={styles.containerContato}>
                    
                    <form onSubmit={handleSubmit}  className="formContato">
                        
                        <div className={styles.formulario}>
                            
                            <div className={styles.form1}>
                                <label className={styles.labelContato} for="name">Nome</label>
                                <input type="text" name="name" placeholder="Maria da Silva" value={newContato.name} onChange={handleChangeNome}/>
                            </div>
                            <div className={styles.form1}>
                                <label className={styles.labelContato} for="email" >E-mail</label>
                                <input type="email" name="email" placeholder="mariadasilva@email.com" value={newContato.email} onChange={handleChangeEmail}/>
                            </div>
                        </div>
                        <br/>
                        <div  className={styles.form2Margem}>
                            <div className={styles.form2}>
                                <label className={styles.labelContato} for="subject">Assunto</label>
                                <input type="text" name="subject" placeholder="Assunto" value={newContato.subject} onChange={handleChangeSubject}/>
                            </div>                            
                        </div>
                        <div  className={styles.form2Margem}>
                            <div className={styles.form2}>
                                <label className={styles.labelContato} for="message">Mensagem</label>
                                <input className={styles.mensagem} placeholder="Sua mensagem" type="text" name="message" value={newContato.message} onChange={handleChangeMessage} rows="2"/>
                            </div>
                        </div>
                        
                        <div>
                            
                            <div className={styles.formCheck}>
                                <Checkbox className={styles.check}/>
                                <label className={styles.check} for="checkbox">Aceito publicar meu depoimento</label>
                            </div>
                            <input type="submit" value="Enviar "/>
                        </div>
                       
                    </form>
                
                </div>
                
        </div>
        <div className={styles.telefones}>
                    <ul className={styles.ulContato}>
                        <li>                       
                            <i className="fa fa-phone"></i>   
                            <p> CRAS NORTE    – (45) 3901-3268 </p>
                        </li>
                        <li>
                            <i className="fa fa-phone"> </i>
                            <p>CRAS NORDESTE – (45) 3901-3271</p>
                        </li>
                        <li>
                            <i className="fa fa-phone"></i>
                            <p> CRAS LESTE    – (45) 3901-3273  </p>
                                                      
                        </li>
                        <li>
                            <i className="fa fa-phone"></i> 
                            <p>CRAS OESTE    – (45) 3527-7206</p>
                                                       
                        </li>
                        <li>
                            <i className="fa fa-phone"> </i>
                            <p>CRAS SUL      – (45) 3901-3260</p>
                        </li>
                    </ul>
                </div>
    </div>
    
);

}