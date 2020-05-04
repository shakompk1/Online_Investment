import React from "react";
import { NavLink, Route } from 'react-router-dom'
import Style from './header.module.scss'
import logo from '../../img/logo.png';
import AccountHeader from "../Account/AccountHeader";
import BuyHeader from "../Buy/BuyHeader";
import SellHeader from "../Sell/SellHeader";

function Header() {
    return (
        <>
            <div className={Style.header}>
                <div className={Style.navLinks}>
                    <NavLink activeClassName={Style.active} className={Style.link} exact to='/'>Account</NavLink>
                    <NavLink activeClassName={Style.active} className={Style.link} to='/stock'>Stock</NavLink>
                </div>
                <img src={logo} alt="logo" />
            </div>
            <div className={Style.contentHeader}>
                <Route exact path="/"><AccountHeader /></Route>
                <Route path="/buy/:code" render={prop => <BuyHeader name={prop.match.params.code} />} />
                <Route path="/sell/:code" render={prop => <SellHeader name={prop.match.params.code} />} />
            </div>
        </>
    );
}

export default Header;