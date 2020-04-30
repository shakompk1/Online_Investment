import React, { Component } from 'react';
import Header from "./Header/Header";
import Routing from "./Routing";
import Balance from "./Balance";
// import AccountStock from "./AccountStockElement";
import Counter from "./counterInput";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routing/>
        <Balance amount="568"/>
        {/* <AccountStock /> */}
        <Counter />
      </div>
    );
  }
}

export default App;
