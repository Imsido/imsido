import React, {useContext} from 'react'
import styles from "./Cuidador.module.css"
import contexto from '../../context/Contexto'
import { DataExcel } from '../../context/DataExcel'


function Cuidador({ preg }) {

    const { pregunta } = useContext(contexto);
    const { dataExcel } = useContext(DataExcel);

    const selectOption = (e) => {
        console.log(e.target.name)
        console.log(e.target.id)

        const agregarID = dataExcel.findIndex((data) => data.id === parseInt(e.target.name))
        console.log(agregarID)

        const prueba =  pregunta.find((data) => data.id === parseInt(e.target.name) )

        if(agregarID === -1){

         const exportData ={
             Numero:prueba.id,
             tipo:prueba.tipo,
             categoria:prueba.categoria,
             pregunta:prueba.pregunta,
             opcion_Marcada:prueba[e.target.id]
         }   
         dataExcel.push(exportData)
        }
        else{
            dataExcel[agregarID].opcionMarcada = prueba[e.target.id];
        }
        console.log(dataExcel)
    }
    
    const playsound = () =>{
        new Audio(preg.audio).play();
    }

    return (

        <div className={styles.question}>
            <h1>{preg.numero}. {preg.pregunta}</h1>
            <img onClick={playsound} id={styles.img} src="./imagenes/sound.png" alt="" />
            <div className={styles.opciones}>
                <div>
                    <input type="radio" name={preg.id} id="opcion1" onClick={selectOption}/>
                    <label htmlFor="opcion1">{preg.opcion1}</label>
                    <img src='./imagenes/sats1.png' alt='' />
                </div>
                <div>
                    <input type="radio" name={preg.id} id="opcion1" onClick={selectOption}/>
                    <label htmlFor="opcion2">{preg.opcion2}</label>
                    <img src='./imagenes/sats2.png' alt='' />
                </div>
                <div>
                    <input type="radio" name={preg.id} id="opcion3" onClick={selectOption}/>
                    <label htmlFor="opcion3">{preg.opcion3}</label>
                    <img src='./imagenes/sats3.png' alt='' />
                </div>
                <div>
                    <input type="radio" name={preg.id} id="opcion4" onClick={selectOption}/>
                    <label htmlFor="opcion4">{preg.opcion4}</label>
                    <img src='./imagenes/sats4.png' alt='' />
                </div>
                <div>
                    <input type="radio" name={preg.id} id="opcion5" onClick={selectOption}/>
                    <label htmlFor="opcion5">{preg.opcion5}</label>
                    <img src='./imagenes/sats5.png' alt='' />
                </div>
            </div>

        </div>
    )
}

export default Cuidador