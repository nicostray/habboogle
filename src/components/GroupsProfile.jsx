import React, { useState } from 'react'
import '../styles/groupsProfile.css'
import Group from './Group'
import MiniBuscador from './MiniBuscador'

const GroupsProfile = ({groupInfo}) => {

    const [listaDeGrupos, setlistaDeGrupos] = useState(groupInfo)

    const buscarGroup = (nombreGrupo) => {
       const encontrado = groupInfo.filter((nombre) => nombre.name.toLowerCase().includes(nombreGrupo) === true)
       setlistaDeGrupos(encontrado)
    }
    
    return (
        <div className='groups'>
            <MiniBuscador buscar={buscarGroup}/>
            <div className='groups__container'>
                {listaDeGrupos.map(element => <Group groupInfo={element}/>)}
            </div>
        </div>
    )
}

export default GroupsProfile
