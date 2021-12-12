import React, { useState } from 'react'
import '../styles/miniBuscador.css'

const MiniBuscador = (props) => {

    const [nombre,setNombre] = useState('')

    const handleInputChange = ( {target}) => {
        setNombre(target.value);
     }

    const buscarElemento = () => {
        props.buscar(nombre.trim().toLowerCase())
    }

    return (
        <div className='mini-buscador'>
            <label htmlFor="texto">Nombre:</label>
            <input type="text" name='texto' onChange={handleInputChange} onKeyDown={(e) => e.key==='Enter' && buscarElemento()} autoComplete="off"/>
            <button className='btn-primary' onClick={buscarElemento} >Buscar</button>
        </div>
    )
}

export default MiniBuscador
