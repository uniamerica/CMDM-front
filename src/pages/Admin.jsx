import React from 'react'
import Header from '../components/Header/Header'
import api from '../api/api'
import Card from '../components/Relatos/Card'

import '../styles/Admin.css'

class Admin extends React.Component {

    state = {
        relatos: [],
    }

    async componentDidMount() {
        const response = await api.get("/relatos");

        this.setState({ relatos: response.data })

        this.state.relatos.map((e) => {
            if (e.pendente === false) {
                this.state.relatos.pop(e)
            }
        })
    }

    render() {

        const { relatos } = this.state
        
        return (
            <>
                <Header />
                <div className="container">

                    <div className="cards-container">
                        {relatos.map((e) => (
                            <Card text={e.titulo} phase={e.descricao} relato={e.depoimento}/>
                        ))}
                        <div>
                            <button type="button" onClick={relatos.pendete = false}>Aceitar</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Admin