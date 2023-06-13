import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Text.module.css"

function Text() {

    const playsoundC = () =>{
        new Audio("./sonidos/cuidadores.mp3").play();
    }

    const playsoundP = () =>{
        new Audio("./sonidos/pacientes.mp3").play();
    }

  return (
        <div className={styles.opciones}>
                <div className={styles.interactivo}>
                    <h1> Encuesta para Cuidadores </h1>
                    <span>Si usted es el encargado de supervisar y atender a un familiar cuya situación 
                        le impida realizar el instrumento. Por favor seleccionar esta opción. </span>
                    <img  onClick={playsoundC} src='./imagenes/sound.png' alt=''/>
                    <Link to="/cuidador">
                        <button>EMPEZAR</button>
                    </Link>
                </div>
                <div className={styles.normal}>
                    <h1> Encuesta Para Pacientes </h1>
                    <span>Si usted es usuario de atención domiciliaria y no presenta alguna complicación que le
                         impida realizar el instrumento, por favor seleccione esta opción. </span>
                    <img  onClick={playsoundP} src='./imagenes/sound.png' alt=''/>
                    <Link to="/pacientes">
                        <button>EMPEZAR</button>
                    </Link>
                </div>
            </div>
  )
}

export default Text