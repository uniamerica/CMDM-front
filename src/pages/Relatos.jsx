import React from 'react'
import Header from '../components/Header/Header'
import Titulo from '../components/Relatos/Titulo'
import '../components/Relatos/Relatos.css'
import Card from '../components/Relatos/Card'
import Footer from '../components/Footer/Footer'

function Relatos(){
    return(
        <div>
            <Header/>
            <div className="container1">
                <Titulo/>
                <div className="cards">
                    <Card text="Relato 1" phase="Nunca tive problemas financeiros antes de me envolver com um parasita sociopata." relato="Nunca tive problemas financeiros antes de me envolver com um parasita sociopata.

                    Deixei tudo para trás acreditando que poderia seguir minha vida novamente, construí do zero tudo de novo. A realidade foi outra, fui ridicularizada, considerada louca, todas as portas se fecharam para mim. Não consegui provar o que acontecia dentro de minha casa, e ele era tão profissional, tão convincente.

                    Algum anjo ligou para o 0800 e anonimamente contou o que acontecia aqui. Não entendi direito, acho que foi mais de uma denúncia. Eu já havia desistido de lutar, não conseguia confiar também, tinha e ainda tenho medo de virar réu, depois de muitos anos sendo vítima. Aos poucos eu e meu filho fomos nos sentindo acolhidos pelo CREA, CRAM, CREAS, ninguém me julgou ou duvidou das nossas palavras. Fui aos poucos entendendo o que acontecia comigo, aprendi sobre o ciclo da violência, fui me fortalecendo intensamente, precisava sair, mas ainda não sabia como, tenho muito medo dessa pessoa.

                    Um dia, sem muito planejamento e com uma coragem surpreendente (que no meu caso é TPM KKKKKKK), peguei meu filho na escola e fui à Delegacia da Mulher, ela me apoiaram, não era nada parecido com o local onde estive antes, fui tratada com muito profissionalismo e empatia. Não voltamos para casa, alguns dias depois ele tece que sair e voltamos para nossa casa, com muito medo.

                    Recebi muito apoio da Patrulha Maria da Penha e de todo o pessoal, psicólogos, agentes públicos, assistência social... Até hoje me acompanham, mesmo na quarentena interfonam e perguntam se está tudo bem. Sinto o apoio e a segurança desta equipe presente na minha vida e sei que não teria conseguido sem eles.

                    Agradeço a oportunidade deste depoimento para demostrar o meu carinho e gratidão a todos.

                    Vocês são incríveis!"/>
                    <Card text="Relato 2" phase="Tudo começou quando eu tinha 15 anos, aaa que saudade."/>
                    <Card text="Relato 3" phase="Depois de 1 ano de divorcio do meu primeiro casamento, conheci um homem pelo qual me apaixonei."/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Relatos;