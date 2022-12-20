import React from 'react'
import AuthProvider from '../app/Context/AuthProvider'
import Footer from '../component/footer/Footer'
import Header from '../component/headerComponent/Header'
import RoutesPage from './route-page/RoutesPage'


export default function CommonTemplate() {
    return (
        <div className='container'>
            <AuthProvider>
                <Header />
            </AuthProvider>
            <RoutesPage />
            <Footer />
        </div>
    )
}
