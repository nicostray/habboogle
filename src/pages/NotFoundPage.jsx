import React, {Fragment} from 'react'

import Buscador from '../components/Buscador'
import frank from '../images/404.gif'
import '../styles/notfoundpage.css'
const NotFoundPage = () => {
    return (
        <Fragment>
            <Buscador css='profile' />
            <div className='not-found'>
                <img src={frank} alt="" />
                <h1>Lo sentimos, la página no existe</h1>
            </div>
        </Fragment>
    )
}

export default NotFoundPage
