import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/card.css'
import amigos from '../images/perfil/amigos.png'
import grupos from '../images/perfil/grupos.png'
import placas from '../images/perfil/placas.png'
import salas from '../images/perfil/salas.png'

const Card = ({userInfo, name, id, userId}) => {
    const imageNames = [amigos, placas, salas, grupos]
    const urlNames = ['friends', 'badges', 'rooms', 'groups']
    const navigate = useNavigate()

    const cambiarPag = () => {
        navigate(`/profile/${userId}/${urlNames[id]}`)
    }

    return (
        <div className='card'>
            <div className='card__img'>
                <img src={imageNames[id]} alt="" />
            </div>
                <h4>{name}</h4>
                <p>Total: {userInfo}</p>
                <button className='btn-primary' onClick={cambiarPag}>{`Ver ${name}`}</button>
            
        </div>
    )
}

export default Card
