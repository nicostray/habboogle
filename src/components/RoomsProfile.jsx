import React, {useState} from 'react'
import '../styles/roomsProfile.css'
import MiniBuscador from './MiniBuscador'
import Room from './Room'

const RoomsProfile = ({roomInfo}) => {
    const [listaDeSalas, setListaDeSalas] = useState(roomInfo)

    const buscarRoom = (nombreSala) => {
       const encontrado = roomInfo.filter((nombre) => nombre.name.toLowerCase().includes(nombreSala) === true)
       setListaDeSalas(encontrado)
    }

    return (
        <div className='rooms'>
            <MiniBuscador buscar={buscarRoom}/>
            <div className='rooms-container'>
                {listaDeSalas.map(element => <Room key={`${element.uniqueId}`} roomInfo={element}/>)}
            </div>
        </div>
    )
}

export default RoomsProfile
