import React from "react";
import Header from "./Header/Header";
import Balance from "./Balance";

export default Context => props => {
    const {content, balance, ...otherProps} = props;
    return <>
        <Header content={content}/>
        <Context {...otherProps}/>
        <Balance amount={balance}/>
    </>
}

