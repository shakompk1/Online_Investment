import React from 'react';
import Style from './buy.module.scss';
import Main from "../Main";
import Counter from './counterInput';

class Buy extends React.Component {
    state = {
        price: 0,
        count: 1,
        companyName: false, // определить зачем нужен . пока не нужен. попытаться в заголовок закинуть
    }
    componentDidMount() {
        const code = this.props.code;
        fetch('https://financialmodelingprep.com/api/v3/company/profile/'+code)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    companyName: result.profile.companyName,
                    price: result.profile.price,
                })
            })
    }

    add = () => {
        let count = this.state.count;
        if(count < 20){
            count++;
            this.setState({count});
        }
    }
    sub = () => {
        let count = this.state.count;
        if(count > 1){
            count--;
            this.setState({count});
        }
    }
    render(){
        const {price, count} = this.state;
        const counter = {add: this.add, sub: this.sub, value: count};
        const purchasePrice = price * count;
        const stock = {code: this.props.code, count, purchasePrice}
        return <div className={Style.buyContainer}>
            <div className={Style.price}>{price.toFixed(2)}</div>
            <Counter {...counter}/>
            <div className={Style.amount}>Buy for {purchasePrice.toFixed(2)}</div>
            <button onClick={() => this.props.buy(stock)} className={Style.buy}>Buy</button>
        </div>
    }
}

export default Main(Buy);