import React from 'react'
import Header from '../components/Header/Header';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import '../components/Definition/Definition.css';
import Titulo from '../components/Relatos/Titulo'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function Definition() {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <div class="containerDef">
                <Titulo titulo="O QUE É VIOLÊNCIA DOMÉSTICA?" text="De acordo com o art 5° da lei Maria da Penha, a Violência doméstica é um padrão de
                    comportamento que envolve um tipo específico de violência ou de abuso por parte de uma 
                    pessoa seja companheiro, membros da família, desconhecidos, etc contra uma mulher. <br/> <br/> 
                    A violência doméstica pode assumir diversos tipos, incluindo abusos físicos, verbais,
                    emocionais, económicos, religiosos, reprodutivos e sexuais. Estes abusos podem assumir 
                    desde formas sutis e coercivas até violação conjugal e abusos físicos violentos como 
                    sufocação, espancamento, mutilação genital feminina e ataques com ácido que provoquem 
                    desfiguração ou morte. Os homícidios domésticos incluem o apedrejamento, imolação de noivas, 
                    morte por dote e crimes de honra."/>
                <div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"As mulheres apanham
                                        porque gostam ou porque provocam."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            Quem é vítima de violência doméstica passa muito tempo tentando evitá-la
                                            para assegurar sua própria
                                            proteção e a de seus filhos. As mulheres ficam ao lado dos agressores por
                                            medo, vergonha ou falta de
                                            recursos financeiros, sempre esperando que a violência acabe, e <strong>nunca
                                            para manter a
                                            violência</strong>.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"A violência doméstica
                                        só acontece em famílias de baixa renda e pouca instrução."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            A violência doméstica é um fenômeno que não distingue classe social, raça,
                                            etnia, religião,
                                            orientação sexual, idade e grau de escolaridade. Todos os dias, somos
                                            impactados por notícias de
                                            mulheres que foram assassinadas por seus companheiros ou ex-parceiros. Na
                                            maioria desses casos, elas
                                            já vinham sofrendo diversos tipos de violência há algum tempo, mas a
                                            situação só chega ao
                                            conhecimento de outras pessoas quando as agressões crescem a ponto de
                                            culminar no feminicídio.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"É fácil identificar o
                                        tipo de mulher que apanha." </Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            Não existe um perfil específico de quem sofre violência doméstica. Qualquer
                                            mulher, em algum período
                                            de sua vida, pode ser vítima desse tipo de violência.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"A violência doméstica
                                        não ocorre com frequência."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            Segundo dados da Organização Mundial da Saúde (OMS), em 2013 o Brasil já
                                            ocupava o 5º lugar, num
                                            ranking de 83 países onde mais se matam mulheres. São 4,8 homicídios por 100
                                            mil mulheres, em que
                                            quase 30% dos crimes ocorrem nos domicílios. Além disso, uma pesquisa do
                                            DataSenado (2013) revelou
                                            que 1 em cada 5 brasileiras assumiu que já foi vítima de violência doméstica
                                            e familiar provocada
                                            por um homem. Os resultados da Fundação Perseu Abramo, com base em estudo
                                            realizado em 2010, também
                                            reforçam esses dados – para se ter uma ideia, a cada 2 minutos 5 mulheres
                                            são violentamente
                                            agredidas. Outra confirmação da frequência da violência de gênero é o ciclo
                                            que se estabelece e é
                                            constantemente repetido: aumento da tensão, ato de violência e lua de mel.
                                            Nessas três fases, a
                                            mulher sofre vários tipos de violência (física, moral, psicológica, sexual e
                                            patrimonial), que podem
                                            ser praticadas de maneira isolada ou não.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"Para acabar com a
                                        violência, basta proteger as vítimas e punir os agressores."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            STanto a proteção das vítimas quanto a punição dos agressores são
                                            importantes no combate à
                                            violência. Mas isso não é suficiente, principalmente porque a violência
                                            doméstica e familiar contra
                                            as mulheres é um problema estrutural, ou seja, ocorre com frequência em
                                            todos os estratos sociais,
                                            obedecendo a uma lógica de agressões que já são mapeadas pelo ciclo da
                                            violência. Daí surge a
                                            necessidade também de ações sequenciadas para o enfrentamento da violência
                                            de gênero, tais como
                                            inserir essa discussão nos currículos escolares de maneira multidisciplinar;
                                            criar políticas
                                            públicas com medidas integradas de prevenção; promover pesquisas para gerar
                                            estatísticas e
                                            possibilitar uma sistematização de dados em âmbito nacional; realizar
                                            campanhas educativas para a
                                            sociedade em geral (empresas, instituições públicas, órgãos governamentais,
                                            ONGs etc.); e difundir a
                                            Lei Maria da Penha e outros instrumentos de proteção dos direitos humanos
                                            das mulheres.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"A mulher não pode
                                        denunciar a violência doméstica em qualquer delegacia."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            A violência doméstica pode, sim, ser denunciada em qualquer delegacia, sem
                                            perder de vista,
                                            entretanto, que a Delegacia Especializada no Atendimento à Mulher (DEAM) é o
                                            órgão mais capacitado
                                            para realizar ações de prevenção, proteção e investigação dos crimes de
                                            violência de gênero. O
                                            acesso à justiça é garantido às mulheres no art. 3º da Lei Maria da Penha.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"Se a situação fosse
                                        tão grave, as vítimas abandonariam logo os agressores."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            Grande parte dos feminicídios ocorre na fase em que as mulheres estão
                                            tentando se separar dos
                                            agressores. Algumas vítimas, após passarem por inúmeros tipos de violência,
                                            desenvolvem uma sensação
                                            de isolamento e ficam paralisadas, sentindo-se impotentes para reagir,
                                            quebrar o ciclo da violência
                                            e sair dessa situação.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"É melhor continuar na
                                        relação, mesmo sofrendo agressões, do que se separar e criar o filho sem
                                        o pai."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            Muitas mulheres acreditam que suportar as agressões e continuar no
                                            relacionamento é uma forma de
                                            proteger os filhos. No entanto, eles vivenciam e sofrem a violência com a
                                            mãe. Isso pode ter
                                            consequências na saúde e no desenvolvimento das crianças, pois elas correm o
                                            risco não só de se
                                            tornarem vítimas da violência, mas também de reproduzirem os atos violentos
                                            dos agressores.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"Em briga de marido e
                                        mulher não se mete a colher./Roupa suja se lava em casa."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            A violência sofrida pela mulher é um problema social e público na medida em
                                            que impacta a economia
                                            do País e absorve recursos e esforços substanciais tanto do Estado quanto do
                                            setor privado:
                                            aposentadorias precoces, pensões por morte, auxílios-doença, afastamentos do
                                            trabalho, consultas
                                            médicas, internações etc. De acordo com o § 2º do art. 3º da Lei Maria da
                                            Penha, é de
                                            responsabilidade da família, da sociedade e do poder público assegurar às
                                            mulheres o exercício dos
                                            “direitos à vida, à segurança, à educação, à cultura, à moradia, ao acesso à
                                            justiça, ao esporte, ao
                                            lazer, ao trabalho, à cidadania, à dignidade, ao respeito e à convivência
                                            familiar e comunitária”.
                                            Além disso, desde 2012, por decisão do Supremo Tribunal Federal (STF), a Lei
                                            Maria da Penha é
                                            passível de ser aplicada mesmo sem queixa da vítima, o que significa que
                                            qualquer pessoa pode fazer
                                            a denúncia contra o agressor, inclusive de forma anônima. Achar que o
                                            companheiro da vítima “sabe o
                                            que está fazendo” é ser condescendente e legitimar a violência num contexto
                                            cultural machista e
                                            patriarcal. Quando a violência existe em uma relação, ninguém pode se calar.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"Os agressores não
                                        sabem controlar suas emoções."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            Se isso fosse verdade, eles também agrediriam chefes, colegas de trabalho e
                                            outros familiares, e não
                                            somente a esposa, as filhas e os filhos. A violência doméstica não é apenas
                                            uma questão de
                                            “administrar” a raiva. Os agressores sabem como se controlar, tanto que não
                                            batem no patrão, e sim
                                            na mulher ou nos filhos. Além disso, eles agem dessa maneira porque
                                            acreditam que não haverá
                                            consequências pelos seus atos.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"A violência doméstica
                                        vem de problemas com o álcool, drogas ou doenças mentais."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            A violência sofrida pela mulher é um problema social e público na medida em
                                            que impacta a economia
                                            do País e absorve recursos e esforços substanciais tanto do Estado quanto do
                                            setor privado:
                                            aposentadorias precoces, pensões por morte, auxílios-doença, afastamentos do
                                            trabalho, consultas
                                            médicas, internações etc. De acordo com o § 2º do art. 3º da Lei Maria da
                                            Penha, é de
                                            responsabilidade da família, da sociedade e do poder público assegurar às
                                            mulheres o exercício dos
                                            “direitos à vida, à segurança, à educação, à cultura, à moradia, ao acesso à
                                            justiça, ao esporte, ao
                                            lazer, ao trabalho, à cidadania, à dignidade, ao respeito e à convivência
                                            familiar e comunitária”.
                                            Além disso, desde 2012, por decisão do Supremo Tribunal Federal (STF), a Lei
                                            Maria da Penha é
                                            passível de ser aplicada mesmo sem queixa da vítima, o que significa que
                                            qualquer pessoa pode fazer
                                            a denúncia contra o agressor, inclusive de forma anônima. Achar que o
                                            companheiro da vítima “sabe o
                                            que está fazendo” é ser condescendente e legitimar a violência num contexto
                                            cultural machista e
                                            patriarcal. Quando a violência existe em uma relação, ninguém pode se calar.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"A Lei Maria da Penha
                                        é inconstitucional."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            É comum ver argumentos de que a Lei Maria da Penha fere a Constituição
                                            Federal em seu art. 5º,
                                            inciso I, segundo o qual “homens e mulheres são iguais em direitos e
                                            obrigações nos termos desta
                                            constituição”. Assim, o problema estaria no fato de que a lei teria tratado
                                            a violência doméstica e
                                            familiar pelo viés de gênero, o que, para muitos, seria uma “discriminação”
                                            do sexo masculino, pois
                                            marcaria uma diferenciação entre homens e mulheres e infringiria o princípio
                                            da isonomia. No
                                            entanto, esse princípio não significa uma igualdade literal, mas prescreve
                                            que sejam tratadas
                                            igualmente as situações iguais e desigualmente as desiguais. Ora, as
                                            mulheres enfrentam desvantagens
                                            históricas dentro do contexto machista e patriarcal em que vivemos, as quais
                                            vão desde o trabalho,
                                            passando pela participação política e o acesso à educação, até as relações
                                            familiares, entre outras.
                                            Dessa forma, a Lei Maria da Penha, longe de privilegiar as mulheres em
                                            detrimento dos homens, tem
                                            uma atuação imprescindível para equilibrar as relações e proteger as
                                            mulheres em situação de risco e
                                            violência, visando uma igualdade real, e não apenas teórica. Por fim, vale
                                            ressaltar que o Supremo
                                            Tribunal Federal (STF) também já se posicionou quanto a essa questão,
                                            decidindo pela
                                            constitucionalidade da lei.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"A Lei Maria da Penha
                                        pode ser aplicada tanto para o homem quanto para a mulher."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            A Lei Maria da Penha será aplicada para proteger todas as pessoas que se
                                            identificam com o gênero
                                            feminino e que sofram violência em razão desse fato − conforme o parágrafo
                                            único do art. 5º da lei,
                                            a violência doméstica e familiar contra a mulher pode se configurar
                                            independentemente de orientação
                                            sexual. Inclusive, alguns tribunais de justiça já aplicam a legislação para
                                            mulheres transexuais.
                                            Quanto ao homem, ele será colocado diante da Lei n. 11.340/2006 sempre que
                                            for considerado um
                                            agressor. Se ele for vítima, serão aplicados os dispositivos previstos no
                                            Código Penal, e não
                                            aqueles presentes na Lei Maria da Penha.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="containerDef2">
                        <div className={classes.root}>
                            <Accordion className="containerDef2">
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                    <h5 className="h5Def"><Typography className={classes.heading}>"A Lei Maria da Penha
                                        só foi feita para as mulheres se vingarem dos homens."</Typography></h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            A Lei Maria da Penha cria mecanismos para enfrentar e combater a violência
                                            doméstica e familiar
                                            contra a mulher, ou seja, trata-se de uma lei elaborada para proteger as
                                            mulheres, trazendo
                                            inclusive definições claras e precisas sobre a violência de gênero. Todo
                                            homem que se tornar um
                                            agressor infringe a lei e viola os direitos humanos das mulheres. Portanto,
                                            é preciso fazer o
                                            registro de ocorrência para que a autoridade policial realize os
                                            procedimentos necessários tanto
                                            para a proteção da vítima quanto para a investigação dos fatos. Diante
                                            disso, em vez de falar em
                                            “vingança”, deve-se falar em “justiça”.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Definition;