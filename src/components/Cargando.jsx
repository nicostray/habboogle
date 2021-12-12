import React from 'react'
import '../styles/cargando.css'
import habbos from '../images/progress_habbos.gif'
const Cargando = () => {
    return (
        <div className='cargando'>
            <img src={habbos} alt="El perfil está cargando" />
            <h1>El perfil se está cargando...</h1>
        </div>
    )
}

export default Cargando
