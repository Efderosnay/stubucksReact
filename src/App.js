import React, { Component } from 'react';
import './App.css';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
      </div>

    );
  }
}

export default App;
