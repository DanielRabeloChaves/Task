import React from 'react'
import logo from './Logo.png'
import './Section.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <section>
        <div class="Logo">
            <img id="Imagem" src={logo} alt="Logo" />
        </div>
    </section>
)