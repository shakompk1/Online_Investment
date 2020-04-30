import React from "react";
import Header from "./Header/Header";
import Balance from "./Balance";

export default Context => props =>
    <>
        <Header content={props.content}/>
        <Context {...props}/>
        <Balance amount={props.balance}/>
    </>

