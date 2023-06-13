import { useState } from "react";
import contexto from "./Contexto";
import { preguntas } from "../static/data";

const Provider = function( {children}){
    const [pregunta, setPregunta]= useState(preguntas);
    return(
        <contexto.Provider value={{pregunta, setPregunta}}>
            {children}
        </contexto.Provider>
    )

}

export default Provider