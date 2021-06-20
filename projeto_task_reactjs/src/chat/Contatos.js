import React from 'react'
import { useHistory } from 'react-router-dom'
import Foto1 from './Foto1.jpg'
import Foto2 from './Foto2.jpg'
import './Contatos.css'

export default () => {
    const history = useHistory()
    return (
        <div className="Chat5">
            <div className="ChatVoltar">
                <button onClick={()=>history.goBack('')} id="VoltarPagina">Voltar</button>
            </div>   
           <div class="container">
                <img src={Foto1} alt="Avatar"/>
                <p>Espaço reservado para interação entre contratante e Freelancer.</p>
                <span class="time-right">11:00</span>
            </div>

            <div class="container darker">
                <img src={Foto2} alt="Avatar" class="right"/>
                <p>Gostaria de participar do processo seletivo de Desenvolvimento Web. </p>
                <span class="time-left">11:01</span>
            </div>

            <div class="container">
                <img src={Foto1} alt="Avatar"/>
                <p>Serviço vai ficar por R$300,00</p>
                <span class="time-right">11:02</span>
            </div>

            <div class="container darker">
                <img src={Foto2} alt="Avatar" class="right"/>
                <p>Comentários sobre a vaga disponivel, com número de caracteres limitado.</p>
                <span class="time-left">11:05</span>
            </div> 
            <div className="Mandar">
                <input className="conversar" type="text" placeholder="Digite uma mensagem" required />
                <button className="Enviar">Enviar</button>
            </div>
               
        </div>  
    )
}