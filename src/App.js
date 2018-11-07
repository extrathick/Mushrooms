/* THIS IS THE ROOT OF THE APP */

import React, { Component } from 'react';
import logo from './pics/logo.svg'; //Import components/Images from folders like this
import './App.css';
import TestComponent from './components/test'
import SunburstController from './components/SunburstController'
import OdorSVG from './components/OdorSVG'
import ClassOdorSVG from './components/ClassOdorSVG'
import EdiblePoisonous from './components/EdiblePoisonous'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <EdiblePoisonous />
          <TestComponent />
          <SunburstController />
          <OdorSVG />
          <ClassOdorSVG />
        </header>
      </div>
    );
  }
}

export default App; //For each component you make, you'll need to export it.
