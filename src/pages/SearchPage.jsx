import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Buscador from '../components/Buscador';
import Resultado from '../components/Resultado';
import { Fragment } from 'react/cjs/react.production.min';

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
                    document.title=`Resultados de ${nombre}`                  
                })
        }
        hoteles.forEach(element => obtenerUsuarios(element))
        
    },[nombre])
    

    return (
        <Fragment>
            <Buscador css='search'/>
            <div className="search-container">
                {usuarios.map(element => (<Resultado key={`${element.uniqueId}`} userInfo={element} />))}
                {/* {usuarios.map(element => (<p>{element.uniqueId} hotel: {element.uniqueId && element.uniqueId.substr(2,2)}</p>))} */}
                
            </div>
        </Fragment>
    )
}

export default SearchPage
