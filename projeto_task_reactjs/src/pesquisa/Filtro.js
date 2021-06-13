import React from 'react'
import './Filtro.css'

export default () => (
    <div className="Filtro">
        <h1>FILTRO</h1>
            <h3>Categoria de projeto</h3>
            <p><input type="radio" name="Categoria" checked value="Todos" />Todas as Categorias</p>
            <p><input type="radio" name="Categoria" value="TI" />TI e Programação</p>
            <p><input type="radio" name="Categoria" value="UI" />Design e Multimedia</p>
            <p><input type="radio" name="Categoria" value="Traducao" />Tradução e conteúdos</p>
            <p><input type="radio" name="Categoria" value="Marketing" />Marketing e Vendas</p>
            <p><input type="radio" name="Categoria" value="SuporteADM" />Suporte Administrativo</p>
            <p><input type="radio" name="Categoria" value="Juridico" />Jurídico</p>
            <p><input type="radio" name="Categoria" value="FinancasADM" />Finanças e Administração</p>
            <p><input type="radio" name="Categoria" value="Engenharia" />Engenharia e Manufatura</p>
            <h3>Data de publicação</h3>
            <p><input type="radio" name="Data" checked value="Todos" />Em qualquer data</p>
            <p><input type="radio" name="Data" value="Dia" />Nas ultimas 24 horas</p>
            <p><input type="radio" name="Data" value="Semana" />Na ultima semana</p>
            <p><input type="radio" name="Data" value="Mes" />No ultimo Mês</p>
            <p><input type="radio" name="Data" value="Ano" />No ultimo ano</p>
            <h3>Modalidade de trabalho</h3>
            <p><input type="radio" name="Modalidade" checked value="Todos" />Todos</p>
            <p><input type="radio" name="Modalidade" value="Fixo" />Preço fixo</p>
            <p><input type="radio" name="Modalidade" value="PorHora" />Por hora</p>
            <h3>Localização do cliente</h3>
            <p id="Uf">
                <select name="uf">
                    <option>Todas as regiões</option>
                    <optgroup label="Região Sudeste">
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
                        <option>Espírito Santo</option>
                        <option>Minas Gerais</option>
                    </optgroup>
                    <optgroup label="Região Norte">
                        <option>Amazonas</option>
                        <option>Roraima</option>
                        <option>Amapá</option>
                    </optgroup>
                    <optgroup label="Região Nordeste">
                        <option>Maranhão</option>
                        <option>Piauí</option>
                        <option>Ceará</option>
                    </optgroup>
                </select>
            </p>
    </div>
)