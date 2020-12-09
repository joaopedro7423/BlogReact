import { render } from '@testing-library/react';
import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import './global.css';
import Home from './components/Home/index';
import Header from './components/Header';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
