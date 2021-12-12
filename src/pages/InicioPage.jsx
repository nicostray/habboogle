import React, { useEffect } from 'react'
import Buscador from '../components/Buscador';

const InicioPage = () => {
    useEffect(() => {
        document.title='Habboogle' 
    },[])
    return (
        <div>
            <Buscador css='inicio'/>
        </div>
    )
}

export default InicioPage
