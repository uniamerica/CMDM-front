import React from 'react'; 
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faInstagram, faTwitter); 

                         

function Footer(){
    return(
     
        <div className="footer">
            <div className="redes">
                <h4>Conecte-se conosco em nossas redes sociais!</h4>
                <div className="icones">             
                    <FontAwesomeIcon className="rede" icon={['fab', 'facebook-f']} />               
                    <FontAwesomeIcon className="rede" icon={['fab', 'instagram']} />                
                    <FontAwesomeIcon className="rede" icon={['fab', 'twitter']} />
                </div>
            </div>
            <div className="containers">
                <div className= "container01">
                    <h5>COMO PROCURAR AJUDA?</h5>
                    <p>De acordo com a Lei Maria da Penha, violência doméstica é qualquer ação ou omissão baseada no
                        gênero mulher, que lhe cause algum dano físico, moral ou patrimonial, sofrimento sexual ou morte.</p>
                    <p>Para denunciar, você pode:<br/>
                    Entrar em contato com o serviço de informações e denúncia da Central de Atendimento a Mulher,
                    ligando no 180.<br/>
                    Em casos de emergência, é necessário ligar para a polícia no número 190.<br/>
                    Para contatar o que se pode dizer um “pronto socorro” dos direitos humanos, que atentem casos de
                    violação dos mesmos, disque 100.<br/>
                    O CRAS atende a população em situação de risco e vulnerabilidade social e promove o acesso aos
                    direitos e o fortalecimento dos vínculos familiares.
                    </p>
                </div>
                <div className="container2Footer">
                    <h5>ONDE PROCURAR AJUDA?</h5>
                    <p>Foz do Iguaçu</p>
                    <p>CRAS NORTE (45) 3901-3268</p>
                    <p>CRAS NORDESTE (45) 3901-3271</p>
                    <p>CRAS LESTE (45) 3901-3273</p>
                    <p>CRAS OESTE (45) 3527-7206</p>
                    <p>CRAS SUL (45) 3901-3260</p>
                </div>
                
            </div>

            <div className="copy">
               <p>© 2020 Copyright</p> 
            </div>
            
        </div>
                
    );
}          
    


export default Footer;
