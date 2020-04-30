import React, { Component } from 'react';
import styled from "styled-components";

export const StockSection = styled.div`
width: 759px;
height: 84px;
display: flex;
vertical-align: center;
justify-content: space-between;

border: 1px dashed #E0E0E0;
border-width: 0px 0px 1px 0px;

&:hover {
    background: rgba(131, 58, 224, 0.05);
    cursor: pointer;
  }
`

export const CodeP = styled.p`
font-family: Space Mono;
font-size: 12px;
line-height: 10px;
padding: 0px 20px;
/* identical to box height, or 83% */

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.5);`

export const NameP = styled.p`
font-family: Roboto;
font-size: 22px;
line-height: 18px;
padding: 0px 20px;
/* identical to box height, or 82% */

display: flex;
align-items: center;

color: #000000;`

const PcsP = styled.p`
font-family: Space Mono;
font-size: 12px;
line-height: 10px;
/* identical to box height, or 83% */

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.5);`

export const PriceP = styled.p`
font-family: Roboto;
font-size: 22px;
line-height: 18px;
/* identical to box height, or 82% */

display: flex;
align-items: center;
text-align: right;

color: #000000;`

const Green = styled.p`
font-family: Roboto;
font-size: 18px;
line-height: 10px;
/* identical to box height, or 56% */

display: flex;
align-items: center;

color: #2FC20A;
`

const Red = styled.p`
font-family: Roboto;
font-size: 18px;
line-height: 10px;

display: flex;
align-items: center;

color: #FF2C2C;`

export default class AccountStock extends Component {

    static defaultProps = {
        symbol: 'N/A',
        name: 'N/A',
        amount: 'N/A',
        price: 'N/A',
        StockChange: 'N/A',
        StockChangeRate: 'N/A'
    }

    render() {
        const {symbol, name, price, amount, StockChange} = this.props;
        let StockChangeRate = (StockChange * 100 / price).toFixed(2);

        return (
            <StockSection>
                <CodeP> {symbol} </CodeP>
                <NameP > {name} </NameP>
                <PcsP> {amount} pcs </PcsP>
                <PriceP> {price} $ </PriceP>
                {
                    (StockChange > 0) ?
                        (<Green> ⯅ +{StockChange}$ (+{StockChangeRate}%) </Green>) :
                        (<Red> ⯆ {StockChange}$ ({StockChangeRate}%) </Red>)
                }
            </StockSection>
        )
    }
}