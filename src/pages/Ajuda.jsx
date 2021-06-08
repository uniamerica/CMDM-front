import React from 'react';
import '../styles/Ajuda.css';
import Cras from'../img/cras.png'
import Mp from'../img/180.png'
import Police from'../img/pp.jpeg'
import Ps from'../img/ps.png'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Header from '../components/Header/Header'
import Titulo from '../components/Relatos/Titulo'


function Ajuda() {
    return (

        <div className="ajuda">
            <Header/>
            <Titulo titulo="ONDE PROCURAR AJUDA?"/>
            <div className="text-intro">
        <strong><p>De acordo com o art 5° da lei Maria da Penha, a Violência contra a mulher é um padrão de comportamento que envolve um
        tipo específico de violência ou de abuso por parte de uma pessoa, seja companheiro, 
         membros da família ou desconhecidos.</p></strong>
        <p>A violência contra a mulher pode assumir diversos tipos, incluindo abusos físicos,
        verbais, emocionais, económicos, religiosos, reprodutivos e sexuais. Estes abusos podem assumir
        desde formas sutis e coercivas até violação conjugal e abusos físicos violentos como sufocação,
        espancamento, mutilação genital e ataques com ácido que provoquem desfiguração ou morte.
        Os homícidios contra as mulheres incluem o apedrejamento, morte por dote e crimes de honra.</p>
        <strong><p>Se você sofre com algum destes abusos citados acima, procure ajuda e denuncie imediatamente.</p></strong>
            </div>

            <h3 className="AJ">Contatos para Denúncia:</h3>

            <div className="cntaj"> 
                <img src={Cras}/>
                <img src={Mp}/>
                <img src={Ps}/>
                <img src={Police}/>          
            </div>


            <div className="telefones2">
                       
                            <i className="fa fa-phone"></i>
                            <p className="pContato"> CRAS NORTE–(45) 3901-3268 </p>
                      
                            <i className="fa fa-phone"> </i>
                            <p className="pContato">CRAS NORDESTE – (45) 3901-3271</p>
                       
                            <i className="fa fa-phone"></i>
                            <p className="pContato"> CRAS LESTE – (45) 3901-3273 </p>

                        
                            <i className="fa fa-phone"></i>
                            <p className="pContato">CRAS OESTE – (45) 3527-7206</p>

                        
                        
                            <i className="fa fa-phone"> </i>
                            <p className="pContato">CRAS SUL – (45) 3901-3260</p>                    
                </div>
        </div>
    );
}

export default Ajuda;