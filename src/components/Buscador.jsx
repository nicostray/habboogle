import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../images/habboogle.png'
import '../styles/buscador.css'
const Buscador = ({css}) => {

    const navigate = useNavigate();
    const [nombre,setNombre] = useState('')

   const handleInputChange = ( {target}) => {
       setNombre(target.value);
    }

    const buscar = () => {
        navigate(`/search/${nombre}`)
    }


    return (
        <div className={css==='inicio' ? 'buscador-inicio' : 'buscador-search'}>
            <img className={css==='inicio' ? 'buscador__imagen-inicio' : 'buscador__imagen-search'} onClick={() => css!=='inicio' && navigate('/')} src={logo} alt="logo de habboogle" />
            <div className={css==='inicio' ? 'buscador__input-container-inicio' : 'buscador__input-container-search'}>
                <i className="fas fa-search"></i>
                <input className='buscador__input' placeholder='Ingrese el nombre del habbo' type='text' onChange={handleInputChange} onKeyDown={(e) => e.key==='Enter' && buscar()} autoComplete="off" />
            </div>            
            <button className='buscador__btn' onClick={buscar}>Buscar</button>
        </div>
    )
}

export default Buscador
