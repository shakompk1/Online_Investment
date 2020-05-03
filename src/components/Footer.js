// "Footer" is named as "Balance" in App

import React from 'react';
import { FtrSmllText, Amount, Footer, Name } from "../styledComponents/componentsStyle";

export default props => {
    const arrAmount = String(props.amount).split('.');
    return <Footer>
                <Name>Balance:</Name>
                <Amount><span>{arrAmount[0]}<FtrSmllText>.{arrAmount[1]} $</FtrSmllText></span></Amount>
            </Footer>
}