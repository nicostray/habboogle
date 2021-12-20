import React from 'react'
import Buscador from '../components/Buscador'
import frankerror from '../images/frank-error.gif'
import '../styles/userNotFound.css'
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet'

const UserNotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <Buscador css='search'/>
            <div className='user-not-found'>
                <div className='user-not-found__container'>
                    <img src={frankerror} alt="" />
                    <h1>Lo sentimos, el usuario no tiene su perfil público, no existe o ha sido baneado</h1>
                    <button className='btn-primary' onClick={() =>navigate(-1)}>Volver</button>
                </div>
            </div>
        </div>
    )
}

export default UserNotFound
