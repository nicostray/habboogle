import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import '../styles/profilePage.css'
import Profile from '../components/Profile';
import MenuProfile from '../components/MenuProfile';
import Cargando from '../components/Cargando';
import GeneralProfile from '../components/GeneralProfile';
import FriendsProfile from '../components/FriendsProfile';
import BadgesProfile from '../components/BadgesProfile';

const ProfilePage = () => {
    const {idUsuario} = useParams();
    const {section} = useParams();
    const [usuario,setUsuario] = useState('')
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://www.habbo.com/api/public/users/${idUsuario}/profile`)
            .then(res =>{
                const datos = res.data;
                setUsuario(datos)
                setLoading(false)
                document.title=`Perfil de ${usuario.user && usuario.user.name}`
            })
        
    },[idUsuario, usuario.user])


    if (loading === true){
         return<Cargando />
    }else{
        return(
        <main className='profilePage__body'>
            <div className='profilePage__container'>
                <Profile userInfo={usuario}/>
                <MenuProfile userInfo={usuario}/>
                <section className='profilePage__info-container'>
                    {section === undefined && <GeneralProfile userInfo={usuario}/>}
                    {section === 'friends' && <FriendsProfile userInfo={usuario.friends}/>}
                    {section === 'badges' && <BadgesProfile userInfo={usuario.badges}/>}
                </section>
            </div>
            
        </main>)
    }
}

export default ProfilePage
