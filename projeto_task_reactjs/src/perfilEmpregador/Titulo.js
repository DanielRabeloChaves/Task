import React from 'react'
import './Titulo.css'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory();
    return (
    <div className="titulo">
        <h1>Desenvolvedor Full Stack</h1>
        <h1 onClick={()=>history.goBack('')} id="voltar1">Voltar</h1>
    </div>
    )
}