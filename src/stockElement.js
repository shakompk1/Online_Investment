import React, { Component } from 'react';

import {StockSection, CodeP, NameP, PriceP} from './AccountStockElement.js';

export default class Stock extends Component {

    defaultProps = {
        Stockcode: 'N/A',
        StockName: 'N/A',
        StockPrice: 'N/A',
    }


    render() {
        let Stockcode = 'NKE';
        let StockName = 'Nike Inc.';
        let StockPrice = 12454.00;
        return (
            <StockSection>
                <CodeP> 
                {Stockcode}
                    <NameP > {StockName} </NameP>
                </CodeP>

                <PriceP> {StockPrice} $ </PriceP>
            </StockSection>
        )
    }
}