import React from "react";
import Style from './buy.module.scss';
import {NavLink} from "react-router-dom";
import back from '../img/left.png';
import {getStockData} from "../data";

function BuyHeader({name}) {
    return <div className={Style.buyHeader}>
        <NavLink className={Style.link} to="/stock">
            <img src={back} alt="back"/>
            <span>Back</span>
        </NavLink>
        <p className={Style.name}>
            <span>
                Buy {getStockData(name).then(stock => stock.profile.companyName)}
            </span>
        </p>
    </div>
}

export default BuyHeader;
