import React from 'react'
import Footer from '../inicio/Footer'
import CabecalhoPerfil from '../perfil/CabecalhoPerfil'
import Titulo from './Titulo'
import Formulario from './Formulario'


export default () => {

    return (
        <body>
            <header>
                <CabecalhoPerfil/>
            </header>
            <section>
                <article>
                    <Titulo/>
                </article>
                <aside>
                    <Formulario/>
                </aside>
            </section>
            <footer>
                <Footer/>  
            </footer>
        </body>
    )
}