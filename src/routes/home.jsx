import React from 'react'
import Inicio from '../componentes/Inicio'
import Nosotros from '../componentes/Nosotros'
import Etiquetas from '../componentes/Etiquetas'
import Galeria from '../componentes/Galeria'
import Contactanos from '../componentes/Contactanos'
import Comentarios from '../componentes/Comentarios'
function home() {
  return (
    <div>
        <Inicio/>
        <Nosotros/>
        <Etiquetas/>
        <Galeria/>
        <Contactanos/>
        <Comentarios/>
    </div>
  )
}

export default home