import React, { Component } from 'react';
import './App.css';
import './styles.css';

import OpenWapi from './OpenWapi.js';

class App extends Component {

  render() {

    return (
      <div className="App">

        <OpenWapi city='Lisbon' />

      </div>

    );
  }
}

export default App;
