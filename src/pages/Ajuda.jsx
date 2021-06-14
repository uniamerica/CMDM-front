import React from 'react';
import '../styles/Ajuda.css';
import Header from '../components/Header/Header'
import Titulo from '../components/Relatos/Titulo'


function Ajuda(){
    return(

        <div className="ajuda">
            <Header/>      
            <Titulo titulo="ONDE PROCURAR AJUDA?"/>    
            <div className="cntaj">
                <p> De acordo com a Lei Maria da Penha, violência doméstica é qualquer ação ou omissão baseada no gênero mulher, que lhe cause algum dano físico, moral ou patrimonial, sofrimento sexual ou morte.</p>
                <p>Para denunciar, você pode:</p>
                <p>Entrar em contato com o serviço de informações e denúncia da Central de Atendimento a Mulher, <strong>ligando no 180.</strong></p>
                <p>Em casos de emergência, é necessário ligar para a polícia no número 190.</p>
                <p>Para contatar o que se pode dizer um “pronto socorro” dos direitos humanos, que atentem casos de violação dos mesmos, <strong>disque 100.</strong></p>
                <p>O<strong>CRAS</strong> atende a população em situação de risco e vulnerabilidade social e promove o acesso aos direitos e o fortalecimento dos vínculos familiares.</p>
                <p>Para entrar em contato ligue:</p>
                <ul>
                    <li>CRAS NORTE – (45) 3901-3268</li>
                    <li>CRAS NORDESTE – (45) 3901-3271</li>
                    <li>CRAS LESTE – (45) 3901-3273</li>
                    <li>CRAS OESTE – (45) 3527-7206</li>
                    <li>CRAS SUL – (45) 3901-3260</li>
                </ul>

                <p>Em casos de emergência,  ligue para a polícia DISQUE 190.</p>
                <p>Para entrar em contato com o serviço de informações e denúncia da Central de Atendimento a Mulher,
                    DISQUE 180.</p>
                <p>Para contatar “pronto socorro” dos direitos humanos, 
                    que atendem casos de violação dos mesmos, DISQUE 100</p>
            </div>
            
        </div>
    );
}

export default Ajuda;