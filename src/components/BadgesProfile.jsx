import React, { useEffect, useState } from 'react'
import '../styles/badgesProfile.css'
import Badge from './Badge'
import MiniBuscador from './MiniBuscador'
const BadgesProfile = ({userInfo}) => {

    const [listaDePlacas, setListaDePlacas] = useState(userInfo)

    const buscarPlaca = (nombrePlaca) => {
        const encontrado = userInfo.filter((nombre) => nombre.name.toLowerCase().includes(nombrePlaca) === true)
        setListaDePlacas(encontrado)
     }

     useEffect(() => {
         setListaDePlacas(userInfo)
     }, [userInfo])
    return (
        <div className='badges'>
            <MiniBuscador buscar={buscarPlaca} />
            <div className='badges-container'>
                {listaDePlacas.map(element => <Badge key={`${element.code}`} badgeInfo={element}/>)}
            </div>
        </div>
    )
}

export default BadgesProfile
