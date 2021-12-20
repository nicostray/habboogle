import React from 'react'
import frankImage from '../images/frank-search.gif'
import '../styles/searchInfo.css'

const SearchInfo = () => {
    return (
        <div className='search-info'>
            <img src={frankImage} alt="" />
            <div className='search-information'>
                <h2>Información</h2>
                <p>En el listado de la izquierda encontrarás a todos los usuarios que tengan ese nombre
                 en los distintos hoteles pertenecientes a Habbo, solo haz click en el nombre del usuario y podrás ver su perfil.</p>
            </div>
        </div>
    )
}

export default SearchInfo
