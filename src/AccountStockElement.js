import React, { Component } from 'react';
import styled from "styled-components";

export const StockSection = styled.div`
width: 759px;
height: 84px;
display: flex;
justify-content: space-between;

border: 1px dashed #E0E0E0;
border-width: 0px 0px 1px 0px;

&:hover {
    background: rgba(131, 58, 224, 0.05);
    cursor: pointer;
  }
`

export const Cont = styled.div`
display: flex`

export const SmallText = styled.p`
font-family: Space Mono;
font-size: 12px;
padding: 0px 10px;
width: 80px;

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.5)`

export const NameP = styled.p`
font-family: Roboto;
font-size: 22px;
width: 300px;

display: flex;
align-items: center;

color: #000000`

export const PriceP = styled.p`
font-family: Roboto;
font-size: 22px;

display: flex;
align-items: center;
text-align: right;

color: #000000`

export const PriceSpan = styled.span `
font-size: 16px`

const Green = styled.p`
font-family: Roboto;
font-size: 18px;

display: flex;
align-items: center;

color: #2FC20A`

const Red = styled.p`
font-family: Roboto;
font-size: 18px;
line-height: 10px;

display: flex;
align-items: center;

color: #FF2C2C`

export default class AccountStock extends Component {

    static defaultProps = {
        symbol: 'N/A',
        name: 'N/A',
        amount: 'N/A',
        price: 44.4,
        StockChange: 'N/A',
        StockChangeRate: 'N/A'
    }

    render() {
        const { symbol, name, price, amount, StockChange } = this.props;
        let StockChangeRate = (StockChange * 100 / price).toFixed(2);


        return (
            <StockSection>
                <Cont>
                    <SmallText> {symbol} </SmallText>
                    <NameP > {name} </NameP>
                    <SmallText> {amount} pcs </SmallText>
                </Cont>
                
                <PriceP>{Math.trunc(price)}. <PriceSpan> {(price%1).toFixed(2)*100} $ </PriceSpan></PriceP>
                {
                    (StockChange > 0) ?
                        (<Green> ⯅ +{StockChange}$ (+{StockChangeRate}%) </Green>) :
                        (<Red> ⯆ {StockChange}$ ({StockChangeRate}%) </Red>)
                }
            </StockSection>
        )
    }
}