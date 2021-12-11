import React, {useState} from 'react';
import Header from '../components/Header/Header.jsx';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import Checkbox from '../components/Checkbox/checkbox.js';
import Titulo from '../components/Relatos/Titulo';
import api from '../api/api';
import axios from 'axios';
import styles from '../styles/Contatos.module.css';
import emailjs from'emailjs-com';



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
            const USER_ID = 'user_R6Fr3hkp10QVd9Hyrl9OP';
            const TEMPLATE_ID= 'template_bjcd15r';
            const SERVICE_ID= 'cmdmProjeto';
            event.preventDefault(); 
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
            .then((result) => {
                alert("Mensagem enviada a Central CMDM!", result.text);
                window.location.reload();
            },
            (error) => {
                alert("ERRO! ", error.text);
            });
        }
    
return (
    <div className={styles.container}>
        <Header/>
        <Titulo titulo="CONTATO" text="Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.
        Não se preocupe seus dados não serão divulgados junto com o seu depoimento. Envie seu depoimento."/>
            
            <form onSubmit={handleSubmit}>
            
                <div className={styles.formulario}>
                    
                    <div className={styles.form1}>
                        <label className={styles.labelContato} for="name">Nome</label>
                        <input type="text" name="name" data-testid="nameInput" placeholder="Maria da Silva" value={newContato.name} onChange={handleChangeNome}/>
                    </div>
                    <div className={styles.form1}>
                        <label className={styles.labelContato} for="email" >E-mail</label>
                        <input type="email" name="email" data-testid="emailInput" placeholder="mariadasilva@email.com" value={newContato.email} onChange={handleChangeEmail}/>
                    </div>
                    <div className={styles.form1}>
                        <label className={styles.labelContato} for="subject">Assunto</label>
                        <input type="text" name="subject"  data-testid="subjectInput" placeholder="Assunto" value={newContato.subject} onChange={handleChangeSubject}/>
                    </div>                            
                    <div className={styles.form1}>
                        <label className={styles.labelContato} for="message">Mensagem</label>
                        <input className={styles.mensagem} data-testid="messageInput" placeholder="Sua mensagem" type="text" name="message" value={newContato.message} onChange={handleChangeMessage} rows="2"/>
                    </div>

                </div>
                
                <div className={styles.formCheck}>
                    <Checkbox className={styles.check}/>
                    <label classname={styles.label} className={styles.check} for="checkbox">Aceito publicar meu depoimento</label>
                </div>

                <button className={styles.buttonSubmit} type='submit'>Enviar</button>
            
            </form>                    
        
    </div>
    
);

}