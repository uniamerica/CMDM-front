import React from 'react'
import './Titulo.css'

function Titulo(props) {

    var titulo = props.titulo
    var text = props.text

    return (
        <div className="global">
            <div className="titulo">
                <h1>{titulo}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Titulo;