import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menuProfile.css'

const MenuProfile = ({userInfo}) => {
    let idUser = ''
    if(userInfo) idUser = userInfo.user.uniqueId
    // menu-profile__btn--active
    return (
        <div className='menu-profile'>
            <Link className='menu-profile__btn ' to={`/profile/${idUser}/`}><p>General</p> </Link>
            <Link className='menu-profile__btn' to={`/profile/${idUser}/friends`}>Amigos</Link>
            <Link className='menu-profile__btn' to={`/profile/${idUser}/badges`}>Placas</Link>
            <Link className='menu-profile__btn' to={`/profile/${idUser}/rooms`}>Salas</Link>
            <Link className='menu-profile__btn' to={`/profile/${idUser}/groups`}>Grupos</Link>
        </div>
    )
}

export default MenuProfile
