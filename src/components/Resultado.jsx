import React from 'react'
import '../styles/resultado.css'
import userOnline from '../images/online.png';
import userOffline from '../images/offline.png';
import stars from '../images/star.png';
import banderasPaises from '../helper/banderasPaises';
import { Link } from 'react-router-dom';

const Resultado = ({userInfo}) => {
    const imagenAvatar = `https://www.habbo.com/habbo-imaging/avatarimage?size=m&figure=${userInfo.figureString}&direction=2&head_direction=2`
    const hotel = `${userInfo.uniqueId && userInfo.uniqueId.substr(2,2)}`
    const linkPerfil = `/profile/${userInfo.uniqueId}/`
    return (
        <div className='resultado__primer-container'>
                <Link className='resultado_link' to= {linkPerfil}>Ver perfil de {userInfo.name}</Link>


            <div className='resultado__segundo-container'>
                <img className='resultado__imagen' src={imagenAvatar} alt="imagen de usuario" />
                <div>
                    <div className='resultado__mix'>
                        <p><b>Hotel:</b></p>
                        <img className='resultado__bandera' src={banderasPaises(`${hotel}`)} alt="" />
                    </div>
                    <div className='resultado__mix'>
                        <p className='resultado__estado'><b>Estado:</b></p>
                        <img className='resultado__online' alt="online" src={userInfo.online ? userOnline : userOffline} />                     
                    </div>
                    
                    <p className='resultado__mision'><b>Misión:</b> <span>{userInfo.motto ? userInfo.motto : <i>no definida</i>}</span></p>
                    <div className='resultado__mix'>
                        <p className='resultado__nivel'><b>Nivel:</b> {userInfo.currentLevel ? userInfo.currentLevel : 0}</p>
                        <img className='resultado_stars' src={stars} alt="" />
                        <p>{userInfo.starGemCount ? userInfo.starGemCount : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resultado
