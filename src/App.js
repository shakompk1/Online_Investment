import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Stock from "./components/Stock";
import Account from "./components/Account";
import Buy from "./Buy/Buy";
import {buyStock, getUserData} from "./data";
import Header from "./Header/Header";
import Balance from "./styledComponents/Balance";


class App extends Component {
    state = {
        balance: 0,
        stocks: [],
    }

    componentDidMount() {
        this.setUserData();
    }

    buyStock = stock => {
        buyStock(stock, this.state.balance)
            .then(() => this.setUserData());
    }

    setUserData = () => {
        getUserData().then(data => this.setState({
            balance: data[0].currentBalance.toFixed(2),
            stocks: data[1],
        }))
            .catch(err => console.log(err))
    }

    render() {
        const {balance} = this.state;
        return (
            <>
                <Header/>
                <Route exact path="/"><Account/></Route>
                <Route path="/stock"><Stock /></Route>
                <Route path="/buy/:code" render={props =><Buy {...props.match.params} onClick={this.buyStock}/>}/>
                <Balance amount={balance}/>
            </>);
    }
}

export default App;
