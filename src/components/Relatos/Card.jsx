import React from 'react'
import './Card.css'

function Card(props){
    var title = props.text
    var description = props.phase
    return(
        <div>
            <div className="card">
                    <div className="card-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="card-body">
                        <p>{description}</p>
                        <button>Ler mais</button>
                    </div>
                </div>
        </div>
    )
}

export default Card;