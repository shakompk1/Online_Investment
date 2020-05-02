import React from "react";
import Style from './account.module.scss';
import {PriceP, PriceSpan} from "../../styledComponents/componentsStyle";
import {getStockData, getUserData} from "../../data";
import Difference from "../../styledComponents/Difference";

class AccountHeader extends React.Component{
    state = {
        currentInvestment: 0,
        priceDifference: 0,
        differenceRate: 0,
    }

    componentDidMount() {
        let currentInvestment = 0;
        let actualPrices = 0;
        getUserData()
            .then(userData => userData[1])
            .then(stocks => stocks.map(stock => {
                const {code, purchasePrice, amount} = stock;
                currentInvestment += purchasePrice;
                return {code,amount};
            }))
            .then(stocks => Promise.all(stocks.map(stock => getStockData(stock.code)
                        .then(data => {actualPrices += data.profile.price * stock.amount})
                ))
            )
            .then(() => {
                const priceDifference = (currentInvestment - actualPrices).toFixed(2);
                const differenceRate = ((priceDifference * 100) / currentInvestment).toFixed(2);
                this.setState({
                    currentInvestment:currentInvestment.toFixed(2),
                    priceDifference,
                    differenceRate
                })})
            .catch(() => 'Произошла ошибка во время вычисления разницы!')
    }

    render() {
        const {currentInvestment, priceDifference, differenceRate} = this.state;
        return <div className={Style.accHeader}>
                <PriceP>{Math.trunc(currentInvestment)}.
                    <PriceSpan> {Math.trunc((currentInvestment % 1).toFixed(2) * 100)} $ </PriceSpan>
                </PriceP>
                <Difference {...{priceDifference, differenceRate}}/>
        </div>
    }
}

export default AccountHeader;