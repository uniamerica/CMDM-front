import React, { useState } from 'react'
import Card from './Card'
import api from '../../api/api'
import { Component } from 'react'

import './Cards.css'

class Cards extends Component {

    state = {
        relatos: []
    }

    async componentDidMount() {
        const response = await api.get("/relatos");

        this.setState({ relatos: response.data })
    }

    render() {

        const { relatos } = this.state
        
        return (
            <div className="container">

                <div className="cards-container">
                    {relatos.map((e) => (
                        <Card text={e.titulo} phase={e.descricao} relato={e.depoimento}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Cards;