import React from 'react'
import './ViolenceTips.css'

function ViolenceTips(props){

    const titulo = props.texto
    
    return(
        <div className="title">
            <h1>{titulo}</h1>
        </div>
    )
}

export default ViolenceTips;