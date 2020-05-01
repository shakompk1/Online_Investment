import React from 'react';
import Style from './buy.module.scss';
import Counter from './counterInput';
import {getStockData} from "../data";

class Buy extends React.Component {
    state = {
        price: 0,
        amount: 1,
<<<<<<< HEAD
        companyName: false, // определить зачем нужен . пока не нужен. попытаться в заголовок закинуть
=======
>>>>>>> c230c3f8e0cfc62305be3895d48afa86927488fe
    }
    componentDidMount() {
        getStockData(this.props.code)
            .then(result => {this.setState({price: result.profile.price})})
    }

    add = () => {
<<<<<<< HEAD
        let amount = this.state.amount;
        if(amount < 20){
            amount++;
            this.setState({amount});
        }
    }
    sub = () => {
        let amount = this.state.amount;
        if(amount > 1){
            amount--;
            this.setState({amount});
        }
=======
        if(this.state.count < 20)
            this.setState({amount: this.state.amount+1});
    }
    sub = () => {
        if(this.state.count > 1)
            this.setState({amount: this.state.amount-1});
>>>>>>> c230c3f8e0cfc62305be3895d48afa86927488fe
    }
    render(){
        const {price, amount} = this.state;
        const counter = {add: this.add, sub: this.sub, value: amount};
        const purchasePrice = price * amount;
        const stock = {code: this.props.code, amount, purchasePrice}
        return <div className={Style.buyContainer}>
            <div className={Style.price}>{price.toFixed(2)}</div>
            <Counter {...counter}/>
            <div className={Style.amount}>Buy for {purchasePrice.toFixed(2)}</div>
            <button onClick={() => this.props.onClick(stock)} className={Style.buy}>Buy</button>
        </div>
    }
}

export default Buy;