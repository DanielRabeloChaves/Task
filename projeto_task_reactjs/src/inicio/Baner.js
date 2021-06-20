import React from 'react'
import './Baner.css'
import logo from '../login/Logo.png'


export default () => (
    <div className="baner">
        <img className="logoBaner" src={logo} alt="Logo" />
        <p>Milhares de <span class="cor">freelancers</span> prontos para começar
        a trabalhar no seu projeto</p>
    </div> 
)