import React from 'react'
import Header from '../Header'
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
        <Header offset={props.offset}/>
        <main>
            {props.children}
        </main>
        <Footer />
    </React.Fragment>
    
  )
}

export default Layout