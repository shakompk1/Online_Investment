import React from "react";
import Link from "./Link";
import {Route} from 'react-router-dom'
import Style from './header.module.scss'
import logo from '../img/logo.png';
import AccountHeader from "../Account/AccountHeader";
import BuyHeader from "../Buy/BuyHeader";

function Header() {
    return (
        <>
            <div className={Style.header}>
                <div className={Style.navLinks}>
                    <Link link="account"/>
                    <Link link="stock"/>
                </div>
                <img src={logo} alt="logo"/>
            </div>
            <div className={Style.contentHeader}>
                <Route path="/account"><AccountHeader price={1.12} StockChange={546.2}/></Route>
                <Route path="/buy/:code" render={prop => <BuyHeader name={prop.match.params.code}/>}/>
            </div>
        </>
    );
}

export default Header;