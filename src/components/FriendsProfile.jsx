import React, { useEffect, useState } from 'react'
import '../styles/friendsProfile.css'
import Friend from './Friend'
import MiniBuscador from './MiniBuscador'

const FriendsProfile = ({userInfo, reset}) => {

    const [listaDeAmigos, setListaDeAmigos] = useState(userInfo)

    const buscarUser = (nombreUser) => {
       const encontrado = userInfo.filter((nombre) => nombre.name.toLowerCase().includes(nombreUser) === true)
       setListaDeAmigos(encontrado)
    }

    useEffect(() =>{
     setListaDeAmigos(userInfo)   
    },[userInfo])

    return (
        <div className='friends'>
            <MiniBuscador buscar={buscarUser}/>
            <div className='friends-container'>
                {listaDeAmigos.map(element => <Friend key={`${element.uniqueId}`} userInfo={element} reset={reset}/>)}
            </div>
        </div>
    )
}

export default FriendsProfile
