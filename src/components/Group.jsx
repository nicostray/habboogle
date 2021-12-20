import React from 'react'
import useDefined from '../hooks/useDefined'
import '../styles/group.css'

const Group = ({groupInfo}) => {

    const groupImage = `https://www.habbo.es/habbo-imaging/badge/${groupInfo.badgeCode}.gif`
    const linkSala = `https://www.habbo.es/hotel?room=${groupInfo.roomId}`
    
    const [respuesta, defined] = useDefined(groupInfo.description, 'Descripción no definida')

    const statusMember = () =>{
        let memberStatus = false

        if(groupInfo.isAdmin){
            memberStatus = 'Administrador'
        }else{
            memberStatus = 'Miembro'
        }

        return memberStatus
    }

    return (
        <div className='group'>
            <img src={groupImage} alt="icono del grupo" />
            <div className='group__info'>
                <h3>{groupInfo.name}</h3>
                <p className={`group__description ${defined===false && `undefined`}`}>{respuesta}</p>
            </div>
            <p className='group__status'>{statusMember()}</p>
            <a className='btn-primary group__btn' target="_blank" rel="noreferrer" href={linkSala}>Visitar sala</a>
        </div>
    )
}

export default Group
