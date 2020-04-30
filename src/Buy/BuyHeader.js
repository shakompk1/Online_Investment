import React from "react";
import Style from './buy.module.scss';
import {NavLink} from "react-router-dom";
import back from '../img/left.png';

function BuyHeader({name}) {
    return <div className={Style.buyHeader}>
        <NavLink className={Style.link} to="/account">
            <img src={back} alt="back"/>
            <span>Back</span>
        </NavLink>
        <p className={Style.name}>Buy {name}</p>
    </div>
}

export default BuyHeader;
