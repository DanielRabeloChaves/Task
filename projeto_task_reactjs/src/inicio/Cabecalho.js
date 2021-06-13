import React from 'react'
import './Cabecalho.css'

import logo from '../login/Logo.png'

import {useHistory} from 'react-router-dom'

export default () => {
  const history = useHistory()

  return (
    <div className="cabeçalho">
     <img id="Logo1" src={logo} alt="Logo" />
      <h4 id="Contatenos" >
        <span>Contate-nos</span>
      </h4>
      <h4 id="Noticias" >
        <span>Noticias</span>
      </h4>
      <h4 id="Ajuda" >
        <span>Ajuda</span>
      </h4>
      <h4 id="Cadastre-se" onClick={() => history.push('./login')} >
        <span>Cadastre-se</span>
      </h4>
      <h4 id="Entrar" onClick={() => history.push('./login')} >
        <span>Entrar</span>
      </h4>
      <button onClick={() => history.push('./pesquisa')} id="Busca" type="submit">Buscar Freelancer</button>
    </div>
  )
}