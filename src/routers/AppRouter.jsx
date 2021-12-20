import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Footer from '../components/Footer'
import InicioPage from '../pages/InicioPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProfilePage from '../pages/ProfilePage'
import SearchPage from '../pages/SearchPage'
const AppRouter = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/profile/:idUsuario" element={<ProfilePage/>} />
                <Route exact path="/profile/:idUsuario/:section" element={<ProfilePage />} />
                <Route exact path="/search/:nombre" element={<SearchPage />} />
                <Route exact path="/search/" element={<Navigate to="/"/>}/> 
                <Route exact path="/" element={<InicioPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRouter
