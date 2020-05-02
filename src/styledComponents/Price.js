import React from "react";
import {Fraction, Integer} from "./componentsStyle";

export default props => {
    const {price} = props;
    return <Integer>{Math.trunc(price)}.
                <Fraction> {Math.trunc((price % 1).toFixed(2) * 100)} $ </Fraction>
            </Integer>
}