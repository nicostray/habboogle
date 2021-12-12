import React, { useState } from 'react'
import '../styles/friendsProfile.css'
import Friend from './Friend'
import MiniBuscador from './MiniBuscador'

const FriendsProfile = ({userInfo}) => {
    
    const [listaDeAmigos, setListaDeAmigos] = useState(userInfo)

    const buscarUser = (nombreUser) => {
       const encontrado = userInfo.filter((nombre) => nombre.name.toLowerCase().includes(nombreUser) === true)
       setListaDeAmigos(encontrado)
    }

    return (
        <div className='friends'>
            <h2>Amigos <span className='undefined'>({userInfo.length})</span></h2>
            <MiniBuscador userInfo={listaDeAmigos} buscar={buscarUser}/>
            <div className='friends-container'>
                {listaDeAmigos.map(element => <Friend key={`${element.uniqueId}`} userInfo={element}/>)}
            </div>
        </div>
    )
}

export default FriendsProfile
