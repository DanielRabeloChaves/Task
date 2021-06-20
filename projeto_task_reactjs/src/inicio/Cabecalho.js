import React from 'react'
import './Cabecalho.css'

import logo from '../login/Logo.png'

import {useHistory} from 'react-router-dom'

export default () => {
  const history = useHistory()

  return (
    <div className="cabeçalho">
     <img className="Logo1" src={logo} alt="Logo" />
      <h4 id="Contatenos" >
        <span className="spanCabecalho">Contate-nos</span>
      </h4>
      <h4 id="Noticias" >
        <span className="spanCabecalho">Noticias</span>
      </h4>
      <h4 className="Ajuda" >
        <span className="spanCabecalho">Ajuda</span>
      </h4>
      <h4 id="Cadastre-se" onClick={() => history.push('./login')} >
        <span className="spanCabecalho">Cadastre-se</span>
      </h4>
      <h4 id="Entrar" onClick={() => history.push('./login')} >
        <span className="spanCabecalho">Entrar</span>
      </h4>
      <button className="buttonCabecalho" onClick={() => history.push('./pesquisa')} id="Busca" type="submit">Buscar Freelancer</button>
    </div>
  )
}