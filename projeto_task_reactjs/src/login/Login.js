import React from 'react'
import './Login.css'
import logo from './Logo.png'
import Face from './Facebook.png'
import Google from './Google.png'

import { useHistory } from 'react-router-dom'
export default () => {
    const history = useHistory()
    return (
    <div className="Login">
        <img onClick={() => history.push('./')} id="logoLogin" src={logo} alt="logo" />
        <div className="Linha"></div>
        <form className="form" method="POST" action="/paginas/home.html">
            <h2>Login</h2>
            <img onClick={() => history.push('./perfil')} id="imgFACEBOOK"src={Face} alt="Facebook"/>
            <img onClick={() => history.push('./perfil')} id="imgGOOGLE" src={Google} alt="Google"/>
            <input id="input-login" type="email" placeholder="E-mail" required />
            <input id="input-senha" type="password" placeholder="Senha" required />
            <button onClick={() => history.push('./perfil')} id="ENTRAR" type="submit">ENTRAR</button> 
            <h4 id="CriarConta">Ainda não possui uma conta? Clique aqui.</h4>
            <p onClick={() => history.push('./')} id="CriarConta">Voltar</p>
        </form>
    </div>
    )
}