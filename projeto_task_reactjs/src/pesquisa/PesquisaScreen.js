import React from 'react'
import Footer from '../inicio/Footer'
import CabecalhoPerfil from '../perfil/CabecalhoPerfil'
import Filtro from './Filtro'
import Resultados from './Resultados'


export default () => {
    return (
        <body>
            <header>
                <CabecalhoPerfil/>
            </header>
            <section>
                <div className="gambiarra">
                    <article>
                        <Filtro/>
                    </article>
                    <aside>
                        <Resultados/>
                    </aside>
                </div> 
            </section>
            <footer>
                <Footer/>  
            </footer>
        </body>
    )
}