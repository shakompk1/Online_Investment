import React from "react";
import {Green, Red} from "./componentsStyle";

export default props => {
    const {priceDifference, differenceRate} = props;
    return priceDifference > 0 ?
        <Green> ⯅ +{priceDifference}$ (+{differenceRate}%) </Green> :
        <Red> ⯆ {priceDifference}$ ({differenceRate}%) </Red>
}