import React, { Component } from 'react';

import {StockSection, CodeP, NameP, PriceP} from './AccountStockElement.js';

export default class Stock extends Component {

    static defaultProps = {
        symbol: 'N/A',
        name: 'N/A',
        price: 'N/A',
    }

    render() {
        const {symbol, name, price} = this.props;
        return (
            <StockSection>
                <CodeP> 
                {symbol}
                    <NameP > {name} </NameP>
                </CodeP>

                <PriceP> {price} $ </PriceP>
            </StockSection>
        )
    }
}