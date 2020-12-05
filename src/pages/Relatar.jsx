import React from 'react'
import Header from '../components/Header/Header'
import { useState } from 'react'
import '../components/Relatar/Relatar.css'
import listRelatos from '../components/Relatar/data/Relatar.json'
import Table from 'react-bootstrap/Table'

function Relatar(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [relato, setRelato] = useState("")
    const [relatos, setRelatos] = useState(listRelatos)

    function handleSubmit(e){

        const novoRelato = {
            nome: nome,
            email: email,
            relato: relato
        }

        setRelatos([...relatos, novoRelato])

        e.preventDefault()
        
        console.log(relatos)
    } 

    const handleChangeNome = (e) => {
        setNome(e.target.value);
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    } 

    const handleChangeRelato = (e) => {
        setRelato(e.target.value);
    }


    return(
        <div>
            <Header/>

            <form onSubmit={handleSubmit}>
                <div className="relatar-page">
                    <div className="form-relato">
                        <div className="dados-pessoais">
                            <label className="form-nome">
                                Nome:
                                <input id="nome" type="text" onChange={handleChangeNome} value={nome}/>
                            </label>
                            <label className="form-email">
                                Email:
                                <input id="e-mail" type="text" onChange={handleChangeEmail} value={email}/>
                            </label>
                        </div>
                        <label className="form-relatar">
                            Relato:
                            <input type="text" onChange={handleChangeRelato} value={relato}/>
                        </label>
                        <input type="submit"/>
                    </div>
                    
                </div>
                
            </form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Relato</th>
                    </tr>
                </thead>
                <tbody>
                    { relatos.map((e) =>
                    <tr>
                        <td>{e.nome}</td><td>{e.email}</td><td>{e.relato}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Relatar;