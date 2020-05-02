import React from "react";
import {Green, Red} from "./componentsStyle";

export default props => {
    const {priceDifference, differenceRate} = props;
    return priceDifference > 0 ?
        <Green> ⯅ +{priceDifference}$ (+{differenceRate}%) </Green> : priceDifference < 0 ?
        <Red> ⯆ {priceDifference}$ ({differenceRate}%) </Red> : <div style={{height: '28px'}}/>
}