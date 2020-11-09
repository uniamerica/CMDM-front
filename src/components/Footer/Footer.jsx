import React from 'react'; 
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
    
           <div className= "container">
                  <h5>COMO PROCURAR AJUDA?</h5>
                  <p>De acordo com a Lei Maria da Penha, violência doméstica é qualquer ação ou omissão baseada no <br/>
                     gênero mulher, que lhe cause algum dano físico, moral ou patrimonial, sofrimento sexual ou morte.</p>
                  <p>
                    Para denunciar, você pode:<br />
                    Entrar em contato com o serviço de informações e denúncia da Central de Atendimento a Mulher, <br/> 
                    ligando no 180.<br />
                    Em casos de emergência, é necessário ligar para a polícia no número 190.<br />
                    Para contatar o que se pode dizer um “pronto socorro” dos direitos humanos, que atentem casos de <br/>
                     violação dos mesmos, disque 100.<br />
                    O CRAS atende a população em situação de risco e vulnerabilidade social e promove o acesso aos <br/>
                    direitos e o fortalecimento dos vínculos familiares.
                    </p>
            </div>
            <div className="container2">
                <h5>ONDE PROCURAR AJUDA?</h5>
                <p><strong>Foz do Iguaçu</strong></p>
                <p><strong>CRAS NORTE </strong>(45) 3901-3268</p>
                <p><strong>CRAS NORDESTE </strong> (45) 3901-3271</p>
                <p><strong>CRAS LESTE </strong> (45) 3901-3273</p>
                <p><strong>CRAS OESTE</strong>  (45) 3527-7206</p>
                <p><strong>CRAS SUL</strong>(45) 3901-3260</p>
                
            </div>
            
        </div>
                
    );
}          
    


export default Footer;
