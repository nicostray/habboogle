import React, { useState } from 'react'
import '../styles/badgesProfile.css'
import Badge from './Badge'
import MiniBuscador from './MiniBuscador'
const BadgesProfile = ({userInfo}) => {

    const [listaDePlacas, setListaDePlacas] = useState(userInfo)

    const buscarPlaca = (nombrePlaca) => {
        const encontrado = userInfo.filter((nombre) => nombre.name.toLowerCase().includes(nombrePlaca) === true)
        setListaDePlacas(encontrado)
     }

    return (
        <div className='badges'>
            <h2>Placas <span className='undefined'>({userInfo.length})</span></h2>
            <MiniBuscador buscar={buscarPlaca} />
            <div className='badges-container'>
                {listaDePlacas.map(element => <Badge badgeInfo={element}/>)}
            </div>
        </div>
    )
}

export default BadgesProfile
