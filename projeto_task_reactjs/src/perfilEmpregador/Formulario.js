import React from 'react'
import './Formulario.css'
import hotmart1 from './hotmart1.png'
import hotmart2 from './hotmart2.jpg'
import hotmart3 from './hotmart3.jpg'
import hotmart4 from './hotmart4.png'

export default () => (
    <div className="Formulario">
        <div className="Fotos">
                <img id="img1" src={hotmart1} alt="Foto" />
                <img id="img2" src={hotmart2} alt="Foto" />
                <img id="img3" src={hotmart3} alt="Foto" />
                <img id="img4" src={hotmart4} alt="Foto" />
            </div>
            <div className="subTitulo">
                <h1 id="nome">Hotmart</h1>
                <h4>Avaliações</h4>
                <button id="Chat2" type="submit">Chat</button>
            </div>
            <div className="texto">
                <p><span className="cor">Local</span> . Belo Horizonte MG</p>
                <p>Espaço disponivel para uma breve descrição da vaga.
                    Podendo conter titulos, beneficios e conquistas para melhor
                    informar o Freelancer, com número de caracteres limitados.</p>
                <h4>email@exemplo.com</h4>
            </div>
            <div className="candidatar">
                <h4>(31) 1122-3344</h4>
                <button id="ButtonCandidatar" type="submit">Candidatar</button>
            </div>
    </div>
)