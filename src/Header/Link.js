import React from "react";
import {NavLink} from "react-router-dom";
import Style from './header.module.scss';

function Link(props){
    const {link} = props;
    return <NavLink activeClassName={Style.active} className={Style.link} to={'/'+link}>{link}</NavLink>;
}

export default Link;