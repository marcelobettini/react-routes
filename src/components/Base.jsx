import React, {useState, useEffect} from 'react'

const Base = () => {
  const [nombre, setNombre] = useState('Peter')
  useEffect(() => {           //el hook se lanza automáticamente
    setTimeout(() => {
      setNombre('Manuel Wirtz')

    }, 2000)
  })
  return (
    <div>
      <h3 className="display-3">Página de Base de la URL "/"</h3>
      <p>Usamos el hook UseEffect</p>
      <p>{nombre}</p>
    </div>
  )
}

export default Base
