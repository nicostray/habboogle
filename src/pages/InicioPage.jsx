import React from 'react'
import { Helmet } from 'react-helmet';
import Buscador from '../components/Buscador';
import '../styles/inicioPage.css'

const InicioPage = () => {

    return (
        <div className='inicio-page'>
            <Helmet>
                <title>Habboogle</title>
            </Helmet>
            <Buscador css='inicio'/>
        </div>
    )
}

export default InicioPage
