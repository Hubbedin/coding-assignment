import React, { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

type Props = {
  children?: ReactNode
  title?: string
  withNavbar?: boolean
}

const Layout = ({ children, title = 'This is the default title', withNavbar = true }: Props) => {
    return(
        <div className="container">
            <Header/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout