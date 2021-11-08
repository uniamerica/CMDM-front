import React, { useState } from 'react'
import Card from './Card'
import api from '../../api/api'
import { Component } from 'react'

import './Cards.css'

class Cards extends Component {

    state = {
        relatos: [],
        autorizados: [{titulo: "titulo",
            descricao: "descricao",
            depoimento: "relato",
            pendente: false}]
    }

    async componentDidMount() {
        const response = await api.get("/reports");

        this.setState({ relatos: response.data })
    }

    render() {

        const { relatos } = this.state
        
        return (
            <div className="container">

                <div className="cards-container">
                    {relatos.map((e) => (
                        <Card key={e.id} text={e.title} phase={e.description} relato={e.depoiment}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Cards;