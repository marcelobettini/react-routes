import React from 'react'
import {useParams} from 'react-router-dom'  /*permite recibir parámetro por ruta*/

const Inicio = (param) => {
  const {variable} = useParams()
  return (
    <div>
      <h3 className="display-3">Página de Inicio de la APP</h3>
      {variable}
    </div>
  )
}

export default Inicio
