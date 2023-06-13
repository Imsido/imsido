import React, { useContext } from 'react'
import contexto from '../../context/Contexto'
import Cuidador from "../Cuidador/Cuidador"
import styles from "./QuestionsCuidador.module.css"
import Piepag from '../PiePag/Piepag'

function QuestionsCuidador() {
    const { pregunta } = useContext(contexto)

    const preguntasDeI = pregunta.filter((data) =>
        data.tipo === "Cuidador" && data.categoria === "Dotacion e insumos."
    )
    const preguntasConf = pregunta.filter((data) =>
        data.tipo === "Cuidador" && data.categoria === "Confiabilidad."
    )
    const preguntasCyR = pregunta.filter((data) =>
        data.tipo === "Cuidador" && data.categoria === "Capacidad y respuesta."
    )
    const preguntasSeg = pregunta.filter((data) =>
        data.tipo === "Cuidador" && data.categoria === "Seguridad."
    )
    const preguntasEmp = pregunta.filter((data) =>
        data.tipo === "Cuidador" && data.categoria === "Empatia."
    )
    return (
        <div className={styles.preguntas}>
            <h1>Preguntas:</h1>
            <h1>DOTACIÓN E INSUMOS</h1>
            <div>
                {preguntasDeI.map((pregunta) => (
                    <Cuidador key={pregunta.id}
                        preg={pregunta} />
                ))}
            </div>
            <h1>CONFIABILIDAD</h1>
            <div>
                {preguntasConf.map((pregunta) => (
                    <Cuidador key={pregunta.id}
                        preg={pregunta} />
                ))}
            </div>
            <h1>CAPACIDAD Y RESPUESTA</h1>
            <div>
                {preguntasCyR.map((pregunta) => (
                    <Cuidador key={pregunta.id}
                        preg={pregunta} />
                ))}
            </div>
            <h1>SEGURIDAD</h1>
            <div>
                {preguntasSeg.map((pregunta) => (
                    <Cuidador key={pregunta.id}
                        preg={pregunta} />
                ))}
            </div>
            <h1>EMPATIA</h1>
            <div>
                {preguntasEmp.map((pregunta) => (
                    <Cuidador key={pregunta.id}
                        preg={pregunta} />
                ))}
            </div>
            <Piepag/>
        </div>
    )
}

export default QuestionsCuidador