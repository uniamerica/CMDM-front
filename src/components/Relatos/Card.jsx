import React from 'react'
import './Card.css'
import Popup from 'reactjs-popup'

function Card(props) {
    var title = props.text
    var description = props.phase
    var text = props.relato
    return (

        <div className="cards">
            <div className="card">
                <div className="card-header">
                    <h2>{title}</h2>
                </div>
                <div className="card-body">
                    <p>{description}</p>
                    <Popup
                        trigger={<button className="popup-btn">Ler mais</button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="popup">
                                <div className="header">
                                    <h2>{title}</h2>
                                </div>
                                <div className="content">
                                    <p>{text}</p>
                                </div>
                                <div className="modal">
                                    <button className="popup-btn" onClick={close}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </div>


    )
}

export default Card;