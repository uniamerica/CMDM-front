import React from 'react'
import './ViolenceTips.css'


function ViolenceTips(){
    return (
        /**row flex direction */
<div className="ViolenceTips0">
    <div> <h2><strong> Quais são os tipos de violência doméstica? </strong></h2></div>
           <p><strong>A violência doméstica pode ser caracterizada de várias formas:</strong></p>
        <div className="ViolenceTips">
                        <div>
                        <h3 > VIOLÊNCIA PSICOLÓGICA:</h3>
                            <ul className= "Tipos-Violência">
                                <li><strong>- Humilhações</strong></li>
                                <li><strong>- Ameaças</strong></li>
                                <li><strong>- Chantagens</strong></li>
                                <li><strong>- Perseguições</strong></li>
                                <li><strong>- Controle de vida social</strong></li>
                                
                            </ul>
                        </div>

                        <div>
                        <h3>VIOLÊNCIA SEXUAL:</h3>
                            <ul className= "Tipos-Violência">
                                <li>- Sexo forçado</li>
                                <li>- Sexo forçado com outras pessoas</li>
                                <li>- Impedir o uso do método contraceptivo</li>
                                <li>- Forçar uma gravidez</li>
                                <li>- Obrigar a ver pornografia</li>
                                <li>- Sexo em troca de dinheiro ou bens</li>
                                <li>- Forçar um aborto</li>
                            </ul>
                        </div>
        </div>        
            <div className="ViolenceTips">
                        <div>
                        <h3>VIOLÊNCIA MORAL:</h3>
                            <ul className= "Tipos-Violência">
                                <li>- Xingamentos</li>
                                <li>- Injurías</li>
                                <li>- Calúnias</li>
                                <li>- Difamações</li>    
                            </ul>                    
                        </div>
            
                        <div>
                            <h3>VIOLÊNCIA FÍSICA:</h3>
                            <ul className= "Tipos-Violência">
                                <li>- Tapas</li>
                                <li>- Chutes</li>
                                <li>- Queimaduras</li>
                                <li>- Torturas</li>
                                <li>- Feminicídios</li>
                                <li>- Socos</li>
                                <li>- Apertar o pescoço</li>
                                <li>- Agressões com armas e outros objetos</li> 
                            </ul>
                        </div>
                    
            </div>                
                <div className="ViolenceTips">
                                <div>
                                    <h3>VIOLÊNCIA VIRTUAL:</h3>
                                    <ul className= "Tipos-Violência">
                                        <li>- Divulgar/compartilhar fotos e vídeos intimos pela internet e/ ou redes sociais, sem autorização da mulher, com o propósito de humilhá-la ou chantageá-la.</li>
                                        <li>- Utilizar redes sociais e celulares para propagar comentários depreciativos em relação à mulher.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>VIOLÊNCIA PATRIMONIAL:</h3>
                                    <ul className= "Tipos-Violência">
                                        <li>- Quebrar celulares e objetos pessoais</li>
                                        <li>- Rasgar fotos</li>
                                        <li>- Quebrar móveis</li>
                                        <li>- Rasgar roupas</li>
                                        <li>- Estragar objetos de trabalho</li>
                                    </ul>
                                    </div>
                </div>
        
            
    
</div>
    );
}
export default ViolenceTips;