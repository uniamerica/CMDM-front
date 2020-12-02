import React from 'react';
import '../styles/Ajuda.css';
import Header from '../components/Header/Header';


function Ajuda(){
    return(

        <div className="ajuda">
            <Header/>      
            <h1>ONDE PROCURAR AJUDA?</h1>     
            <div className="cntaj">
                <p> De acordo com a Lei Maria da Penha, violência doméstica é qualquer ação ou omissão baseada no gênero mulher, que lhe cause algum dano físico, moral ou patrimonial, sofrimento sexual ou morte.</p>
                <p>Para entrar em contato ligue: CREAS JD.POLO CENTRO - (45) 3572-6474</p>
            
                <p>O CRAM e um equipamento público om serviços oferecidos para mulheres acima de 18 anos,
                    fornecendo atendimentos psicossociais e orientações jurídicas.</p>
                <p>Para entrar em contato ligue: CRAM JD.POLO CENTRO - 0800 643 8111</p>
                    
                <p>O CRAS de Foz do Iguaçu, atende a população em situação de risco e vulnerabilidade social,
                    e promove o acesso aos direitos e o fortalecimento dos vínculos familiares.</p>
                <p>Para entrar em contato ligue:</p>
                <p>CRAS NORTE – (45) 3901-3268 <br/>
                CRAS NORDESTE – (45) 3901-3271<br/>
                CRAS LESTE – (45) 3901-3273<br/>
                CRAS OESTE – (45) 3527-7206<br/>
                CRAS SUL – (45) 3901-3260</p> <br/>

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