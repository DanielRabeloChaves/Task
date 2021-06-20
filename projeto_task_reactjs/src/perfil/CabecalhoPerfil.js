import React from 'react'
import './CabecalhoPerfil.css'
import logo from '../login/Logo.png'


import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory()

    return (
    <div className="cabeçalho">
        <img onClick={() => history.push('./perfil')} className="Logo1" src={logo} alt="Logo" />
        <span id="Contatenos">Contate-nos</span>
        <span id="Noticias">Noticias</span>
        <span className="Ajuda">Ajuda</span>
        
        <input type="text" className="txtBusca" placeholder="Pesquisar Projeto..." />
        <button onClick={()=>history.push('./chat')} className="Chat" type="submit">Chat</button>
        <button onClick={() => history.push('./perfil')} className="MiniFoto" type="button">F</button>
        <span className="Sair" onClick={()=>history.push('./inicio')}>Sair</span>
    </div>
    )
}