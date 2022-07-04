import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Perfil from './components/Perfil';
import Iniciar from './components/Iniciar';
import Login from './components/Login';
import ListaTareas from './components/ListaTareas';
import Equipo from './components/Equipo';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/perfil' component={Perfil} />
        <Route path='/iniciar' component={Iniciar} />
        <Route path='/login' component={Login} />
        <Route path='/listatareas' component={ListaTareas} />
        <Route path='/equipo' component={Equipo} />
      </Layout>
    );
  }
}
