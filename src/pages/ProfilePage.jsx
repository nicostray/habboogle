import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import '../styles/profilePage.css'
import Profile from '../components/Profile';
import MenuProfile from '../components/MenuProfile';
import Cargando from '../components/Cargando';
import SectionProfile from '../components/SectionProfile';
import Buscador from '../components/Buscador';
import UserNotFound from './UserNotFound';
import { Helmet } from 'react-helmet';

const ProfilePage = () => {
    const {idUsuario} = useParams();
    const [usuario,setUsuario] = useState('')
    const [loading,setLoading] = useState(true)
    const [userExist, setUserExist] = useState(true);
    const resetUser = () =>{
        setUsuario('')
        setLoading(true)
        setUserExist(true)
    }


    useEffect(() => {
        axios.get(`https://www.habbo.com/api/public/users/${idUsuario}/profile`)
            .then(res =>{
                const datos = res.data;
                setUsuario(datos)
                setLoading(false)
            }).catch(() =>{
                setUserExist(false)
            })
        
    },[idUsuario])

    if (loading === true){
        if(userExist===false){
            return <UserNotFound />
        }
         return<Cargando /> 
    }else{
        return(
        <main className='profilePage__body'>
            <Helmet>
                <title>{`Perfil de ${usuario.user && usuario.user.name}`}</title>
            </Helmet>
            <Buscador css='profile'/>
            <div className='profilePage__container'>
                <Profile userInfo={usuario}/>
                <MenuProfile userInfo={usuario}/>
                <SectionProfile userInfo={usuario} reset={resetUser}/>
            </div>
            
        </main>)
    }
}

export default ProfilePage
