import React from 'react'
import './Corpo.css'

export default () => (
    <>
        <h1 id="Funcionamento">Como funciona?</h1>
        <div className="divi">
            <div className="containerCorpo">
            <h3>Publicar</h3>
            <p>Conte-nos em poucas palavras o que você precisa. É gratis e sem compromisso!</p>
            </div>
            <div className="containerCorpo">
            <h3>Selecionar</h3>
            <p>Receba propostas de excelentes freelancers. Escolha o melhor para o seu projeto.</p>
            </div>
            <div className="containerCorpo">
            <h3>Começar</h3>
            <p>Você faz o pagamento com total garantia sobre o valor depositado e já começa a trabalhar :)</p>
            </div>
            <div className="containerCorpo">
            <h3>Aceitar</h3>
            <p>Receba o projeto concluído e libere o valor depositado ao freelancer.</p>
            </div>
        </div>
        <button id="Publicar" type="submit">Publique um projeto</button>
    </>
)