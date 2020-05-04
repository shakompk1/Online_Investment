import React from 'react';
import Style from './sell.module.scss';
import Counter from '../../styledComponents/counterInput';
import { getStockData } from "../../data";
import { NavLink } from "react-router-dom";
import Price from "../../styledComponents/Price";

class Sell extends React.Component {
    state = {
        id: 0,
        oldPrice: 0,
        price: 0,
        amount: 1,
        counter: 0,
        name: '',
        companyName: '',
    }
    componentDidMount() {
        const { id, companyName, oldPrice, name, counter, price } = this.props.location.state;
        this.setState({
            id: id,
            name: name,
            oldPrice: oldPrice,
            price: price,
            counter: counter,
            companyName: companyName
        })
    }
    // getStockData(this.props.code)
    //     .then(result => console.log(result))

    // 'add' and 'sub' allow us to choose the amount of purchasing stocks 
    add = () => {
        if (this.state.amount < this.state.counter)
            this.setState({ amount: this.state.amount + 1 });
    }
    sub = () => {
        if (this.state.amount > 1)
            this.setState({ amount: this.state.amount - 1 });
    }

    render() {
        const { price, amount, counter, id, oldPrice } = this.state;
        const stockLeft = { add: this.add, sub: this.sub, value: amount };
        const purchasePrice = price * amount;
        const stock = { purchasePrice: purchasePrice, counter: counter - amount, id: id, oldPrice: oldPrice }
        return <div className={Style.buyContainer}>
            <div className={Style.price}><Price price={price} /></div>
            <Counter {...stockLeft} />
            <div className={Style.amount}>
                Sell for &nbsp; <Price price={purchasePrice.toFixed(2)} />
            </div>
            <NavLink to="/">
                <button onClick={() => this.props.onClick(stock)} className={Style.buy}>Sell</button>
            </NavLink>
        </div>
    }
}

export default Sell;
