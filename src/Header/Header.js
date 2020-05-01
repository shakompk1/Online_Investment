import React from "react";
import Link from "./Link";
import Style from './header.module.scss'
import logo from '../img/logo.png';

function Header({content}) {
    return (
        <>
            <div className={Style.header}>
                <div className={Style.navLinks}>
                    <Link link="account"/>
                    <Link link="stock"/>
                </div>
                <img src={logo} alt="logo"/>
            </div>
            <div className={Style.contentHeader}>{content}</div>
        </>
    );
}

export default Header;