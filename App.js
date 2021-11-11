import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import Header from './views/Header/Header.js';

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
      <Header />
      </React.Fragment>
    );
  }
}
