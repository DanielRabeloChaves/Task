import React from 'react'
import './FundoPerfil.css'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory();

    return (
    <div className="Perfil">
        <button id="Foto" type="button">F</button>
        <div id="Dados">
            <h2>Nome de Usuario</h2>
            <p>Profissão Freelancer</p>
            <p>email@exemplo.com</p>
            <p>(11) 1122-3344</p>
        </div>
        <button onClick={() => history.push('./pesquisa')} id="encontreTrabalho" type="submit">Encontre Trabalho</button> 
    </div>
    )
}