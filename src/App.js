import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">GS Assessment App</h1>
          <div className="App-title-alt">using React and Redux</div>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
