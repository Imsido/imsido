import React from 'react'
import { Route, Routes } from "react-router-dom";
import Questions from '../Questions/Questions';
import QuestionsCuidador from "../QuestionsCuidador/QuestionsCuidador"

function Main() {
  return (
    <main className='main'>
        <Routes>
         <Route exact path="/pacientes" element={<Questions />} />
         <Route exact path="/cuidador" element={<QuestionsCuidador />} />
        </Routes>
    </main>
  )
}

export default Main