// the main script running from start page

import React, { Component } from 'react';
import { Route } from "react-router-dom"; // to get more information about "react-router-dom" see https://reacttraining.com/react-router/web/guides/quick-start 
import Stock from "./components/Stock";
import Account from "./components/Account/Account";
import Buy from "./components/Buy/Buy";
import Sell from "./components/Sell/Sell";
import { sellStock, buyStock, getUserData } from "./data";
import Header from "./components/Header/Header";
import Balance from "./components/Footer";


class App extends Component {
    state = {
        balance: 0,
    }

    componentDidMount() {
        this.setUserData();
    }

    buyStock = stock => {
        buyStock(stock, this.state.balance)
            .then(() => this.setUserData());
    }

    // CHANGES:
    sellStock = stock => {
        sellStock(stock, this.state.balance)
            .then(() => this.setUserData());
    }

    setUserData = () => {
        getUserData()
            .then(data => this.setState({
                balance: data[0].currentBalance.toFixed(2),
            }))
            .catch(console.log)
    }

    render = () =>
        <>
            <Header />
            <Route exact path="/"><Account /></Route>
            <Route path="/stock"><Stock /></Route>
            <Route path="/buy/:code" render={props => <Buy {...props.match.params} onClick={this.buyStock} />} />
            <Route path="/sell/:code" render={props => <Sell {...props} onClick={this.sellStock} />} />
            <Balance amount={this.state.balance} />
        </>
}

export default App;
