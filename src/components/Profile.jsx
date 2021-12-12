import React from 'react'
import '../styles/profile.css'
import PlacasEnUso from './PlacasEnUso'
import userOnline from '../images/online.png';
import userOffline from '../images/offline.png';

const Profile = ({userInfo}) => {
    let nombre, mision, creado, ultimaConexion, gemas, nivel, expPorcentaje, placasEnUso, online= ''

    if (userInfo){
        nombre = userInfo.user.name
        mision = userInfo.user.motto
        creado = userInfo.user.memberSince.substr(0,10)
        ultimaConexion = userInfo.user.lastAccessTime.substr(0,10)
        gemas = userInfo.user.starGemCount
        nivel = userInfo.user.currentLevel
        expPorcentaje = userInfo.user.currentLevelCompletePercent
        placasEnUso = userInfo.user.selectedBadges
        online = userInfo.user.online
    }

    const percentStyle =  {
        width : expPorcentaje
    }

    const imagenAvatar = `https://www.habbo.com/habbo-imaging/avatarimage?size=l&figure=${userInfo && userInfo.user.figureString}&direction=2&head_direction=2`
    
    return (
        <div>
            <div className='profile__top-container'>
                <div className='profile__portada'>

                </div>

                <div className='profile__info'>
                    <div className='avatar-con-info__container'>
                        <div className='avatar-container'>
                            <img className='avatar-img' src={imagenAvatar} alt="imagen del usuario" />
                        </div>
                        <div className='info-container'>
                            <div className='nombre-estado__container'>
                                <h2>{nombre}</h2>
                                <img className='img-estado' src={online ? userOnline : userOffline} alt="" />
                            </div>
                            <p><b>Misión: </b> {mision !=='' ? mision : <i className='undefined'>No definida</i>}</p>
                            <p><b>Creado: </b>{creado}</p>
                            <p><b>Última conexión: </b> {ultimaConexion}</p>
                            <p><b>Gemas: </b>{gemas}</p>
                            <p><b>Nivel: </b>{nivel}</p>
                            <div className='barraExp__container'>
                                <div className='barraExp__barra' style={percentStyle}></div>
                            </div>
                        </div>
                    </div>
                    <PlacasEnUso placas={placasEnUso}/>
                </div>
            </div>
        </div>
    )
}

export default Profile
