import React from 'react'
import './Servicos.css'
import foto from './Foto.png'
import hotmart1 from '../perfilEmpregador/hotmart1.png'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory();

    return (
    <div className="Serviços">
        <h2>Serviços Prestados</h2>
        <div id="ServiçosPrestados">
        <img onClick={()=>history.push('./vaga')} id="FotoContratante"src={hotmart1} alt="Foto Contratante"/>
            <div onClick={()=>history.push('./vaga')} className="primeiro">
                <h3>Nome</h3>
                <h5>SEGUIMENTO DE ATUAÇÃO</h5>
                <span id="valorTotal">Valor Total: R$00,00</span>
            </div>
            <div className="segundo">
                <button id="chat1">chat</button>
                <span onClick={()=>history.push('./vaga')} id="Data">DATA XX/YY/ZZ</span> 
            </div>   
    </div>

        <div id="ServiçosPrestados">
        <img id="FotoContratante"src={foto} alt="Foto Contratante"/>
            <div className="primeiro">
                <h3>Nome</h3>
                <h5>SEGUIMENTO DE ATUAÇÃO</h5>
                <span id="valorTotal">Valor Total: R$00,00</span>
            </div>
            <div className="segundo">
                <button id="chat1">chat</button>
                <span id="Data">DATA XX/YY/ZZ</span> 
            </div>   
        </div>
        
        <div id="ServiçosPrestados">
        <img id="FotoContratante"src={foto} alt="Foto Contratante"/>
            <div className="primeiro">
                <h3>Nome</h3>
                <h5>SEGUIMENTO DE ATUAÇÃO</h5>
                <span id="valorTotal">Valor Total: R$00,00</span>
            </div>
            <div className="segundo">
                <button id="chat1">chat</button>
                <span id="Data">DATA XX/YY/ZZ</span> 
            </div>   
        </div>

        <div id="ServiçosPrestados">
        <img id="FotoContratante"src={foto} alt="Foto Contratante"/>
            <div className="primeiro">
                <h3>Nome</h3>
                <h5>SEGUIMENTO DE ATUAÇÃO</h5>
                <span id="valorTotal">Valor Total: R$00,00</span>
            </div>
            <div className="segundo">
                <button id="chat1">chat</button>
                <span id="Data">DATA XX/YY/ZZ</span> 
            </div>   
        </div>
        
    </div>
    )
}