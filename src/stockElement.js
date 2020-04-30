import React, { Component } from 'react';

import { StockSection, SmallText, NameP, PriceP, PriceSpan, Cont } from './AccountStockElement.js';

export default class StockElement extends Component {

    static defaultProps = {
        symbol: 'N/A',
        name: 'N/A',
        price: 44.4,
    }

    render() {
        const { symbol, name, price } = this.props;
        return (
            <StockSection>
                <Cont>
                    <SmallText> {symbol} </SmallText>
                    <NameP > {name} </NameP>
                </Cont>

                <PriceP>{Math.trunc(price)}. <PriceSpan> {(price%1).toFixed(2)*100} $ </PriceSpan></PriceP>
            </StockSection>
        )
    }
}