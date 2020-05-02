import React from "react";
import {Green, Red} from "./stockStyleComp";

export default props => {
    const {priceDifference, differenceRate} = props;
    return priceDifference > 0 ?
        <Green> ⯅ +{priceDifference}$ (+{differenceRate}%) </Green> :
        <Red> ⯆ {priceDifference}$ ({differenceRate}%) </Red>
}