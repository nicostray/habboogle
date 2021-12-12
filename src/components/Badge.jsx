import React from 'react'
import '../styles/badge.css'
const Badge = ({badgeInfo}) => {
    const imagenPlaca = `https://images.habbo.com/c_images/album1584/${badgeInfo.code}.png`

    return (
        <div className='badge'>
            <img src={imagenPlaca} alt={`${badgeInfo.name}`} />
        </div>
    )
}

export default Badge
