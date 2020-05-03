import React from "react";
import { Green, Red, Gray } from "./componentsStyle";


// see https://ru.react.js.org/docs/components-and-props.html for more information
export default props => {
    const { priceDifference, differenceRate } = props;
    return priceDifference > 0 ?
        <Green> ⯅ +{priceDifference}$ (+{differenceRate}%) </Green> : priceDifference < 0 ?
            <Red> ⯆ {priceDifference}$ ({differenceRate}%) </Red> : <Gray> &#x2022; {"0.00$ (0.00%)"}</Gray>
}