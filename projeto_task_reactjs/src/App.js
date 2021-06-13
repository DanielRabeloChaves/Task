import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import LoginScreen from './login/LoginScreen';
import InicioScreen from './inicio/InicioScreen';
import PerfilScreen from './perfil/PerfilScreen';
import PerfilEmpregadorScreen from './perfilEmpregador/PerfilEmpregadorScreen';
import PesquisaScreen from './pesquisa/PesquisaScreen'
import ChatScreen from './chat/ChatScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/'><InicioScreen/></Route>
        <Route path='/inicio'><InicioScreen/></Route>
        <Route path='/login'><LoginScreen/></Route>
        <Route path='/perfil'><PerfilScreen/></Route>
        <Route path='/vaga'><PerfilEmpregadorScreen/></Route>
        <Route path='/pesquisa'><PesquisaScreen/></Route>
        <Route path='/chat'><ChatScreen/></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
