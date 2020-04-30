import React, { Component } from 'react';
import Header from "./Header/Header";
import Routing from "./Routing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routing/>
      </div>
    );
  }
}

export default App;
