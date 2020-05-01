import React from "react";
import Style from './buy.module.scss';
import {NavLink} from "react-router-dom";
import back from '../img/left.png';

function BuyHeader({name}) {
    return <div className={Style.buyHeader}>
        <NavLink className={Style.link} to="/stock">
            <img src={back} alt="back"/>
            <span>Back</span>
        </NavLink>
        <p className={Style.name}><span>Buy {name}</span></p>
    </div>
}

export default BuyHeader;
