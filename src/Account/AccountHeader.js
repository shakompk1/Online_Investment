import React from "react";
import Style from './account.module.scss';
import {Green, Red} from "../AccountStockElement";

class AccountHeader extends React.Component{
    state = {
        price: 1,
        stockChange: 1,
    }

    componentDidMount() {

    }

    render() {
        const {price, stockChange} = this.state;
        let StockChangeRate = (stockChange * 100 / price).toFixed(2);
        return <div className={Style.accHeader}>
            <p className={Style.price}>{price}</p>
            {
                (stockChange > 0) ?
                    (<Green> ⯅ +{stockChange}$ (+{StockChangeRate}%) </Green>) :
                    (<Red> ⯆ {stockChange}$ ({StockChangeRate}%) </Red>)
            }
        </div>
    }
}

export default AccountHeader;