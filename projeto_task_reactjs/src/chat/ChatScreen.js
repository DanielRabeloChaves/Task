import React from 'react'
import { useHistory } from 'react-router-dom'
import './ChatScreen.css'
import Footer from '../inicio/Footer'
import CabecalhoPerfil from '../perfil/CabecalhoPerfil'
import Contatos from './Contatos'


export default () => {
    const history = useHistory();
    return (
        <body>
            <header>
                <CabecalhoPerfil/>
            </header>
            <article>
                <Contatos/>
            </article>
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}