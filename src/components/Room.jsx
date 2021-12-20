import React from 'react'
import '../styles/room.css'
import imageDefault from '../images/room-default.gif'
import useDefined from '../hooks/useDefined'
const Room = ({roomInfo}) => {
    const roomImage = `https://habbo-stories-content.s3.amazonaws.com/navigator-thumbnail/hhes/${roomInfo.id}.png`
    const linkSala = `https://www.habbo.es/room/${roomInfo.id}`

    const [resultado] = useDefined(roomInfo.description, 'Descripción no definida')
    return (
        <div className='room'>
            <div className='room__img-info'>
                <div className='room__img'>
                    <img src={roomImage} alt="" onError={(e)=>{e.target.onerror = null; e.target.src=imageDefault}}/>
                </div>
                <div className='room-info'>
                    <h3>{roomInfo.name}</h3>
                    <p className={`room__description`}>{resultado}</p>
                    <p className='room__date'><b>Creada:</b> {roomInfo.creationTime && roomInfo.creationTime.substr(0,10)}</p>

                    <div className='room__mix'>
                        <p className='room_points'>Puntos: {roomInfo.rating}</p>
                        <p className='room_max-visitors'>Visitantes máximos: {roomInfo.maximumVisitors}</p>
                    </div>
                </div>
            </div>

            <a className='btn-primary room__btn' href={linkSala}>Visitar sala</a>
        </div>
    )
}

export default Room
