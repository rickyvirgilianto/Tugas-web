import React, { Component } from 'react';
import Card from './component/Card/Card';
import Input from './component/Input/Input';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      your_name : '',
      status : ''
    }
  }

  render(){
    return(
      <React.Fragment>
      <div style={{background:'#E9EBEE', height:'750px'}}>
      <h2 style={{width:'550px', margin:'auto', textAlign:'center', color:'#4d90fe'}}>
      Sistem Informasi E-Biz
      </h2>
      <Input getValues={(name, value)=> this.setState({[name] : value})} />

      <Card.Container>
        <Card.Header>{this.state.your_name}</Card.Header>
        <Card.Body>
        <p>{this.state.status}</p>
        </Card.Body>
      </Card.Container>
      </div>
      </React.Fragment>
    );
  }
}
