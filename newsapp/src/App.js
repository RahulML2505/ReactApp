// Imports
import React, { Component } from 'react';

// Components
import Navbar from './components/Navbar';
import News from './components/News';

// CSS
import './App.css';

export default class App extends Component {
  render() {
    let appName = "NewsMonkey";

    return (
      <>
        <Navbar title={appName} />
        <News appName={appName} />
      </>
    )
  }
}
