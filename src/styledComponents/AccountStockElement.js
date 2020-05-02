import React from 'react';
import {NameP, SmallText, AccountListItem} from "./componentsStyle";
import Price from "./Price";
import Difference from "./Difference";

export default props => {
    const {code, companyName, purchasePrice, amount, priceDifference, differenceRate} = props;
    return <AccountListItem>
                <SmallText> {code} </SmallText>
                <NameP> {companyName} </NameP>
                <SmallText> {amount} pcs </SmallText>
                <Price price={purchasePrice} />
                <Difference {...{priceDifference, differenceRate}} />
            </AccountListItem>
}