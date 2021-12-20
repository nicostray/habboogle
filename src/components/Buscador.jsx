import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../images/habboogle.png'
import '../styles/buscador.css'
import classNames from 'classnames'

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
        
            <div className={classNames({[`buscador-${css}`] : css})}>
                <img className={classNames({[`buscador__imagen-${css}`] : css})} onClick={() => css!=='inicio' && navigate('/')} src={logo} alt="logo de habboogle" />
                <div className={classNames({[`buscador__input-btn-${css}`] : css})}>
                <div className={classNames({[`buscador__input-container-${css}`] : css})}>
                    <i className="fas fa-search"></i>
                    <input className='buscador__input' type='text' onChange={handleInputChange} onKeyDown={(e) => e.key==='Enter' && buscar()} autoComplete="off" />
                </div>

                <button className={classNames('btn-primary',{[`buscador__btn-${css}`] : css})} onClick={buscar}>Buscar</button>
                </div>
            </div>
    )
}

export default Buscador
