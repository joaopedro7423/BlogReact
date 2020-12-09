import { render } from '@testing-library/react';
import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase';

import './global.css';
import Home from './components/Home/index';
import Header from './components/Header';

class App extends Component{
  
  state ={
    firebaseInitialized: false
  };
  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      this.setState({firebaseInitialized: resultado});
    })
  }

  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    ):(
      <h1>Carregando...</h1>
    );
  }
}

export default App;
