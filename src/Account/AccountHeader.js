import React from "react";
import Style from './account.module.scss';
import {Green, Red, StockSection} from "../AccountStockElement";
import SumOfStocksEl from '../SumOfStocks'


// изменить функцию на класс
function AccountHeader({price, StockChange}){
    let StockChangeRate = (StockChange * 100 / price).toFixed(2);

    return <div className={Style.accHeader}>
        <SumOfStocksEl />
        {
            (StockChange > 0) ?
                (<Green> ⯅ +{StockChange}$ (+{StockChangeRate}%) </Green>) :
                (<Red> ⯆ {StockChange}$ ({StockChangeRate}%) </Red>)
        }
            </div>
}

export default AccountHeader;