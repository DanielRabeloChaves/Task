import React from 'react'
import './Resultados.css'
import Hotmart1 from '../perfilEmpregador/hotmart1.png'
import Foto from '../perfil/Foto.png'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory();
    return (
    <div className="ResultadoBusca">
             <div>
                <input id="Pesquisa" type="text" placeholder="Barra de pesquisa" required />
            </div>
            <div className="resultado">

                <div className="perfilResultado">
                    <div>
                        <img onClick={()=> history.push('./vaga')} src={Hotmart1} alt="FotoVaga" />  
                    </div>
                    <div id="txt">
                        <div onClick={()=>history.push('./vaga')}>
                            <h3>Hotmart</h3>
                            <h6>Avaliações</h6>
                            <h5>Espaço disponivel para uma breve descrição da vaga.</h5>
                            <p>Valor Total: R$00,00</p>
                            <p>Publicado XX/YY/ZZ</p> 
                        </div>
                    </div>            
                </div> 

                <div className="perfilResultado">
                    <div>
                        <img src={Foto} alt="FotoVaga" />
                    </div>
                    <div id="txt">
                        <div>
                            <h3>Facebook</h3>
                            <h6>Avaliações</h6>
                            <h5>Espaço disponivel para uma breve descrição da vaga.</h5>
                            <p>Valor Total: R$00,00</p>
                            <p>Publicado XX/YY/ZZ</p>  
                        </div>     
                    </div>
                </div> 

                <div className="perfilResultado">
                    <div>
                        <img src={Foto} alt="FotoVaga" />       
                    </div>
                    <div id="txt">
                        <div>
                            <h3>Google</h3>
                            <h6>Avaliações</h6>
                            <p>Espaço disponivel para uma breve descrição da vaga.</p>
                            <p>Valor Total: R$00,00</p>
                            <p>Publicado XX/YY/ZZ</p> 
                        </div>     
                    </div>     
                </div> 

            </div>
    </div>
    )
}