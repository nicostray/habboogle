import React from 'react'
import '../styles/sectionProfile.css'
import FriendsProfile from './FriendsProfile'
import {useParams} from 'react-router-dom'
import GeneralProfile from './GeneralProfile'
import BadgesProfile from './BadgesProfile'
import RoomsProfile from './RoomsProfile'
import GroupsProfile from './GroupsProfile'

const SectionProfile = ({userInfo, reset}) => {
    const {section} = useParams()
    let actualSection, dataSection = '';

    switch (section){

        case undefined:
            actualSection = 'Visión general'
            dataSection = '1234'
            break;

        case 'friends':
            actualSection = 'Amigos'
            dataSection = userInfo.friends
            break;

        case 'badges':
            actualSection = 'Placas'
            dataSection = userInfo.badges
            break;

        case 'rooms':
            actualSection = 'Salas'
            dataSection = userInfo.rooms
            break;

        case 'groups':
            actualSection = 'Grupos'
            dataSection = userInfo.groups
            break;

        default:
            console.log('noo')
    }

    return (
        <section className='section-container'>
            <h2>{actualSection} {section!==undefined && <span className='undefined'>({dataSection.length})</span>}</h2>
            {section === undefined && <GeneralProfile userInfo={userInfo}/>}
            {section === 'friends' && <FriendsProfile userInfo={userInfo.friends} reset={reset}/>}
            {section === 'badges' && <BadgesProfile userInfo={userInfo.badges}/>}
            {section === 'rooms' && <RoomsProfile roomInfo={userInfo.rooms}/>}
            {section === 'groups' && <GroupsProfile groupInfo={userInfo.groups}/>}
        </section>
    )
}

export default SectionProfile
