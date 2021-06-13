import React from 'react'
import './InicioScreen.css'

import Cabecalho from './Cabecalho'
import Baner from './Baner'
import Corpo from './Corpo'
import Footer from './Footer'

import {Link} from 'react-router-dom'

export default () => {
    return (
        <body>
            <header>
                <Cabecalho/>
            </header>
            <article>
                <Baner/>
            </article>
            <aside>
                <Corpo/>
            </aside>
            <footer>
                <Footer />
            </footer>
        </body>  
    )
}