import React from 'react'
import styles from "./Info.module.css"

function Info() {
    return (
        <div className={styles.info}>
            <div className={styles.copy}>
                <span>© 2023 — IMSIDO</span>
            </div>
            <div className={styles.data}>
                <span className={styles.text}> Desarollado por: Esteban Ordoñez</span>
                <img src='./imagenes/gmail.png' alt='Imagen gmail'/>
                <span className={styles.correo}> lelouch2535@gmail.com</span>
            </div>
        </div>
    )
}

export default Info