import React, { Component } from 'react';
import AccountStock from './AccountStockElement.js';
import Stock from './stockElement.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountStock />
        <Stock />
      </div>
    );
  }
}

export default App;
