import React, { Component } from 'react';
import { StockSection, SmallText, NameP, PriceP, Cont } from './AccountStockElement.js';
import styled from "styled-components";

const SmalNum = styled.span`
font-size: 20px`;

// import { StockSection, SmallText, NameP, PriceP, PriceSpan, Cont } from './AccountStockElement.js';

export default class StockElement extends Component {


    render() {
        const { symbol, name, price } = this.props;
        let priceSplit = String(price).split('.');
        console.log(priceSplit[0]);
        return (
            <StockSection>
                <Cont>
                    <SmallText> {symbol} </SmallText>
                    <NameP > {name} </NameP>
                </Cont>
                <PriceP><span>{priceSplit[0]}.<SmalNum>{priceSplit[1]} $</SmalNum></span> </PriceP>
            </StockSection>
        )
    }
}