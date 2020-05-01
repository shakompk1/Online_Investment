import React from "react";
import Style from './account.module.scss';
import {Green, Red} from "../AccountStockElement";
import {getStockData, getUserData} from "../data";

class AccountHeader extends React.Component{
    state = {
        currentInvestment: 1,
        stocksDifference: 1,
        differenceRate: 1,
    }

    componentDidMount() {
        let currentInvestment = 0;
        let actualPrices = 0;
        getUserData()
            .then(userData => userData[1])
            .then(stocks => stocks.map(stock => {
                const {code, purchasePrice, amount} = stock;
                currentInvestment += purchasePrice / amount;
                return code;
            }))
            .then(codes => Promise.all(codes.map(code => getStockData(code)
                        .then(data => {actualPrices += data.profile.price})
                ))
            )
            .then(() => {
                const stocksDifference = (currentInvestment - actualPrices).toFixed(2);
                const differenceRate = ((stocksDifference * 100) / currentInvestment).toFixed(2);
                this.setState({
                    currentInvestment:currentInvestment.toFixed(2),
                    stocksDifference,
                    differenceRate
                })})
            .catch(() => 'Произошла ошибка во время вычисления разницы!')
    }

    render() {
        const {currentInvestment, stocksDifference, differenceRate} = this.state;
        return <div className={Style.accHeader}>
            <p className={Style.price}>{currentInvestment}</p>
            {
                (differenceRate > 0) ?
                    (<Green> ⯅ +{stocksDifference}$ (+{differenceRate}%) </Green>) :
                    (<Red> ⯆ {stocksDifference}$ ({differenceRate}%) </Red>)
            }
        </div>
    }
}

export default AccountHeader;