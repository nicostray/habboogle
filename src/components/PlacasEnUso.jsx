import React from 'react'
import '../styles/placasEnUso.css'

const PlacasEnUso = (props) => {
    let placas = [{}]
    if (typeof(props.placas)==='object') placas = props.placas

    return (
        <div className='placasEnUso__container'>
            <h3>Placas en uso</h3>
            <div className='placasEnUso__container-placas'>
                {placas.map( element => element.badgeIndex!==undefined && <img className='placasEnUso__img' key={`${element.badgeIndex}`} src={`https://images.habbo.com/c_images/album1584/${element.code}.png`} alt={element.name}></img>)}
            </div>
        </div>
    )
}

export default PlacasEnUso
