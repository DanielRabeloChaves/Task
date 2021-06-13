import React from 'react'
import Footer from '../inicio/Footer'


import CabecalhoPerfil from './CabecalhoPerfil'
import FundoPerfil from './FundoPerfil'
import Servicos from './Servicos'

export default () => {
    return (
        <body>
            <header>
                <CabecalhoPerfil/>
            </header>
            <article>
                <FundoPerfil/>
            </article>
            <aside>
                <Servicos/>
            </aside>
            <footer>
                <Footer/>  
            </footer>
        </body>
    )
}