import React, {useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Buscador from '../components/Buscador';
import Resultado from '../components/Resultado';
import '../styles/searchPage.css'
import { Helmet } from 'react-helmet';

const SearchPage = () => {
    const {nombre} = useParams();

    
    const [usuarios,setUsuarios] = useState([{}])

    useEffect(() => {
        setUsuarios([])
        const hoteles = ['com', 'es', 'de', 'fr', 'fi', 'it', 'nl', 'com.tr', 'com.br']
        const obtenerUsuarios = (hotel) => {
            axios(`https://www.habbo.${hotel}/api/public/users?name=${nombre}`)
                .then(res => {
                    const usuario = res.data;
                    setUsuarios(usuarios => [...usuarios, usuario])              
                })
        }
        hoteles.forEach(element => obtenerUsuarios(element))

    },[nombre])
    

    return (
        <Fragment>
            <Helmet>
                <title>{`Resultados de ${nombre}` }</title>
            </Helmet>
        <Buscador css='search'/>
        <div className='search-page'>
            <div className="search-container">
                <p className='search-encontrados'>Usuarios encontrados: {usuarios.length}</p>
                    {usuarios.map(element => (<Resultado key={`${element.uniqueId}`} userInfo={element} />))}
            </div>
        </div>
        </Fragment>
    )
}

export default SearchPage
