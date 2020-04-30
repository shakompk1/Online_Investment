import React, { Component } from 'react';
import styled from "styled-components";

import { StockSection, SmallText, NameP, PriceP, Cont } from './AccountStockElement.js';



export default class StockElement extends Component {

    static defaultProps = {
        symbol: 'N/A',
        name: 'N/A',
        price: 'N/A',
    }

    render() {
        const { symbol, name, price } = this.props;
        return (
            <StockSection>
                <Cont>
                    <SmallText> {symbol} </SmallText>
                    <NameP > {name} </NameP>
                </Cont>

                <PriceP> {price} $ </PriceP>
            </StockSection>
        )
    }
}