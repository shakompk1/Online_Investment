import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Stock from "./components/Stock";
import Buy from "./Buy/Buy";
import BuyHeader from "./Buy/BuyHeader";
import {buyStock, getStocks, getUserData} from "./data";
import Header from "./Header/Header";
import AccountHeader from "./Account/AccountHeader";


class App extends Component {
    state = {
        balance: 0,
        stocks: [],
        companyName: '',
    }

    componentDidMount() {
        this.setUserData();
    }

    buyStock = stock => {
        buyStock(stock, this.state.balance)
            .then(() => this.setUserData());
    }

    getStockData = (companyName) => {
        this.setState({companyName});
    }

    setUserData = () => {
        getUserData().then(data => this.setState({
            balance: data[0].currentBalance.toFixed(2),
            stocks: data[1],
        }))
    }

    render() {
        const {balance} = this.state;
        return (
            <>
                <Route path="/account"><Header content={<AccountHeader StockChange={21} price={1.21}/>}/></Route>
                <Route path="/stock"><Stock balance={balance} onClick={this.getStockData}/></Route>
                <Route path="/buy/:code" render={props =>
                    <Buy {...props.match.params}
                         content={<BuyHeader сname={this.state.companyName}/>}
                         balance={balance} buy={this.buyStock}/>}
                />
            </>);
    }
}

export default App;
