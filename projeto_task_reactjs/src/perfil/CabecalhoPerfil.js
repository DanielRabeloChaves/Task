import React from 'react'
import './CabecalhoPerfil.css'
import logo from '../login/Logo.png'


import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory()

    return (
    <div className="cabeçalho">
        <img onClick={() => history.push('./perfil')} id="Logo1" src={logo} alt="Logo" />
        <span id="Contatenos">Contate-nos</span>
        <span id="Noticias">Noticias</span>
        <span id="Ajuda">Ajuda</span>
        
        <input type="text" id="txtBusca" placeholder="Pesquisar Projeto..." />
        <button id="Chat" type="submit">Chat</button>
        <button onClick={() => history.push('./perfil')} id="MiniFoto" type="button">F</button>
        <span onClick={()=>history.push('./inicio')}>Sair</span>
    </div>
    )
}