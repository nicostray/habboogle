import React from 'react'
import '../styles/generalProfile.css'
import Card from './Card'

const GeneralProfile = ({userInfo}) => {
    let friends, badges, rooms, groups, userId = ''
    if(userInfo!==undefined){
        userId = userInfo.user.uniqueId
        friends = userInfo.friends.length
        badges = userInfo.badges.length
        rooms = userInfo.rooms.length
        groups = userInfo.groups.length
    }
    return (
        <div className='cards'>
            <Card  name='amigos' userInfo={friends} id={0} userId={userId}/>
            <Card  name='placas' userInfo={badges} id={1} userId={userId}/>
            <Card  name='salas' userInfo={rooms} id={2} userId={userId}/>
            <Card  name='grupos' userInfo={groups} id={3} userId={userId}/>
        </div>
    )
}

export default GeneralProfile
