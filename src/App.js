import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import Home from './views/Home/Home.js';
import About from './views/About/About.js';
import Help from './views/Help/Help.js';


class Header extends Component{
  constructor(){
    super();
      this.state= {
        view : 'home'
      }
    }
  render(){
    const View = ()=>{
        if(this.state.view == 'home')
          return <Home />
        else if(this.state.view == 'about')
          return <About />
        else if(this.state.view == 'help')
        return <Help />
      }
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
                <a onClick={()=> this.setState({view : 'home'})} className="nav-link" href="#">
                  Home
                  </a>
              </li>
              <li className="nav-item">
                  <a onClick={()=> this.setState({view : 'about'})}className="nav-link" href="#">
                    About
                  </a>
              </li>
              <li className="nav-item">
                  <a onClick={()=> this.setState({view : 'help'})} className="nav-link" href="#">
                    Help
                  </a>
            </li>
          </ul>
        </nav>
      <View /> {/* panggil component View */}
    </div>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
      <Header />
      </React.Fragment>
    );
  }
}
