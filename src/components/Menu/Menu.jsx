import React from 'react'
import styles from './Menu.module.css'


function Menu() {

    const playsound = () =>{
        new Audio("./sonidos/Imsido.mp3").play();
    }

    return (
        <div className={styles.Menu}>
            <div className={styles.imgMenu}>
                <img src="./imagenes/consulta.png" alt="Img consulta" />
            </div>
            <div className={styles.text}>
                <h1> IMSIDO </h1>
                <span> Este instrumento está diseñado con el propósito de medir el grado de satisfacción
                    que presenta usted como usuario al recibir el servicio de salud domiciliaria.
                    Puede activar modalidad de audio-escucha 
                    en caso de que usted presente alguna complicación para leer o contestar alguna pregunta, en la parte 
                    inferior se le dispondrán dos opciones, por favor escoger la que más se acomode a su situación y realizar el instrumento.</span>
                <img  onClick={playsound} src='./imagenes/sound.png' alt=''/>
            </div>
        </div>
    )
}

export default Menu