import React from 'react'
import online from '../images/online.png'
import offline from '../images/offline.png'
import '../styles/friend.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Friend = ({userInfo, reset}) => {
    
    const params = useParams();
    let hotel = params.idUsuario.slice(2,4)
    if(hotel==='us') hotel='com';
    const linkPerfil = `/profile/${userInfo.uniqueId}/`

    const misionCheck = () => {
        let mision = ''
        if (userInfo.motto.length > 20){
            mision = userInfo.motto.substr(0,20) + '...'
        } else{
            mision = userInfo.motto
        }
        if (userInfo.motto === ''){
            mision = 'No definida'
        }
        return mision
    }




    return (
        <div className='friend'>
            <div className='friend__image'>
                <img src={`https://www.habbo.${hotel}/habbo-imaging/avatarimage?hb=img&user=${userInfo.name}&size=b&headonly=1`} alt={`cara de ${userInfo.name}`} />
            </div>
            <div className='friend__info'>
                <div className='nombre-estado__container'>
                    <p className='friend__name'>{userInfo.name}</p>
                    <img className='friend__img' src={userInfo.online ? online : offline} alt="" />
                </div>
                <p className={`friend__mision ${misionCheck()==='No definida' && 'undefined'}`}>{misionCheck()}</p>
                <Link className='friend__btn btn-primary' to={linkPerfil} onClick={reset}>Ver perfil</Link>
            </div>
        </div>
    )
}

export default Friend
