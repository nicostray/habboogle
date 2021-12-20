import React from 'react'
import useDefined from '../hooks/useDefined'
import '../styles/placasEnUso.css'

const PlacasEnUso = ({placas}) => {
    let placasArray = ''
    if(placas.length!==0){
        placasArray=placas
    }
    
    const [respuesta, defined] = useDefined(placasArray,'No hay placas seleccionadas')
    
    return (
        <div className='placasEnUso__container'>
            <h3>Placas en uso</h3>
            <div className='placasEnUso__container-placas'>
                {defined ? placasArray.map(element => 
                <img className='placasEnUso__img' 
                    key={`${element.badgeIndex}`} 
                    src={`https://images.habbo.com/c_images/album1584/${element.code}.png`} 
                    alt={element.name}></img>)
                :   
                <p className='undefined'>{respuesta}</p>}
            </div>
        </div>
    )
}

export default PlacasEnUso
