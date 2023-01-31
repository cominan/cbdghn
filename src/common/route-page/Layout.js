import React from 'react'
import AuthProvider from '../../app/Context/AuthProvider'
import Footer from '../../component/footer/Footer'
import Header from '../../component/headerComponent/Header'

export const Layout = ({ children }) => {

    return (
        <div>
            <AuthProvider>
                <Header></Header>
            </AuthProvider>
            {children}
            <Footer></Footer>
        </div>
    )
}

