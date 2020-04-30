import React, { Component } from 'react';
import Header from "./Header/Header";
import Routing from "./Routing";
import Balance from "./Balance";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routing/>
        <Balance amount="568"/>
      </div>
    );
  }
}

export default App;
