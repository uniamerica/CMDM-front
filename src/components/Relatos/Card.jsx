import React from 'react'
import styles from './Card.module.css'
import Popup from 'reactjs-popup'

function Card(props){
    var title = props.text
    var description = props.phase
    var text = props.relato
    return(
        
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.card_body}>
                    <p>{description}</p>
                    <Popup
                        trigger={<button className={styles.popup_btn}>Ler mais</button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className={styles.popup}>
                                <div className={styles.header}>
                                    <h2>{title}</h2>
                                </div>
                                <div className={styles.content}>
                                    <p>{text}</p>
                                </div>
                                <div className={styles.modal}>
                                    <button className={styles.popup_btn} onClick={close}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        
        
    )
}

export default Card;